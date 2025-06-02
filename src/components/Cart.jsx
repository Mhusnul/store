import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  if (cart.length === 0)
    return <p className="p-6 text-center">Keranjang masih kosong 🛒</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Keranjang Anda</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border p-4 mb-2"
        >
          <div className="flex items-center gap-4">
            <img src={item.images[0]} className="w-20 h-20 object-cover" />
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={item.quantity}
              min={1}
              className="w-16 p-1 border"
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
            <button
              className="btn btn-sm btn-error text-white"
              onClick={() => removeFromCart(item.id)}
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
