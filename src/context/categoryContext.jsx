import { useContext, createContext, useEffect, useState } from "react";

const CategoryContext = createContext();

// Data category on hero section
const categoriesData = [
  {
    id: 1,
    name: "All",
  },
  { id: 2, name: "Jewelery" },
  { id: 3, name: "Electronics" },
  { id: 4, name: "Men's Clothing" },
  { id: 5, name: "Women's Clothing" },
];

export function CategoryProvider({ children }) {
  const [categories, setcategories] = useState([]);
  const [selected, setSelected] = useState(1);

  // Function set data category to categories (useState)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setcategories(categoriesData);
  }, [categories]);

  return (
    <CategoryContext.Provider value={{ categories, selected, setSelected }}>
      {children}
    </CategoryContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCategories() {
  return useContext(CategoryContext);
}
