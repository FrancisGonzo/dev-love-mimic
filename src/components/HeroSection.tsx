import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp, Paperclip, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-hero-gradient flex flex-col items-center justify-center px-6 pt-20">
      {/* Hero Content */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          Build something{" "}
          <span className="inline-flex items-center">
            <span className="text-lovable-orange mr-2">❤️</span>
            Lovable
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Create apps and websites by chatting with AI
        </p>
      </div>

      {/* Chat Input */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative bg-white/10 backdrop-blur-glass rounded-2xl border border-white/20 p-6 shadow-2xl">
          <div className="relative">
            <Input
              placeholder="Ask Lovable to create a landing page..."
              className="w-full bg-background/80 border-border/50 rounded-xl py-4 px-6 text-lg placeholder:text-muted-foreground focus:ring-2 focus:ring-lovable-orange/20 focus:border-lovable-orange/30"
            />
            
            {/* Input Actions */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Paperclip className="w-4 h-4 mr-2" />
                  Attach
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Public
                </Button>
              </div>
              
              <Button 
                size="sm" 
                className="bg-muted hover:bg-muted/80 text-muted-foreground rounded-full w-8 h-8 p-0"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;