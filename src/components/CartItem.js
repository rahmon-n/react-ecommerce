import React from 'react';

function CartItem({ product, qty, onPlus, onMinus, onRemove }) {
  const handlePlus = () => onPlus(product.id);
  const handleMinus = () => onMinus(product.id);
  const handleRemove = () => onRemove(product.id);

  return (
    <div className="checkout__item" key={product.id}>
      <div className="checkout__img">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <div className="checkout__options">
        <h1 className="checkout__title">{product.name}</h1>
        <p className="checkout__descr">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="price checkout__price">
          <span className="price_actual">&#36;{product.price}</span>
        </div>

        <div className="size">
          <h3>
            size: <span>{product.size}</span>
          </h3>
        </div>

        <div className="single__options-wrapper">
          <article className="product-qty">
            <label htmlFor="quantity"> quantity: </label>
            <span>
              <button onClick={handleMinus} className="btn_dec-inc">
                -
              </button>
              <input
                name="quantity"
                id="quantity"
                autoComplete="off"
                maxLength="3"
                value={qty || 1}
                readOnly
              />
              <button onClick={handlePlus} className="btn_dec-inc">
                +
              </button>
            </span>
          </article>
        </div>
        <button onClick={handleRemove} className="btn btn__primary">
          delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
