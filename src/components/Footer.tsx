import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", path: "/features" },
    { name: "Philosophy", path: "/philosophy" },
    { name: "Use Cases", path: "/use-cases" },
  ],
  Resources: [
    { name: "Download", path: "/download" },
    { name: "Documentation", path: "/help" },
    { name: "Support", path: "/help" },
    { name: "About", path: "/about" },
  ],
  Legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTopInstant = () => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
    });
  };

  const handleFooterLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();
    event.currentTarget.blur();
    scrollToTopInstant();

    if (location.pathname === path && location.hash === "") return;
    navigate(path);
  };

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg overflow-hidden ring-2 ring-primary/50 group-hover:ring-primary transition-all duration-300">
                <img src="/brand/djblue-logo_margins_small.png" alt="DJ Blue" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-display font-bold gradient-text">
                DJ Blue
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Your continuous AI companion that transforms conversations with
              real-time emotion detection and adaptive music curation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/RaresKeY/dj-blue-ai/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@dj-blue.com"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={`${category}-${link.name}-${link.path}`}>
                    <Link
                      to={link.path}
                      onClick={(event) => handleFooterLinkClick(event, link.path)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 DJ Blue. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with <span className="gradient-text">♥</span> for intelligent conversations
          </p>
        </div>
      </div>
    </footer>
  );
};
