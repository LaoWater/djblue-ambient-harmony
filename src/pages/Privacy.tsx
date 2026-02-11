import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you use DJ Blue, we collect only the minimum information necessary to provide and improve our services. This includes:

**Account Information:** Your name, email address, and encrypted password when you create an account.

**Usage Data:** Anonymous interaction patterns, feature usage statistics, and session duration to improve your experience. This data is never tied to personally identifiable information.

**Payment Information:** Billing details are processed securely through our third-party payment processor. DJ Blue never stores your full credit card number or financial credentials on our servers.

**Device Information:** Basic device type, operating system, and application version to ensure compatibility and deliver updates.`
  },
  {
    title: "2. How We Use Your Information",
    content: `Your data is used exclusively to:

- Provide, maintain, and improve DJ Blue's services
- Process your subscription and manage your account
- Send essential service communications (security alerts, billing updates)
- Develop new features based on aggregate, anonymized usage patterns
- Ensure platform security and prevent abuse

We do **not** sell, rent, or trade your personal information to third parties. Ever.`
  },
  {
    title: "3. Local-First Architecture",
    content: `DJ Blue is designed with a **local-first philosophy**. Your conversations, preferences, and interaction history are processed and stored locally on your device. Our servers facilitate account management and subscription services only.

This means your most sensitive data — the conversations you have and the emotional context within them — never leaves your machine unless you explicitly choose to sync across devices.`
  },
  {
    title: "4. Data Retention & Deletion",
    content: `You may request deletion of your account and all associated data at any time by contacting us at **contact@dj-blue.com**. Upon receiving a verified deletion request, we will:

- Remove your account information within 30 days
- Purge all server-side data associated with your account
- Confirm deletion via your registered email

Locally stored data on your device is under your control and can be removed by uninstalling the application.`
  },
  {
    title: "5. Security Measures",
    content: `We employ industry-standard security practices including:

- AES-256 encryption for data at rest
- TLS 1.3 for all data in transit
- Regular third-party security audits
- Role-based access controls for internal systems
- Automated threat detection and monitoring

In the event of a security incident, affected users will be notified within 72 hours in accordance with applicable regulations.`
  },
  {
    title: "6. Cookies & Tracking",
    content: `DJ Blue uses only essential cookies required for authentication and session management. We do **not** use advertising trackers, third-party analytics scripts, or cross-site tracking mechanisms.

You can manage cookie preferences through your browser settings at any time.`
  },
  {
    title: "7. Changes to This Policy",
    content: `We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Significant changes will be communicated via email or an in-app notification at least 14 days before taking effect.

The "Last Updated" date at the top of this page indicates when the policy was most recently revised.`
  },
  {
    title: "8. Contact Us",
    content: `If you have questions, concerns, or requests regarding your privacy, please reach out:

**Email:** contact@dj-blue.com  
**Response Time:** Within 2 business days`
  }
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 rounded-2xl glass mx-auto flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your privacy is fundamental to everything we build. This policy explains how DJ Blue handles your information with transparency and respect.
            </p>
            <p className="text-sm text-muted-foreground/60">Last Updated: February 11, 2026</p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <section
                key={i}
                className="glass rounded-2xl p-8 space-y-4 hover:border-primary/30 transition-colors duration-300"
              >
                <h2 className="text-xl font-display font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base prose-strong:text-foreground">
                  {section.content.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="text-foreground font-medium">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
