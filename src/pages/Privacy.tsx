import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

const sections = [
  {
    title: "1. Controller and Project Status",
    content: `DJ Blue is currently operated as a volunteer-run alpha project and is not operated by an incorporated company at this time.

For privacy matters, contact **contact@dj-blue.com**.

If appointment of an EU representative or DPO becomes legally required, those details will be published in this policy.`
  },
  {
    title: "2. Information We Collect",
    content: `When you use DJ Blue, we collect information needed to provide, secure, and improve the service. This includes:

**Account Information:** Name, email address, and encrypted password used for account access.

**Usage Data:** Interaction events, feature usage statistics, and reliability diagnostics used to operate and improve the service.

**Payment Information:** Billing details are handled by third-party payment providers. DJ Blue does not store full card numbers on project-managed servers.

**Device Information:** Device type, operating system, and app version used for compatibility and support.

**Support Data:** Information you submit through contact/support channels.`
  },
  {
    title: "3. Processing Modes",
    content: `DJ Blue may operate in multiple processing modes:

- **Local Mode (default):** Data is processed on-device by local models/tools.
- **BYOK Mode:** If you configure your own API key, requests are sent from your device to the provider tied to that key (for example, Google APIs).
- **DJ Blue Server Mode (future, if enabled):** Some requests may be processed through DJ Blue-managed servers. If enabled, this policy will describe categories, legal bases, retention, and transfer safeguards before rollout.`
  },
  {
    title: "4. How We Use Your Information and Legal Bases",
    content: `Where GDPR applies, we rely on these legal bases:

- **Service Delivery (Art. 6(1)(b) GDPR):** Account access, subscriptions, and core requested functionality.
- **Security and Abuse Prevention (Art. 6(1)(f) GDPR):** Service integrity, fraud/abuse detection, and incident response.
- **Operational Communications (Art. 6(1)(b)/(c) GDPR):** Account, billing, and security notices.
- **Product Reliability and Improvement (Art. 6(1)(f) GDPR):** Reliability monitoring and feature improvement.
- **Optional AI Features (Art. 6(1)(b) GDPR and, where required, Art. 6(1)(a) GDPR):** Transcription, summaries, and chatbot features when enabled.

We do **not** sell, rent, or trade personal information to third parties.`
  },
  {
    title: "5. Data Sharing and Service Providers",
    content: `We share data with service providers only where needed to operate DJ Blue. Categories include payment processors, infrastructure providers, authentication/account tooling providers, and optional AI providers used for enabled features.

**BYOK role clarification:** If you use your own API key, DJ Blue acts as the software interface. The external provider's legal role is governed by your agreement and configuration with that provider.`
  },
  {
    title: "6. International Data Transfers",
    content: `Some providers may process data outside the EEA/UK. Where applicable, transfers use recognized safeguards, such as adequacy decisions or Article 46 safeguards (including Standard Contractual Clauses), as required by law.`
  },
  {
    title: "7. Data Retention",
    content: `We retain personal data only as long as needed for the purposes described in this policy, including legal, accounting, and security obligations.

When retention is no longer necessary, we delete or de-identify data where feasible.`
  },
  {
    title: "8. Your GDPR and EU Rights",
    content: `Where GDPR applies, you may have rights to access, rectify, erase, restrict processing, object, data portability, and withdraw consent where processing is consent-based.

You also have the right to lodge a complaint with your supervisory authority.

To exercise rights regarding data controlled by DJ Blue, contact **contact@dj-blue.com**. We may verify identity before fulfilling requests and respond within legal timelines.`
  },
  {
    title: "9. Security and Incident Notification",
    content: `We use security measures appropriate to risk, including encryption in transit, access controls, monitoring/logging, and ongoing hardening.

If a personal data breach occurs, notifications will be made to authorities and affected individuals as required by applicable law.`
  },
  {
    title: "10. Cookies and Local Storage",
    content: `DJ Blue currently uses only storage/cookies that are strictly necessary for core functionality, such as authentication/session handling, local preferences, and local API key configuration where enabled.

If non-essential cookies or similar tracking technologies are introduced, we will request consent where legally required.`
  },
  {
    title: "11. Children's Privacy",
    content: `DJ Blue is not intended for users under 16. We do not knowingly collect personal data from children.`
  },
  {
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy to reflect changes in legal requirements, product architecture, or operational practices.

The "Last Updated" date at the top of this page indicates the most recent revision.`
  },
  {
    title: "13. Contact Us",
    content: `If you have questions, concerns, or requests regarding privacy:

**Email:** contact@dj-blue.com  
**Response Time:** Within 7 business days`
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
