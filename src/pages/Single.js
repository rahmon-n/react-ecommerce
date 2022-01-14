import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, minusCartItem, plusItemToCart } from '../redux/actions/cart';

function Single() {
  const params = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => ({
    products: state.productsReducer.products,
    cart: state.cartReducer,
  }));
  const dispatch = useDispatch();

  const aviableSizes = [20, 22, 30, 33];
  const [product, setProduct] = React.useState({});
  const [activeSize, setActiveSize] = React.useState(0);

  const findProductById = () => {
    if (state.products.length > 0) {
      const filteredProduct = state.products.filter((product) => product.id === params.productId);
      setProduct(filteredProduct[0]);
    } else {
      navigate(-1);
    }
  };
  // eslint-disable-next-line
  useEffect(() => findProductById(), []);

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddProduct = () => {
    const obj = {
      id: product.id,
      name: product.name,
      imageUrl: product.img,
      price: product.actualPrice,
      size: aviableSizes[activeSize],
    };

    dispatch(addToCart(obj));
  };

  const plusItemHandler = () => dispatch(plusItemToCart(product.id));
  const minusItemHandler = () => dispatch(minusCartItem(product.id));

  return (
    <div className="single">
      <div className="single__item">
        <div className="single__img">
          <img src={product.img} alt="bag1" />
        </div>
        <div className="single__options">
          <h1 className="single__title">{product.name}</h1>
          <div className="price price_single">
            <span className="price_old">&#36;{product.oldPrice}</span>
            <span className="price_actual">&#36;{product.actualPrice}</span>
          </div>
          <div className="quick__overview">
            <h2 className="quick__title">Quick overview:</h2>
            <p className="quick__descr">{product.description}</p>
          </div>

          {product.sizes ? (
            <div className="size">
              <h3>size</h3>

              <ul className="size__list">
                {product.sizes.map((size, index) => (
                  <li
                    className={activeSize === index ? 'active' : null}
                    onClick={() => onSelectSize(index)}
                    key={index}>
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <article className="product-qty">
            <label htmlFor="quantity"> quantity: </label>
            <span>
              <button
                onClick={
                  state.cart.totalCount && state.cart.items[product.id] ? minusItemHandler : null
                }
                className="btn_dec-inc">
                -
              </button>
              <input
                name="quantity"
                id="quantity"
                autoComplete="off"
                value={
                  state.cart.totalCount && state.cart.items[product.id]
                    ? state.cart.items[product.id].length
                    : 0
                }
                maxLength="3"
                readOnly
              />
              <button
                onClick={
                  state.cart.totalCount && state.cart.items[product.id]
                    ? plusItemHandler
                    : onAddProduct
                }
                className="btn_dec-inc">
                +
              </button>
            </span>
          </article>
          <button className="btn btn__primary" onClick={onAddProduct}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Single;
