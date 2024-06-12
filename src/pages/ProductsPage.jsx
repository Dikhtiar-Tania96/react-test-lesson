import { useEffect, useState } from "react";
import { getProductsApi } from "../products-api";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getProductsApi();
        setProducts(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {products.length > 0 && products.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <Link to={String(product.id)}>Details</Link>
          </div>  
        ))}
    </div>
  );
};

export default ProductsPage;
