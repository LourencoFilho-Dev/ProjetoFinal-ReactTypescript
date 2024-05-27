import { useCart } from "./CartContext";

const ProductCard = ({ product }: { product: { id: string; name: string; price: number } }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;
