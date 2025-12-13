import { ShoppingBasket, BookAlert } from "lucide-react";
import iconGoogle from "../../assets/images/google-icon.webp";
import ButtonLogin from "./ButtonLogin";
import iconFacebook from "../../assets/images/facebook-icon.png";
import iconTwitter from "../../assets/images/x-icon.webp";
import {
  loginWithFacebook,
  loginWithGoogle,
  loginWithTwitter,
} from "../../services/auth-service";
import { useAuth } from "../../context/authContext";
import { X } from "lucide-react";
import { useEffect } from "react";

const AuthCard = () => {
  const { showAuth, setShowAuth, user, setUser } = useAuth();

  // Function handle login via google
  async function handleLoginGoogle() {
    try {
      const userData = await loginWithGoogle(); // panggil function
      console.log("DATA USER:", userData);
      setUser(userData); // tampilkan hasil user
    } catch (err) {
      console.error(err);
    }
  }

  // Function handle login via facebook
  async function handleLoginFacebook() {
    try {
      const userData = await loginWithFacebook(); // panggil function
      console.log("DATA USER:", userData);
      setUser(userData); // tampilkan hasil user
    } catch (err) {
      console.error(err);
    }
  }

  // Function handle login via twitter
  async function handleLoginTwitter() {
    try {
      const userData = await loginWithTwitter(); // panggil function
      console.log("DATA USER:", userData);
      setUser(userData); // tampilkan hasil user
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (user?.accessToken) {
      setShowAuth(false);
    }
  }, [user, setShowAuth]);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${showAuth ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      // Backdrop
      <div
        onClick={() => setShowAuth(false)}
        className={`fixed inset-0 z-80 h-screen w-full bg-black/50 transition-all duration-300 ease-in-out`}
      ></div>

      <div
        className={`fixed top-15 left-1/2 z-999 max-h-[90vh] w-[85%] md:w-[60%] xl:w-[40%] -translate-x-1/2 overflow-y-auto rounded-xl bg-slate-50 px-8 pb-6 transition-all duration-500 ease-in-out ${showAuth ? "translate-y-0" : "translate-y-4"}`}
      >
        {/* Auth Heading */}
        <div className="mt-10 w-full text-center">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 text-slate-500">
              <ShoppingBasket size={45} />
            </div>
          </div>
          <h1 className="mt-3 text-xl font-bold">Selamat Datang!</h1>
          <p className="mx-auto mt-3 max-w-xs text-sm text-slate-700">
            Pilih metode login untuk melanjutkan belanja
          </p>
        </div>

        {/* Auth Body */}
        <div className="mt-6">
          <div className="flex flex-col gap-4">
            <ButtonLogin
              onClick={handleLoginGoogle}
              iconBtn={iconGoogle}
              textBtn={"Masuk dengan Google"}
            />
            <ButtonLogin
              onClick={handleLoginFacebook}
              iconBtn={iconFacebook}
              textBtn={"Masuk dengan Facebook"}
            />
            <ButtonLogin
              onClick={handleLoginTwitter}
              textBtn={"Masuk dengan X (Twitter)"}
              iconBtn={iconTwitter}
            />
          </div>
        </div>
        <button
          onClick={() => setShowAuth(false)}
          className="absolute top-4 right-4 text-slate-400"
        >
          <X size={28} />
        </button>

        {/* Auth Footer */}
        <div className="mt-6 flex w-full gap-4 rounded-lg border border-slate-600/15 bg-slate-200/80 px-3 py-4 text-sm">
          <div>
            <BookAlert />
          </div>
          <div>
            <h1 className="font-bold text-slate-900">Keamanan Terjamin</h1>
            <p className="text-xs text-slate-700">
              Data Anda aman dengan enkripsi Google Authentication
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1 text-center text-sm">
          <p className="text-slate-700">Dengan ini, Anda menyetujui</p>
          <div className="">
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              Syarat Ketentuan{" "}
            </a>
            <span className="text-slate-700">&</span>
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              {" "}
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
