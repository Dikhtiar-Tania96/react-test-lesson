import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getSingleProductApi } from "../products-api";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getSingleProductApi(productId);
        setProduct(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [productId]);

  return (
    <div>
      {product && (
        <div>
          <h4>price: {product.price}</h4>
          <h4>title: {product.title}</h4>
        </div>
      )}
      <nav>
        <Link to='sub-product-a'>sub-product-a</Link>
        <Link to='sub-product-b'>sub-product-b</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default ProductDetailsPage;
