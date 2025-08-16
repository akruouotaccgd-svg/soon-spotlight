import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";

const ComingSoonHero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when we launch.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-secondary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="p-4 rounded-full bg-primary/20 border border-primary/30 animate-pulse-glow">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Coming Soon
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Something amazing is on the way.
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto">
            Be the first to know when we launch our revolutionary platform.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 bg-card/50 border-border/50 backdrop-blur-sm focus:bg-card/80 transition-all duration-300"
                  required
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="h-12 px-8 group"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  "Subscribed!"
                ) : (
                  <>
                    Notify Me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
    </div>
  );
};

export default ComingSoonHero;