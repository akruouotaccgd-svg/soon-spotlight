import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ComingSoonHero = () => {
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
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Something amazing is on the way.
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
    </div>
  );
};

export default ComingSoonHero;