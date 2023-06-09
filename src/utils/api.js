export default async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products/?limit=100");
    const data = await response.json();
    return data.products.filter(
      (item) =>
        item.id === 36 ||
        item.id === 37 ||
        item.id === 38 ||
        item.id === 39 ||
        item.id === 39 ||
        item.id === 50 ||
        item.id === 55 ||
        item.id === 60 ||
        item.id === 71 ||
        item.id === 74
    );
  } catch (error) {
    return error;
  }
}
