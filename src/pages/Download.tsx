import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Apple, Code, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const platforms = [
  {
    name: "macOS",
    icon: Apple,
    description: "For Mac computers with Intel or Apple Silicon",
    version: "v1.0.0",
    size: "128 MB",
  },
  {
    name: "Windows",
    icon: Monitor,
    description: "For Windows 10 and Windows 11",
    version: "v1.0.0",
    size: "142 MB",
  },
  {
    name: "Linux",
    icon: Code,
    description: "For Ubuntu, Debian, and other distributions",
    version: "v1.0.0",
    size: "135 MB",
  },
];

const Download = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                Download <span className="gradient-text">DJ Blue</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose your platform and start transforming your conversations today
              </p>
            </div>

            {/* Platform Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div
                    key={platform.name}
                    className="glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-500 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple flex items-center justify-center glow">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-display font-bold mb-2">
                          {platform.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {platform.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-4">
                        <span>{platform.version}</span>
                        <span>{platform.size}</span>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90 glow">
                        <DownloadIcon className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Setup Instructions */}
            <div className="max-w-3xl mx-auto space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="glass-strong rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Getting Started
                </h2>

                <ol className="space-y-4">
                  {[
                    {
                      step: "Download & Install",
                      description: "Download DJ Blue for your platform and run the installer.",
                    },
                    {
                      step: "Create Your Account",
                      description: "Sign up or log in to activate your subscription.",
                    },
                    {
                      step: "Configure Preferences",
                      description: "Set up your profile, goals, and music preferences.",
                    },
                    {
                      step: "Start Your First Session",
                      description: "Click record and let DJ Blue enhance your conversation.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold mb-1">{item.step}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* System Requirements */}
              <div className="glass-strong rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold mb-4">
                  System Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h3 className="font-semibold mb-2">Minimum</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 8GB RAM</li>
                      <li>• 500MB storage</li>
                      <li>• Microphone access</li>
                      <li>• Internet connection</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Recommended</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 16GB RAM or more</li>
                      <li>• 2GB storage</li>
                      <li>• High-quality microphone</li>
                      <li>• Stable internet (5+ Mbps)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="text-center glass rounded-xl p-6">
                <p className="text-muted-foreground mb-4">
                  Need help with installation?
                </p>
                <Link to="/help">
                  <Button variant="outline" className="glass">
                    Visit Help Center
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Download;
