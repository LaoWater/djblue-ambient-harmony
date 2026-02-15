import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles, Target, Users, Zap } from "lucide-react";
import singingMascot from "@/assets/singing-mascot.webm";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We push the boundaries of what's possible when AI meets human conversation and emotion.",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Every feature is designed to enhance human connection and amplify emotional intelligence.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build for people who value meaningful conversations and creative expression.",
  },
  {
    icon: Zap,
    title: "Simplicity",
    description: "Complex technology hidden behind intuitive design that feels natural and effortless.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6 animate-slide-up">
                  <h1 className="text-5xl md:text-6xl font-display font-bold">
                    About <span className="gradient-text">DJ Blue</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    We're on a mission to transform how people experience conversations
                    through the power of emotional intelligence and adaptive music.
                  </p>
                </div>

                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl" />
                  <video
                    src={singingMascot}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="relative w-full max-w-sm mx-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Story */}
              <div className="glass-strong rounded-2xl p-8 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    DJ Blue was born from a simple observation: music has the power to
                    amplify emotion, but finding the right soundtrack for life's moments
                    often requires effort that breaks the flow of conversation.
                  </p>
                  <p>
                    We imagined a world where an intelligent companion could understand
                    the emotional context of your conversations and seamlessly provide
                    the perfect musical atmosphere—without you having to think about it.
                  </p>
                  <p>
                    What started as an experiment in emotion detection and music curation
                    evolved into a comprehensive AI companion that not only enhances your
                    conversations with music but also provides intelligent assistance,
                    note-taking, and personalized insights.
                  </p>
                  <p>
                    Today, DJ Blue is more than a tool—it's a continuous companion that
                    grows with you, learning your preferences and adapting to your unique
                    conversational style.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="mb-16">
                <h2 className="text-3xl font-display font-bold text-center mb-12 animate-slide-up">
                  Our <span className="gradient-text">Values</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div
                        key={value.title}
                        className="glass-strong rounded-xl p-6 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold mb-2">{value.title}</h3>
                            <p className="text-sm text-muted-foreground">{value.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Vision */}
              <div className="text-center glass-strong rounded-2xl p-12 animate-slide-up">
                <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A world where technology enhances human connection rather than
                  distracting from it—where every conversation is emotionally amplified
                  and every moment feels more meaningful.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
