import { Briefcase, GraduationCap, Lightbulb, Users } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Professional",
    scenarios: [
      "Team meetings & standups",
      "Client calls & presentations",
      "Training sessions & webinars",
      "Performance reviews"
    ],
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Educational",
    scenarios: [
      "Tutoring sessions",
      "Study groups",
      "Online courses",
      "Academic discussions"
    ],
    color: "purple",
  },
  {
    icon: Lightbulb,
    title: "Creative",
    scenarios: [
      "Podcast recording",
      "Content brainstorming",
      "Creative workshops",
      "Music production sessions"
    ],
    color: "accent",
  },
  {
    icon: Users,
    title: "Social",
    scenarios: [
      "Friend gatherings",
      "Family calls",
      "Community events",
      "Book clubs & discussions"
    ],
    color: "primary",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Every <span className="gradient-text-accent">Conversation</span>, Amplified
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From boardrooms to living rooms, DJ Blue adapts to your unique context
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <div
                key={useCase.title}
                className="group glass-strong rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-${useCase.color}/20 flex items-center justify-center border border-${useCase.color}/30`}>
                    <Icon className={`w-6 h-6 text-${useCase.color}`} style={{
                      color: `hsl(var(--${useCase.color}))`
                    }} />
                  </div>

                  <h3 className="text-xl font-display font-bold">
                    {useCase.title}
                  </h3>

                  <ul className="space-y-2">
                    {useCase.scenarios.map((scenario) => (
                      <li key={scenario} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${useCase.color}/10 to-transparent`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-muted-foreground mb-4">
            One companion for all your conversational moments
          </p>
        </div>
      </div>
    </section>
  );
};
