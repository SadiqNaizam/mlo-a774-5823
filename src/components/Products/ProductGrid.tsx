import React from 'react';
import ProductCard, { Product } from './ProductCard';

// Dummy data defined directly in the component file as per requirements.
const dummyProducts: Product[] = [
  {
    id: 'prod_01',
    name: 'Ergonomic Mesh Chair',
    price: 279.99,
    imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Chair',
    category: 'Office Furniture',
  },
  {
    id: 'prod_02',
    name: 'Wireless Mechanical Keyboard',
    price: 129.50,
    imageUrl: 'https://placehold.co/400x400/cbd5e1/475569?text=Keyboard',
    category: 'Electronics',
  },
  {
    id: 'prod_03',
    name: 'Ultrawide 34" QHD Monitor',
    price: 449.00,
    imageUrl: 'https://placehold.co/400x400/94a3b8/1e293b?text=Monitor',
    category: 'Electronics',
  },
  {
    id: 'prod_04',
    name: 'Studio-Quality Headphones',
    price: 199.99,
    imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Headphones',
    category: 'Audio',
  },
  {
    id: 'prod_05',
    name: 'Motorized Standing Desk',
    price: 599.00,
    imageUrl: 'https://placehold.co/400x400/cbd5e1/475569?text=Desk',
    category: 'Office Furniture',
  },
  {
    id: 'prod_06',
    name: 'Smart LED Desk Lamp',
    price: 89.99,
    imageUrl: 'https://placehold.co/400x400/94a3b8/1e293b?text=Lamp',
    category: 'Lighting',
  },
];

/**
 * A grid component to display a list of products.
 * It adheres to the requirement of `grid grid-cols-3 gap-6` on larger screens,
 * while being responsive for smaller viewports.
 */
const ProductGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
