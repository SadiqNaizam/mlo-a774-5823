import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

// The Product type is exported so it can be used by parent components like ProductGrid.
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

/**
 * An individual card component to display product information.
 * It follows a flex-column layout and includes an image, title, price,
 * and an "Add to Cart" button.
 */
const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  // Helper to format numbers into USD currency strings.
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  // Memoized event handler for adding a product to the cart.
  const handleAddToCart = React.useCallback(() => {
    // In a real application, this would likely dispatch an action or call an API.
    console.log(`Product ${product.id} added to cart.`);
  }, [product.id]);

  return (
    <Card className={cn("flex flex-col overflow-hidden transition-shadow hover:shadow-lg", className)}>
      <div className="relative aspect-square w-full bg-muted">
        {/* In a Next.js app, one might use the <Image /> component for optimization */}
        <img
          src={product.imageUrl}
          alt={`Image of ${product.name}`}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="flex-grow p-4 pb-2">
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <CardTitle className="text-base font-semibold leading-snug tracking-tight">{product.name}</CardTitle>
      </CardHeader>
      <CardFooter className="flex items-center justify-between p-4 pt-2">
        <p className="text-lg font-bold text-card-foreground">{formatPrice(product.price)}</p>
        <Button variant="outline" size="icon" onClick={handleAddToCart} aria-label="Add to cart">
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
