import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out DJ Blue",
    features: [
      "Up to 5 hours/month",
      "Basic emotion detection",
      "Standard music library",
      "Manual note-taking",
      "Single device",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For professionals and power users",
    features: [
      "Unlimited recording hours",
      "Advanced emotion intelligence",
      "Custom music uploads",
      "AI-powered notes & insights",
      "Multi-device sync",
      "Priority support",
      "Export & sharing",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$99",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "Everything in Professional",
      "Up to 10 team members",
      "Shared music libraries",
      "Team analytics & insights",
      "Admin controls",
      "Dedicated support",
      "Custom integrations",
      "Volume discounts available",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                Simple <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose the plan that fits your needs. All plans include a 14-day free trial.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative glass-strong rounded-2xl p-8 flex flex-col animate-slide-up ${
                    plan.popular ? "ring-2 ring-primary scale-105" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-sm font-medium text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="space-y-6 flex-1">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-display font-bold gradient-text">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground">{plan.period}</span>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/signup" className="mt-8">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 glow"
                          : "bg-secondary hover:bg-secondary/90"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-display font-bold text-center mb-12">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "Can I switch plans anytime?",
                    a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.",
                  },
                  {
                    q: "What happens after my free trial?",
                    a: "After your 14-day free trial, you'll be charged based on your selected plan. You can cancel anytime before the trial ends with no charge.",
                  },
                  {
                    q: "Do you offer refunds?",
                    a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with DJ Blue.",
                  },
                  {
                    q: "Is my data secure?",
                    a: "Absolutely. DJ Blue runs locally on your machine, and you maintain full control over your data. We never store your conversations on our servers.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="glass-strong rounded-xl p-6">
                    <h3 className="font-display font-bold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
