import Button from "../Elements/Button";
import Logo from "../../assets/images/logo-pesan-kami.png";
import { useAuth } from "../../context/authContext";

const ToLogin = () => {
  const { setShowAuth, user } = useAuth();

  return (
    <div className="mt-4 flex w-full items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <div className="h-12 w-13">
          <img className="W-full h-full" src={Logo} alt="" />
        </div>
        <div>
          <h1 className="font-bold">Hai, {user ? user.name : "Guys"}</h1>
          <p className="text-sm">
            {user ? "Silahkan menikmati" : "Akses semua fitur, yuk-"}
          </p>
        </div>
      </div>
      <div>
        {user ? (
          ""
        ) : (
          <Button
            onClick={() => setShowAuth(true)}
            btnStyle={
              "hover:scale-95 hover:opacity-85 transition-all duration-300 ease-in-out"
            }
          >
            Masuk
          </Button>
        )}
      </div>
    </div>
  );
};

export default ToLogin;
