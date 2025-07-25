import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ----------- Input Filter -----------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Improved Filtering Logic -----------
  function getFilteredProducts() {
    let filteredProducts = products;

    // Apply search query filter
    if (query.trim()) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase().trim())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product) => {
        const { category, color, company, newPrice } = product;

        return (
          category === selectedCategory ||
          color === selectedCategory ||
          company === selectedCategory ||
          newPrice === selectedCategory
        );
      });
    }

    return filteredProducts;
  }

  // ------------ Render Filtered Products -----------
  function renderProducts() {
    const filteredProducts = getFilteredProducts();

    return filteredProducts.map((product, index) => (
      <Card
        key={`${product.title}-${product.company}-${index}`} // More stable key
        img={product.img}
        title={product.title}
        star={product.star}
        reviews={product.reviews}
        prevPrice={product.prevPrice}
        newPrice={product.newPrice}
      />
    ));
  }

  const result = renderProducts();

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
