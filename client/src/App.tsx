import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>

        <WhatsAppButton />
        <Toaster />
      </div>
    </TooltipProvider>
  );
}
