// src/components/ProductDisplay.jsx
import React, { useState, useEffect } from 'react';

function ProductDisplay({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- useEffect for Data Fetching ---
  useEffect(() => {
    // 1. Define the async function inside useEffect
    async function fetchProductData() {
      setLoading(true); // Set loading state to true before fetch
      setError(null);   // Clear any previous errors
      setProduct(null); // Clear previous product data

      try {
        // Using JSONPlaceholder for fake product data (posts)
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data); // Update product state with fetched data
      } catch (err) {
        setError(err); // Update error state if fetch fails
      } finally {
        setLoading(false); // Set loading state to false after fetch (success or failure)
      }
    }

    // 2. Call the async function
    fetchProductData();

    // 3. Optional: Cleanup function (if you had subscriptions, timers, etc.)
    // return () => {
    //   // Cleanup code here (e.g., clearInterval, unsubscribe)
    //   console.log(`Cleaning up effect for product ID: ${productId}`);
    // };

  }, [productId]); // Dependency Array: Effect re-runs ONLY when 'productId' changes

  // --- Another useEffect example: Logging component lifecycle ---
  useEffect(() => {
    console.log("ProductDisplay component mounted or updated!");

    // Cleanup function for this specific effect
    return () => {
      console.log("ProductDisplay component unmounted or effect re-ran (cleanup)!");
    };
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount.

  // --- Conditional Rendering based on fetch status ---
  if (loading) {
    return <div className="product-display">Loading product details...</div>;
  }

  if (error) {
    return <div className="product-display error-message">Error: {error.message}</div>;
  }

  if (!product) {
    return <div className="product-display">No product found for ID: {productId}</div>;
  }

  return (
    <div className="product-display">
      <h2>Product Details (ID: {product.id})</h2>
      <h3>{product.title}</h3>
      <p>{product.body}</p>
      {/* You can add more product details here */}
    </div>
  );
}

export default ProductDisplay;