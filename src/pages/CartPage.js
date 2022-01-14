import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { minusCartItem, plusItemToCart, removeCartItem } from '../redux/actions/cart';

function CartPage() {
  const { items, totalPrice, totalCount } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key][0];
  });

  const onPlusHandler = (id) => dispatch(plusItemToCart(id));
  const onMinusHandler = (id) => dispatch(minusCartItem(id));
  const onRemoveHandler = (id) => dispatch(removeCartItem(id));

  return (
    <div className="checkout">
      <h1 className="checkout__heading">Cart</h1>

      <div className="container">
        {totalCount ? (
          <>
            <div className="checkout__items">
              {addedPizzas.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  qty={items[product.id].length}
                  onPlus={onPlusHandler}
                  onMinus={onMinusHandler}
                  onRemove={onRemoveHandler}
                />
              ))}
            </div>

            <div className="checkout-pane">
              <div className="total-sum">
                Total: <strong>{totalPrice}$</strong>
              </div>
              <button className="btn">making an order</button>
            </div>
          </>
        ) : (
          <h4 style={{ fontSize: 24, marginBottom: 60 }}>Cart is Empty</h4>
        )}
      </div>
    </div>
  );
}

export default CartPage;
