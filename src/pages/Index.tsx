import React from 'react';
import HeaderNav from '@/components/layout/HeaderNav';
import FooterNav from '@/components/layout/FooterNav';
import ProductGrid from '@/components/Products/ProductGrid';

/**
 * The main landing page for the Ecommerce Dashboard Clone.
 * This page assembles the primary layout components: a fixed header,
 * a main content area displaying a grid of products, and a footer.
 *
 * The layout follows a vertical flex structure to ensure the footer
 * remains at the bottom of the viewport, with padding applied to the main
 * content to avoid being obscured by the fixed header.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeaderNav />
      <main className="flex-1 pt-16"> 
        {/* The main content area with centered container and padding */}
        <div className="container mx-auto max-w-screen-lg p-6">
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
            Featured Products
          </h1>
          <ProductGrid />
        </div>
      </main>
      <FooterNav />
    </div>
  );
};

export default IndexPage;
