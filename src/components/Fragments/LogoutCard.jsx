import { LogOut } from "lucide-react";
import { useLogout } from "../../context/logoutContext";

const LogoutCard = () => {
  const { showLogout } = useLogout();

  function handleLogout() {
    window.location.reload();
  }

  return (
    <button
      onClick={handleLogout}
      className={`fixed top-14 right-18 z-99 flex h-auto w-auto md:top-17 md:right-42 lg:right-72 lg:top-19 xl:right-90 items-center gap-2 rounded-lg bg-white py-2.5 pr-10 pl-2 text-sm text-red-600 transition-all duration-300 ease-in-out hover:bg-slate-200 ${showLogout ? "opacity-100" : " opacity-0"}`}
    >
      <div>
        <LogOut size={20} />
      </div>
      <div>
        <h1>Logout</h1>
      </div>
    </button>
  );
};

export default LogoutCard;
