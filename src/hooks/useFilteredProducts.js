export function useFilteredProducts(products, categories, selected, query) {
  const selectedCategory = categories.find((item) => item.id === selected);

  let filtered = products;

  // Function filter products via category
  if (selectedCategory && selectedCategory.name.toLowerCase() !== "all") {
    filtered = filtered.filter(
      (item) =>
        item.category.toLowerCase() === selectedCategory.name.toLowerCase(),
    );
  }

  // Function filter products via query search
  if (query.trim() !== "") {
    filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return filtered;
}
