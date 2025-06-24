import React from 'react';
import { Package, Search, ShoppingCart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * HeaderNav component for the top navigation bar.
 * Features a logo, a search bar, a cart button, and a user avatar.
 * It is designed to be fixed at the top of the viewport.
 */
const HeaderNav: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
      {/* Left Section: Logo and Branding */}
      <a href="/" className="flex items-center gap-2 font-semibold">
        <Package className="h-6 w-6 text-primary" />
        <span className="hidden font-bold sm:inline-block">Ecommerce Inc</span>
      </a>

      {/* Center Section: Search Bar */}
      <div className="flex-1 px-4 sm:px-6">
        <div className="relative mx-auto max-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-full bg-muted pl-9 pr-4"
          />
        </div>
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" aria-label="Open shopping cart">
          <ShoppingCart className="h-5 w-5" />
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
          <AvatarFallback>UA</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default HeaderNav;
