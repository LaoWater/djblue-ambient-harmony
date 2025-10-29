import { Brain, Music, Mic, Sparkles, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Emotion Intelligence",
    description: "Real-time analysis of tone, mood, and context to understand the emotional arc of your conversations.",
    gradient: "from-primary to-purple",
  },
  {
    icon: Music,
    title: "Adaptive Soundscapes",
    description: "Automatically curates and mixes background music that enhances the moment without distracting.",
    gradient: "from-purple to-accent",
  },
  {
    icon: Mic,
    title: "Continuous Listening",
    description: "Always present, always learning. DJ Blue grows with you across every conversation and session.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Sparkles,
    title: "Smart Assistance",
    description: "Intelligent note-taking, action items, and personalized insights based on conversation context.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Heart,
    title: "Personal Memory",
    description: "Remembers your preferences, goals, and past conversations to provide contextual continuity.",
    gradient: "from-accent to-purple",
  },
  {
    icon: Zap,
    title: "Anticipatory Creativity",
    description: "Proactively creates value by anticipating what music, notes, or insights will be most valuable.",
    gradient: "from-purple to-primary",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Core <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ambient intelligence that transforms how you experience conversations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20 blur-xl`} />
                </div>

                <div className="relative space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center glow-strong`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-display font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
