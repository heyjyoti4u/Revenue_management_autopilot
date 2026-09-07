/**
 * SignalStay install prompt — a visible, user-controlled PWA entry point.
 * The browser owns the native install permission; this component owns discoverability.
 */
import { useEffect, useState } from "react";
import { Download, ExternalLink, X } from "lucide-react";

interface DeferredInstallPrompt extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

type InstallMode = "native" | "ios" | "manual";

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || ("standalone" in navigator && Boolean((navigator as Navigator & { standalone?: boolean }).standalone));
}

function getInstallMode(): InstallMode {
  const ua = window.navigator.userAgent.toLowerCase();
  const isIos = /iphone|ipad|ipod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return isIos ? "ios" : "manual";
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<DeferredInstallPrompt | null>(null);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<InstallMode>("manual");

  useEffect(() => {
    if (isStandalone() || sessionStorage.getItem("signalstay-install-dismissed") === "1") return;

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as DeferredInstallPrompt);
      setMode("native");
      window.setTimeout(() => setVisible(true), 1200);
    };

    const onAppInstalled = () => {
      setVisible(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    const timer = window.setTimeout(() => {
      if (!isStandalone()) {
        setMode(getInstallMode());
        setVisible(true);
      }
    }, 4200);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("signalstay-install-dismissed", "1");
    setVisible(false);
  };

  const install = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="install-prompt" role="dialog" aria-modal="false" aria-labelledby="install-prompt-title">
      <button className="install-prompt__close" type="button" aria-label="Dismiss install prompt" onClick={dismiss}><X size={16} /></button>
      <div className="install-prompt__icon"><Download size={18} /></div>
      <div className="install-prompt__copy">
        <span className="install-prompt__eyebrow">SignalStay / field kit</span>
        <h2 id="install-prompt-title">Keep the signal close.</h2>
        {mode === "native" ? (
          <p>Install the revenue operations desk for a faster, full-screen view.</p>
        ) : mode === "ios" ? (
          <p>Tap <strong>Share</strong>, then choose <strong>Add to Home Screen</strong> to install SignalStay.</p>
        ) : (
          <p>Use your browser menu and choose <strong>Install app</strong> or <strong>Add to Home Screen</strong>.</p>
        )}
      </div>
      {mode === "native" ? (
        <button className="install-prompt__action" type="button" onClick={install}>Install <ExternalLink size={14} /></button>
      ) : (
        <button className="install-prompt__action install-prompt__action--quiet" type="button" onClick={dismiss}>Got it</button>
      )}
    </aside>
  );
}
