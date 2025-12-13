import { X } from "lucide-react";
import { useCart } from "../../context/cartContext";
import Button from "../Elements/Button";
import { useProducts } from "../../hooks/useProducts";
import { useEffect, useState } from "react";
import { usePayment } from "../../context/paymentContext";

const Cart = () => {
  const { addCart, setAddCart, showCart, setShowCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const { products } = useProducts();
  const { setShowPayment } = usePayment();
  const USD_TO_IDR = 16000;

  // Function increment qty when user click +
  function addQty(id) {
    const handleAddQty = addCart.find((item) => item.id === id);

    if (handleAddQty) {
      setAddCart(
        addCart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    }
  }

  // Function decrement qty when user click -
  function removeQty(id) {
    const updateCart = addCart.map((item) =>
      item.id === id ? { ...item, qty: item.qty - 1 } : item,
    );

    const updateItem = updateCart.find((item) => item.id === id);

    if (updateItem.qty === 0) {
      setAddCart(updateCart.filter((item) => item.id !== id));
    } else {
      setAddCart(updateCart);
    }
  }

  // Function remove cart when user click X
  function removeCart(id) {
    const removeFromCart = addCart.find((item) => item.id === id);

    if (removeFromCart) {
      setAddCart(addCart.filter((item) => item.id !== id));
    }
  }

  // Function handle total price
  useEffect(() => {
    const sum = addCart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotalPrice(sum);
  }, [addCart, products]);

  function handlePayment() {
    setShowPayment(true);
    setShowCart(false);
  }

  return (
    <>
      <div
        onClick={() => setShowCart(false)}
        className={`fixed transition-all duration-300 ease-in-out ${showCart ? "block" : "hidden"} inset-0 z-999 h-screen w-full bg-black/50`}
      ></div>

      <div
        className={`fixed top-0 right-0 z-99999 flex flex-col overflow-hidden ${showCart ? "translate-x-0" : "translate-x-full"} top-0 right-0 z-999 h-screen max-h-screen w-[80%] xl:w-[30%] md:w-[50%] bg-white`}
      >
        {/* Header Cart */}
        <div className="flex w-full justify-between bg-blue-500 p-3 text-white">
          <h1 className="text-lg font-bold">Keranjang</h1>
          <button onClick={() => setShowCart(false)} className="font-semibold">
            <X />
          </button>
        </div>

        {/* Body Cart */}
        <div className="w-full flex-1 overflow-y-auto px-4 pt-4">
          {addCart.length > 0 ? (
            addCart.map((item) => (
              <div
                key={item.id}
                className="mb-5 flex w-full items-center gap-4 rounded-lg bg-slate-600/10 px-3 py-5"
              >
                <div className="max-h-20 max-w-15 overflow-hidden rounded-lg shadow-lg shadow-black/50">
                  <img
                    className="h-full w-full object-cover object-center"
                    src={item.image}
                    alt="image-product"
                  />
                </div>
                <div className="flex-1 text-sm">
                  <h1 className="font-bold">
                    {item.title.substring(0, 50)}...
                  </h1>
                  <h2 className="font-bold text-blue-500">
                    Rp {(item.price * USD_TO_IDR).toLocaleString("id-ID")}
                  </h2>
                  <div className="flex w-full items-center justify-between">
                    <div className="mt-2 grid min-w-22 grid-cols-3 items-center gap-1">
                      <button
                        onClick={() => removeQty(item.id)}
                        className="flex h-6 w-6 items-center justify-center rounded bg-slate-300 text-lg"
                      >
                        -
                      </button>
                      <p className="flex items-center justify-center font-semibold">
                        {item.qty}
                      </p>
                      <button
                        onClick={() => addQty(item.id)}
                        className="flex h-6 w-6 items-center justify-center rounded bg-slate-300 text-lg"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeCart(item.id)}
                      className="text-red-500"
                    >
                      <X />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="mt-10 text-center text-slate-600">
              Keranjang Anda Kosong
            </p>
          )}
        </div>

        {/* Footer Cart */}
        {addCart.length > 0 && (
          <div className="w-full border-t border-black/20 px-3 pb-4">
            <div className="flex items-center justify-between py-3">
              <h1 className="font-bold">Total:</h1>
              <span className="font-bold text-blue-600">
                Rp {(totalPrice * USD_TO_IDR).toLocaleString("id-ID")}
              </span>
            </div>
            <div>
              <Button
                onClick={() => handlePayment()}
                btnStyle={
                  "w-full hover:scale-95 transition-all duration-300 ease-in-out hover:opacity-80"
                }
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
