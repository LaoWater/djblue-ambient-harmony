import { useQuery } from "@tanstack/react-query";
import { ExternalLink, RefreshCw, Users } from "lucide-react";
import {
  PROJECT_REPO_URL,
  type Maintainer,
} from "@/lib/maintainers";
import { maintainersQueryOptions } from "@/lib/githubQueries";

const principles = [
  {
    title: "Ambient Intelligence",
    description: "Technology should be invisible but invaluable. DJ Blue works in the background, enhancing experiences without demanding attention.",
  },
  {
    title: "Emotional Awareness",
    description: "Music amplifies emotion; it doesn't distract from the message. We understand the emotional arc of conversations and respond accordingly.",
  },
  {
    title: "Continuous Companionship",
    description: "Unlike one-off tools, DJ Blue is a persistent presence that grows with you, learning and adapting over time.",
  },
  {
    title: "Anticipatory Creativity",
    description: "We anticipate what music, notes, or insights will be valuable, proactively creating value without explicit commands.",
  },
  {
    title: "Simplicity Through Intelligence",
    description: "Complexity is hidden behind intuitive interactions. One click transforms raw conversation into a crafted experience.",
  },
  {
    title: "Personal Sovereignty",
    description: "You maintain full control over your data, music library, preferences, and how the AI assists you.",
  },
];

type PhilosophyProps = {
  showMaintainers?: boolean;
};

export const Philosophy = ({ showMaintainers = false }: PhilosophyProps) => {
  const {
    data: maintainers = [] as Maintainer[],
    isLoading: isLoadingMaintainers,
    error,
  } = useQuery({
    ...maintainersQueryOptions(),
    enabled: showMaintainers,
  });
  const maintainersError = error
    ? "Could not load maintainers from GitHub right now."
    : null;

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {showMaintainers && (
            <div className="glass-strong rounded-2xl p-6 mb-10 space-y-5 animate-slide-up">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.24em] uppercase text-muted-foreground">
                    Maintainers
                  </p>
                  <h3 className="text-2xl font-display font-bold flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Active Project Maintainers
                  </h3>
                </div>
                <a
                  href={PROJECT_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View Repository
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {isLoadingMaintainers && (
                <p className="text-sm text-muted-foreground">
                  Loading maintainers from GitHub...
                </p>
              )}

              {!isLoadingMaintainers && maintainers.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {maintainers.map((maintainer) => (
                    <a
                      key={maintainer.username}
                      href={maintainer.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-border/60 bg-card/60 p-3 hover:border-primary/50 transition-colors duration-300"
                    >
                      <img
                        src={maintainer.avatarUrl}
                        alt={`${maintainer.username} avatar`}
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <p className="font-medium truncate">{maintainer.username}</p>
                        <p className="text-xs text-muted-foreground">
                          {maintainer.contributions} contributions
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {!isLoadingMaintainers && maintainersError && (
                <div className="text-sm text-amber-300/90 bg-amber-500/10 border border-amber-400/30 rounded-lg px-3 py-2 inline-flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  {maintainersError}
                </div>
              )}
            </div>
          )}

          <div className="text-center mb-16 space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Our <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every aspect of DJ Blue
            </p>
          </div>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group glass-strong rounded-xl p-8 hover:bg-card/70 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center text-2xl font-bold text-white">
                    {index + 1}
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-2xl font-display font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary via-purple to-accent rounded-full transition-all duration-700 mt-6" />
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center glass-strong rounded-2xl p-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <blockquote className="text-2xl md:text-3xl font-display font-medium gradient-text leading-relaxed">
              "Where conversation meets intelligence,
              <br />
              every moment is emotionally amplified."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
