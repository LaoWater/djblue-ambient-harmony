import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Brain, Music, Mic, Sparkles, Heart, Zap, Headphones, FileText, TrendingUp, Shield } from "lucide-react";

const featuresList = [
  {
    icon: Brain,
    title: "Real-Time Emotion Intelligence",
    description: "Advanced AI analyzes tone, mood, sentiment, and conversational context in real-time, understanding the emotional arc of every interaction.",
    details: [
      "Multi-dimensional emotion detection",
      "Context-aware sentiment analysis",
      "Conversation flow understanding",
      "Adaptive response modeling"
    ]
  },
  {
    icon: Music,
    title: "Adaptive Music Curation",
    description: "Automatically selects and mixes background music that enhances the moment, creating immersive soundscapes for every conversation.",
    details: [
      "Intelligent music selection",
      "Real-time mixing and transitions",
      "Personal library integration",
      "Mood-based playlists"
    ]
  },
  {
    icon: Mic,
    title: "Continuous Listening",
    description: "Always present but never intrusive. DJ Blue listens, learns, and evolves with you across every session and conversation.",
    details: [
      "24/7 availability",
      "Multi-session continuity",
      "Contextual memory",
      "Progressive learning"
    ]
  },
  {
    icon: Sparkles,
    title: "Smart Assistance",
    description: "Intelligent note-taking, action item extraction, and personalized insights based on conversation context and your goals.",
    details: [
      "Automatic transcription",
      "Key point extraction",
      "Action item tracking",
      "Personalized recommendations"
    ]
  },
  {
    icon: Heart,
    title: "Personal Memory",
    description: "Remembers your preferences, goals, past conversations, and provides contextual continuity across all interactions.",
    details: [
      "User profile learning",
      "Preference adaptation",
      "Historical context",
      "Goal tracking"
    ]
  },
  {
    icon: Zap,
    title: "Anticipatory Creativity",
    description: "Proactively creates value by anticipating what music, notes, or insights will be most valuable in the moment.",
    details: [
      "Predictive recommendations",
      "Proactive suggestions",
      "Creative insights",
      "Contextual awareness"
    ]
  },
  {
    icon: Headphones,
    title: "Professional Audio Quality",
    description: "Studio-grade audio processing with multi-track recording, mixing, and rendering capabilities.",
    details: [
      "High-fidelity recording",
      "Professional mixing",
      "Audio enhancement",
      "Export flexibility"
    ]
  },
  {
    icon: FileText,
    title: "Deep Customization",
    description: "Define your purpose, tasks, roles, and goals. Upload and manage your personal music library.",
    details: [
      "Custom user profiles",
      "Music library management",
      "Template configurations",
      "Preference controls"
    ]
  },
  {
    icon: TrendingUp,
    title: "Cross-Session Continuity",
    description: "Persistent memory and evolving understanding across all your conversations and projects.",
    details: [
      "Session history",
      "Progress tracking",
      "Evolving intelligence",
      "Contextual linking"
    ]
  },
  {
    icon: Shield,
    title: "Privacy-First Design",
    description: "Your data, your control. Everything runs locally with full sovereignty over your information.",
    details: [
      "Local processing",
      "Data ownership",
      "Secure storage",
      "Privacy controls"
    ]
  }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                Powerful <span className="gradient-text">Features</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                DJ Blue combines cutting-edge AI with intuitive design to transform
                every conversation into an emotionally amplified experience.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {featuresList.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="glass-strong rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center glow">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <div className="space-y-4 flex-1">
                        <h3 className="text-2xl font-display font-bold">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>

                        <ul className="space-y-2">
                          {feature.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
