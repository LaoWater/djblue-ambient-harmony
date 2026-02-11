import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using DJ Blue ("the Service"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use the Service.

These terms apply to all users, including visitors, registered users, and subscribers. We recommend reviewing these terms periodically, as continued use constitutes acceptance of any updates.`
  },
  {
    title: "2. Description of Service",
    content: `DJ Blue is a continuous AI companion application that provides intelligent conversation, real-time emotion detection, and adaptive music curation. The Service includes:

- The DJ Blue desktop and mobile applications
- Account management and subscription services via this website
- Software updates and feature enhancements delivered through the platform

DJ Blue operates primarily as a **local application** on your device. Cloud services are limited to authentication, subscription management, and optional cross-device synchronization.`
  },
  {
    title: "3. Account Registration",
    content: `To access certain features, you must create an account. You agree to:

- Provide accurate, current, and complete registration information
- Maintain the security of your password and account credentials
- Notify us immediately of any unauthorized access at **contact@dj-blue.com**
- Accept responsibility for all activity occurring under your account

You must be at least 16 years of age to create an account and use the Service.`
  },
  {
    title: "4. Subscription & Billing",
    content: `DJ Blue offers both free and paid subscription tiers. For paid plans:

**Billing Cycle:** Subscriptions are billed monthly or annually based on your selected plan. Charges are processed at the beginning of each billing period.

**Free Trials:** If offered, free trials convert to paid subscriptions at the end of the trial period unless cancelled beforehand.

**Refunds:** We offer a 14-day satisfaction guarantee for new subscriptions. Refund requests beyond this period are evaluated on a case-by-case basis.

**Cancellation:** You may cancel your subscription at any time through your account dashboard. Access continues through the end of the current billing period.`
  },
  {
    title: "5. Acceptable Use",
    content: `You agree not to use DJ Blue to:

- Violate any applicable laws or regulations
- Attempt to reverse-engineer, decompile, or extract source code from the application
- Circumvent or disable security features or access restrictions
- Distribute, sublicense, or resell access to the Service
- Transmit malicious code, spam, or harmful content through the platform
- Impersonate another person or misrepresent your affiliation

We reserve the right to suspend or terminate accounts that violate these guidelines.`
  },
  {
    title: "6. Intellectual Property",
    content: `All content, branding, software, and technology comprising DJ Blue are the exclusive property of DJ Blue and its licensors. This includes but is not limited to:

- The DJ Blue name, logo, and visual identity
- Application source code, algorithms, and architecture
- Website content, copy, and design elements

Your subscription grants a **limited, non-exclusive, non-transferable license** to use the Service for personal or authorized professional purposes. This license does not transfer any ownership rights.`
  },
  {
    title: "7. Limitation of Liability",
    content: `DJ Blue is provided on an "as is" and "as available" basis. To the maximum extent permitted by law:

- We do not guarantee uninterrupted, error-free, or secure operation of the Service
- We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service
- Our total liability shall not exceed the amount you paid for the Service in the 12 months preceding the claim

This does not affect any rights that cannot be waived or limited under applicable consumer protection laws.`
  },
  {
    title: "8. Termination",
    content: `We may suspend or terminate your access to the Service at our discretion if:

- You breach any provision of these Terms
- Your account has been inactive for an extended period
- We are required to do so by law

Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination (including intellectual property, limitation of liability, and dispute resolution) shall remain in effect.`
  },
  {
    title: "9. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these terms shall be resolved through good-faith negotiation before pursuing formal proceedings.`
  },
  {
    title: "10. Contact",
    content: `For questions or concerns regarding these Terms of Service:

**Email:** contact@dj-blue.com  
**Response Time:** Within 2 business days`
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
              Clear, fair terms that govern your use of DJ Blue. We believe in transparency — no hidden clauses, no surprises.
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
