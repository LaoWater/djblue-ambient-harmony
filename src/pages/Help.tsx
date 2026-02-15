import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Book, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with DJ Blue?",
    answer: "Download DJ Blue for your platform from our Downloads page, create an account, and follow the setup wizard to configure your preferences. You'll be enhancing your conversations in minutes!",
  },
  {
    question: "Does DJ Blue work offline?",
    answer: "Yes! DJ Blue runs locally on your machine and can function offline for recording and music playback. Some AI features require an internet connection for optimal performance.",
  },
  {
    question: "How does the emotion detection work?",
    answer: "DJ Blue uses advanced AI to analyze tone, cadence, and conversational context in real-time. It detects emotional shifts and adapts the music accordingly without storing sensitive conversation data.",
  },
  {
    question: "Can I use my own music?",
    answer: "Absolutely! DJ Blue allows you to upload, organize, and curate your personal music library. The AI will learn your preferences and incorporate your music into its selections.",
  },
  {
    question: "Is my data private and secure?",
    answer: "DJ Blue can run in local mode and also supports optional cloud processing for enabled AI features. If you use BYOK integrations, requests are sent to the provider tied to your key.",
  },
  {
    question: "What platforms are supported?",
    answer: "DJ Blue is available for macOS, Windows, and Linux. We're continuously working to expand platform support.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time from your dashboard. Your access will continue until the end of your current billing period.",
  },
  {
    question: "How do I report a bug or request a feature?",
    answer: "Use the contact form below or email us at privacy@djblue.ai. We actively review all feedback and prioritize features based on user requests.",
  },
];

const Help = () => {
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
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                How can we <span className="gradient-text">help?</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions or get in touch with our support team
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {[
                { icon: Book, label: "Documentation", link: "#faq" },
                { icon: MessageCircle, label: "Contact Support", link: "#contact" },
                { icon: HelpCircle, label: "FAQ", link: "#faq" },
                { icon: Mail, label: "Email Us", link: "#contact" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.link}
                    className="glass-strong rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-medium">{item.label}</div>
                  </a>
                );
              })}
            </div>

            {/* FAQ */}
            <div id="faq" className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-display font-bold text-center mb-8 animate-slide-up">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact" className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-center mb-8 animate-slide-up">
                Still need help? <span className="gradient-text">Get in touch</span>
              </h2>
              <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="John Doe" className="glass" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" className="glass" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="glass" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or issue..."
                      rows={6}
                      className="glass resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 glow">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Direct Contact */}
              <div className="mt-8 text-center glass rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Or email us directly at
                </p>
                <a
                  href="mailto:privacy@djblue.ai"
                  className="text-primary hover:underline font-medium"
                >
                  privacy@djblue.ai
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
