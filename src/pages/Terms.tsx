import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using DJ Blue (the "Service"), you agree to be bound by these Terms of Service. If you do not agree with these terms, do not use the Service.

These terms apply to visitors, registered users, and subscribers.`
  },
  {
    title: "2. Description of Service",
    content: `DJ Blue is an alpha-stage AI companion application. The Service may include:

- Desktop application features (macOS, Windows, Linux)
- Account and subscription features
- Software updates and feature changes

Some features run locally, some may run through BYOK provider integrations, and some future features may use DJ Blue-managed server processing as described in the Privacy Policy.`
  },
  {
    title: "3. Eligibility and Account Registration",
    content: `To use account-based features, you must provide accurate registration data and keep account credentials secure.

You must notify us promptly of unauthorized account access at **contact@dj-blue.com**.

You must be at least 16 years old to use this Service where required by applicable law.`
  },
  {
    title: "4. Subscription and Billing",
    content: `DJ Blue may offer free and paid tiers.

For paid plans, billing cycle, renewal, cancellation, and refunds follow the terms shown at checkout or in your account settings.`
  },
  {
    title: "5. Acceptable Use",
    content: `You agree not to:

- Violate applicable laws
- Attempt unauthorized access or security circumvention
- Abuse, disrupt, or misuse the service
- Distribute malicious content through service channels
- Misrepresent identity or affiliation`
  },
  {
    title: "6. Intellectual Property",
    content: `All software, branding, and site content are owned by the project maintainers and applicable licensors.

Your access grants a limited, non-exclusive, non-transferable license to use the Service under these Terms.`
  },
  {
    title: "7. Alpha Status, Warranty Disclaimer, and Liability",
    content: `DJ Blue is an experimental volunteer-run alpha and is provided on an "as is" and "as available" basis, to the maximum extent permitted by law.

- We do not guarantee uninterrupted, error-free, or secure operation.
- To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages.
- Nothing in these Terms excludes liability for intentional misconduct, gross negligence, death/personal injury caused by negligence, or other non-waivable rights under applicable law.`
  },
  {
    title: "8. Termination",
    content: `We may suspend or terminate access where required for security, legal compliance, abuse prevention, or material breach of these Terms.

Provisions that should survive termination remain in effect.`
  },
  {
    title: "9. Project Status, Governing Law, and Disputes",
    content: `DJ Blue is currently a volunteer-run alpha project and is not operated by an incorporated company at this time.

Current project ownership and maintainer information are published in the public repository: **https://github.com/RaresKeY/dj-blue-ai**.

Disputes or legal concerns should first be addressed through good-faith discussion via **contact@dj-blue.com**. Mandatory consumer and data-protection rights always apply.`
  },
  {
    title: "10. Contact",
    content: `For terms and legal/privacy questions:

**Email:** contact@dj-blue.com  
**Response Time:** Within 7 business days`
  }
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="w-16 h-16 rounded-2xl glass mx-auto flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clear terms governing your use of DJ Blue.
            </p>
            <p className="text-sm text-muted-foreground/60">Last Updated: February 15, 2026</p>
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
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm md:text-base">
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

export default Terms;
