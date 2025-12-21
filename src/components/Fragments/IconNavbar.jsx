import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../../context/cartContext";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { ChevronDown } from "lucide-react";
import { useLogout } from "../../context/logoutContext";

const IconNavbar = () => {
  const { setShowCart } = useCart();
  const [totalProduct, setTotalProduct] = useState(0);
  const { showLogout, setShowLogout } = useLogout();
  const { addCart } = useCart();
  const { user, setShowAuth } = useAuth();
  const accessToken = user?.accessToken;

  function handleCart() {
    if (accessToken) {
      setShowCart(true);
    } else {
      setShowAuth(true);
    }
  }

  // Function summary
  useEffect(() => {
    const sum = addCart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotalProduct(sum);
  }, [addCart]);

  return (
    <div className={`flex items-center ${user ? "gap-3" : "gap-5"} text-white`}>
      <div className="mt-1.5">
        {user ? (
          <button
            onClick={() => setShowLogout(!showLogout)}
            className="flex items-center gap-1"
          >
            <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white">
              <img className="h-full w-full object-cover" src={`${user.photoURL}`} alt="" />
            </div>
            <div>
              <ChevronDown size={17} />
            </div>
          </button>
        ) : (
          <button onClick={() => setShowAuth(true)}>
            <User />
          </button>
        )}
      </div>

      <button className="relative p-1" onClick={() => handleCart()}>
        <span
          className={`bg-red-500 font-bold ${totalProduct !== 0 ? "visibile" : "invisible"} absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs`}
        >
          {totalProduct}
        </span>
        <ShoppingCart />
      </button>
    </div>
  );
};

export default IconNavbar;
