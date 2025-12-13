import { Boxes, Gem, Laptop, Shirt } from "lucide-react";
import { useCategories } from "../../context/categoryContext";

// Component category card
const CategoryCard = ({ icon, category, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`mt-3 flex flex-col md:minw-[72px] md:mt-1 items-center gap-3 transition-all duration-150 ease-in-out ${isSelected ? "-translate-y-1" : ""}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white`}
      >
        {icon}
      </div>
      <h1 className="max-w-20 text-center text-xs font-semibold">{category}</h1>
    </div>
  );
};

const CategoryList = () => {
  const { categories, selected, setSelected } = useCategories();

  // Icon Category
  function getIconByCategory(name) {
    switch (name.toLowerCase()) {
      case "all":
        return <Boxes />;
      case "electronics":
        return <Laptop />;
      case "jewelery":
        return <Gem />;
      case "men's clothing":
        return <Shirt />;
      case "women's clothing":
        return <Shirt />;
      default:
        return <Boxes />;
    }
  }

  return (
    <div className="hide-scrollbar mt-3 md:hidden flex w-full gap-7 overflow-x-auto px-4">
      {categories.map((item) => (
        <CategoryCard
          key={item.id}
          isSelected={selected === item.id}
          onClick={() => setSelected(item.id)}
          icon={getIconByCategory(item.name)}
          category={item.name}
        />
      ))}
    </div>
  );
};

export default CategoryList;
