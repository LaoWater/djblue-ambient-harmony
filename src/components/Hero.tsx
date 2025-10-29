import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import mascot from "@/assets/djblue-mascot.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Waveform Visualization */}
      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 opacity-20">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-primary to-accent rounded-full animate-wave"
            style={{
              animationDelay: `${i * 0.05}s`,
              height: '20%'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium gradient-text">
                Your Continuous AI Companion
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Where <span className="gradient-text">Conversation</span>
              <br />
              Meets <span className="gradient-text-accent">Intelligence</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              DJ Blue transforms your conversations with real-time emotion detection,
              adaptive music curation, and intelligent assistance. Every moment,
              emotionally amplified.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground glow">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline" className="glass">
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Continuous Listening</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">Real-time</div>
                <div className="text-sm text-muted-foreground">Emotion Analysis</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">Adaptive</div>
                <div className="text-sm text-muted-foreground">Music Selection</div>
              </div>
            </div>
          </div>

          {/* Mascot Image with Effects */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl" />
            <img
              src={mascot}
              alt="DJ Blue Mascot"
              className="relative w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
