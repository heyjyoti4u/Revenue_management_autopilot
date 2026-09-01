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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/str" component={() => <ContentPage path="/str" />} />
      <Route path="/str/:slug" component={({ params }) => <ContentPage path={`/str/${params.slug}`} />} />
      <Route path="/hotel" component={() => <ContentPage path="/hotel" />} />
      <Route path="/hotel/:slug" component={({ params }) => <ContentPage path={`/hotel/${params.slug}`} />} />
      <Route path="/case-studies" component={() => <ContentPage path="/case-studies" />} />
      <Route path="/case-studies/:slug" component={({ params }) => <ContentPage path={`/case-studies/${params.slug}`} />} />
      <Route path="/resources" component={() => <ContentPage path="/resources" />} />
      <Route path="/resources/:slug" component={({ params }) => <ContentPage path={`/resources/${params.slug}`} />} />
      <Route path="/about" component={() => <ContentPage path="/about" />} />
      <Route path="/partners" component={() => <ContentPage path="/partners" />} />
      <Route path="/contact" component={() => <ContentPage path="/contact" />} />
      <Route path="/careers" component={() => <ContentPage path="/careers" />} />
      <Route path="/book-a-call-with-our-experts" component={() => <ContentPage path="/book-a-call-with-our-experts" />} />
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
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
