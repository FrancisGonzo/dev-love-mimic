import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-lovable-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">❤️</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Lovable</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Community
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Enterprise
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Learn
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Launched
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Log in
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;