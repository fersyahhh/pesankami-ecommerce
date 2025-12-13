import { Star } from "lucide-react";
import { useProducts } from "../../hooks/useProducts";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import { useCategories } from "../../context/categoryContext";
import { useSearch } from "../../context/searchContext";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";

// Component card product
const CardProduct = ({
  image,
  title,
  price,
  rating,
  count,
  id,
  setShowAuth,
  accessToken,
}) => {
  const { addCart, setAddCart } = useCart();
  const USD_TO_IDR = 16000;

  // Function add to cart when user click button on products
  function addToCart(id, title, price, image) {
    if (accessToken) {
      const sumQty = addCart.find((item) => item.id === id);

      if (sumQty) {
        setAddCart(
          addCart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item,
          ),
        );
      } else {
        setAddCart([
          ...addCart,
          { id, qty: 1, title: title, price: price, image: image },
        ]);
      }
    } else {
      setShowAuth(true);
    }
  }

  return (
    <div className="flex w-full flex-col justify-between rounded-xl border border-black/20 px-3 pt-3 pb-6 shadow-md shadow-black/20">
      {/* Product Image */}
      <div className="h-44 w-full rounded-lg">
        <img
          src={image}
          className="h-full w-full object-cover object-center"
          alt={title}
        />
      </div>

      {/* Product Body */}
      <div>
        <h1 className="mt-3 text-xs">{title.substring(0, 50)}...</h1>
        <h3 className="mt-2 text-sm font-bold">
          Rp {(price * USD_TO_IDR).toLocaleString("id-ID")}
        </h3>
        <div className="mt-1 flex items-center gap-1">
          <span>
            <Star className="fill-yellow-500 text-yellow-500" size={13} />
          </span>
          <h2 className="text-xs text-slate-600">
            {rating} | {count}+ Terjual
          </h2>
        </div>

        {/* Product Footer */}
        <div className="mt-5">
          <button
            onClick={() => addToCart(id, title, price, image)}
            className="w-full rounded-lg bg-blue-500 px-2 py-1.5 text-xs font-semibold text-white shadow-md shadow-black/20 transition-all duration-300 ease-in-out hover:scale-95"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const { products, loading } = useProducts();
  const { categories, selected } = useCategories();
  const { query } = useSearch();
  const { user, setShowAuth } = useAuth();
  const accessToken = user?.accessToken;
  const filteredProducts = useFilteredProducts(
    products,
    categories,
    selected,
    query,
  );

  return (
    <div className="mt-5 pb-4 md:w-[90%] md:mt-15 md:mx-auto">
      {filteredProducts.length > 0 ? (
        <div className="grid w-full grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4 px-4">
          {filteredProducts.map((item) => (
            <CardProduct
              key={item.id}
              onClick
              user={user}
              accessToken={accessToken}
              setShowAuth={setShowAuth}
              id={item.id}
              rating={item.rating.rate}
              image={item.image}
              price={item.price}
              count={item.rating.count}
              title={item.title}
            />
          ))}
        </div>
      ) : loading ? (
        <div className="mx-auto mt-20 h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-transparent"></div>
      ) : (
        <p className="mt-8 text-center text-sm text-slate-700">
          Produk tidak di temukan
        </p>
      )}
    </div>
  );
};

export default Products;
