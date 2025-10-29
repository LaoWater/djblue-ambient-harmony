import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Settings, Music, TrendingUp, Clock } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="mb-12 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
                Welcome back, <span className="gradient-text">User</span>
              </h1>
              <p className="text-muted-foreground">
                Your DJ Blue companion dashboard
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Total Sessions", value: "42", icon: Clock },
                { label: "Hours Recorded", value: "18.5", icon: TrendingUp },
                { label: "Music Tracks", value: "234", icon: Music },
                { label: "Active Days", value: "12", icon: TrendingUp },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-strong rounded-xl p-6 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Subscription */}
              <div className="lg:col-span-2 space-y-6">
                <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Your Subscription
                  </h2>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-xl font-bold mb-1">Professional Plan</div>
                      <div className="text-sm text-muted-foreground">Renews on March 15, 2025</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">$29</div>
                      <div className="text-sm text-muted-foreground">/month</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" className="glass">
                      Manage Subscription
                    </Button>
                    <Button variant="outline" className="glass">
                      Billing History
                    </Button>
                  </div>
                </div>

                {/* Recent Sessions */}
                <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Recent Sessions
                  </h2>
                  <div className="space-y-4">
                    {[
                      { title: "Team Standup", date: "Today, 10:00 AM", duration: "45 min" },
                      { title: "Client Call", date: "Yesterday, 2:30 PM", duration: "1h 15min" },
                      { title: "Creative Brainstorm", date: "Jan 10, 4:00 PM", duration: "2h 30min" },
                    ].map((session) => (
                      <div key={session.title} className="flex items-center justify-between p-4 glass rounded-xl hover:bg-card/40 transition-colors cursor-pointer">
                        <div>
                          <div className="font-medium">{session.title}</div>
                          <div className="text-sm text-muted-foreground">{session.date}</div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {session.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <h2 className="text-xl font-display font-bold mb-6">
                    Quick Actions
                  </h2>
                  <div className="space-y-3">
                    <Button className="w-full justify-start bg-primary hover:bg-primary/90 glow">
                      <Download className="w-4 h-4 mr-2" />
                      Download App
                    </Button>
                    <Button variant="outline" className="w-full justify-start glass">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start glass">
                      <Music className="w-4 h-4 mr-2" />
                      Music Library
                    </Button>
                  </div>
                </div>

                <div className="glass-strong rounded-2xl p-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <h2 className="text-xl font-display font-bold mb-4">
                    Need Help?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visit our help center for guides and support
                  </p>
                  <Button variant="outline" className="w-full glass">
                    Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
