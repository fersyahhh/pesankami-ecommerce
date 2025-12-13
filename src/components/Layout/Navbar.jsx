import SearchNavbar from "../Fragments/SearchNavbar";
import IconNavbar from "../Fragments/IconNavbar";

const Navbar = () => {
  return (
    <div className="shadow-black-20 fixed z-50 mx-auto left-1/2 -translate-x-1/2 flex w-full items-center justify-between bg-linear-to-r from-white to-blue-500 px-4 pt-2 pb-3 md:px-8 shadow-md md:mt-2 md:w-[80%] md:rounded-full md:pt-4 md:pb-4 lg:w-[70%]">
      <SearchNavbar />
      <IconNavbar />
    </div>
  );
};

export default Navbar;
