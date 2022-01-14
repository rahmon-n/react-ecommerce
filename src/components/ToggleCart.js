import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../redux/actions/cart';

function Cart() {
  const [cartIsOpen, setCartState] = useState({ isClicked: false });
  const cart = useSelector((state) => state.cartReducer);
  const location = useLocation();
  const dispatch = useDispatch();

  const addedPizzas = Object.keys(cart.items).map((key) => {
    return cart.items[key][0];
  });

  useEffect(() => {
    setCartState({
      isClicked: false,
    });
  }, [location]);

  const cls = ['shopping-cart__list'];

  if (cartIsOpen.isClicked) {
    cls.push('active');
  }

  const onClickHandler = () => {
    setCartState({
      isClicked: !cartIsOpen.isClicked,
    });
  };

  const onRemoveHandler = (id) => dispatch(removeCartItem(id));

  return (
    <div className="shopping-cart">
      <span className="my-cart" onClick={onClickHandler}>
        My Cart
      </span>
      <div className="rate">{cart.totalCount}</div>

      <ul className={cls.join(' ')}>
        {cart.totalCount ? (
          <>
            <h3 className="shopping-cart__title">Recently added items({cart.totalCount})</h3>

            {addedPizzas.map((product) => (
              <li className="shopping-cart__item" key={product.id}>
                <div className="shopping-cart__img">
                  <img src={product.imageUrl} alt="shopping-cart__img" />
                </div>
                <div className="shopping-cart__descr">
                  <h4 className="product_name">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </h4>
                  <article className="price">
                    {cart.items[product.id].length} x <span>&#36;{product.price} </span>
                  </article>
                  <button className="close-btn">
                    <img
                      onClick={() => onRemoveHandler(product.id)}
                      src="/images/close.png"
                      alt="close"
                    />
                  </button>
                </div>
              </li>
            ))}

            <div className="total">
              <div className="total__left">CartSubtotal:</div>
              <div className="total__right">&#36;{cart.totalPrice}</div>
            </div>

            <Link className="check-out" to="/cart">
              Check out
            </Link>
          </>
        ) : (
          <h3 className="shopping-cart__title">Cart is Empty</h3>
        )}
      </ul>
    </div>
  );
}

export default Cart;
