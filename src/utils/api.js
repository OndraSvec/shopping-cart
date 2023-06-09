export default async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products/?limit=100");
    const data = await response.json();
    return data.products.filter(
      (item) =>
        item.category !== "smartphones" &&
        item.category !== "laptops" &&
        item.category !== "fragrances" &&
        item.category !== "skincare" &&
        item.category !== "groceries" &&
        item.category !== "home-decoration" &&
        item.category !== "furniture" &&
        item.category !== "automotive" &&
        item.category !== "motorcycle" &&
        !item.category.includes("jewel") &&
        !item.category.includes("watch") &&
        item.category !== "lighting"
    );
  } catch (error) {
    return error;
  }
}
