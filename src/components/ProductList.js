import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const ProductList = () => {
  const { products, moveProduct } = useContext(ProductContext);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={product.id} className="border rounded-xl p-4 shadow-md">
          <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-2" />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <div className="flex justify-between mt-2">
            <button onClick={() => moveProduct(index, -1)} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">⬆️</button>
            <button onClick={() => moveProduct(index, 1)} className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600">⬇️</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;