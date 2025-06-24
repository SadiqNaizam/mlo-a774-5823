import React from 'react';

/**
 * FooterNav component for the bottom section of the page.
 * Displays copyright information and a list of navigation links.
 * The layout is responsive, stacking vertically on small screens and horizontally on larger screens.
 */
const FooterNav: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t bg-background px-6 py-5 sm:flex-row">
      <p className="text-sm text-muted-foreground">
        © {currentYear} Ecommerce Dashboard Clone. All rights reserved.
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default FooterNav;
