/**
 * SignalStay app shell — dark operations-desk theme by default.
 * Public landing-page routing stays intentionally small and escape-friendly.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ContentPage from "./pages/ContentPage";
import DetailedPage from "./pages/DetailedPage";
import InstallPrompt from "./components/InstallPrompt";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/str" component={() => <DetailedPage route="str" />} />
      <Route path="/str/revenue-management" component={() => <DetailedPage route="revenue" />} />
      <Route path="/str/ota-optimization" component={() => <DetailedPage route="ota" />} />
      <Route path="/str/:slug" component={({ params }) => <ContentPage path={`/str/${params.slug}`} />} />
      <Route path="/hotel" component={() => <DetailedPage route="hotel" />} />
      <Route path="/hotel/revenue-management" component={() => <DetailedPage route="hotel-revenue" />} />
      <Route path="/hotel/ota-optimization" component={() => <DetailedPage route="hotel-ota" />} />
      <Route path="/hotel/:slug" component={({ params }) => <ContentPage path={`/hotel/${params.slug}`} />} />
      <Route path="/case-studies" component={() => <DetailedPage route="customers" />} />
      <Route path="/case-studies/:slug" component={({ params }) => <ContentPage path={`/case-studies/${params.slug}`} />} />
      <Route path="/resources" component={() => <DetailedPage route="resources" />} />
      <Route path="/resources/:slug" component={({ params }) => <ContentPage path={`/resources/${params.slug}`} />} />
      <Route path="/about" component={() => <DetailedPage route="about" />} />
      <Route path="/partners" component={() => <ContentPage path="/partners" />} />
      <Route path="/contact" component={() => <ContentPage path="/contact" />} />
      <Route path="/careers" component={() => <ContentPage path="/careers" />} />
      <Route path="/book-a-call-with-our-experts" component={() => <DetailedPage route="book" />} />
      <Route path="/404" component={NotFound} />
      <Route component={() => <ContentPage path="/detail" />} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
          <InstallPrompt />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
