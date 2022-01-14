import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getProducts } from '../redux/actions/products';
import ProductsBlock from '../components/ProductsBlock';

function Products() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { products } = useSelector(({ productsReducer }) => {
    return {
      products: productsReducer.products,
    };
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <ProductsBlock>
      {location.pathname === '/products' ? (
        <div className="products-sale">
          {products.map((product, index) => (
            <div className="products-sale__item" key={index}>
              <Link to={`${product.id}`}>
                <div className="products-sale__img">
                  <img src={product.img} alt="watches" />
                </div>
                <h5 className="products-sale__title">
                  {product.name}
                  <span
                    style={{
                      display: 'block',
                      marginTop: 8,
                      color: '#ff0d40',
                    }}>
                    {product.actualPrice}$
                  </span>
                </h5>
              </Link>
              <p className="products-sale__descr">{product.description}</p>
              <Link to={`${product.id}`}>
                <button className="btn btn__primary">more about it</button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <Outlet />
      )}
    </ProductsBlock>
  );
}

export default Products;
