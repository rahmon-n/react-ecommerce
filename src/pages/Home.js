import React from 'react'
import ProductsBlock from "../components/ProductsBlock";

export default function Home() {
  return (
      <ProductsBlock className='products products_main'>
        <div className="sales">
          <div className="box__wrapper">
            <div className="box1">
              <div className="box1__item">
                <h4 className="products__descr">Watches</h4>
                <div className="products__img"><img src="images/pic1.jpg" alt="watches"/></div>
                <div className="products__price">$499</div>
              </div>

              <div className="box1__item">
                <h4 className="products__descr">T-SHIRT WITH PRINT</h4>
                <div className="products__img"><img src="images/pic2.jpg" alt="watches"/></div>
                <div className="products__price">$499</div>
              </div>
            </div>
            <div className="box2">
              <div className="box2__item">

                <div className="products__img"><img src="images/pic3.jpg" alt="watches"/></div>
                <h4 className="products__descr">cap</h4>
                <div className="products__price">$59</div>
              </div>
              <div className="box2__item">
                <div className="products__img"><img src="images/pic4.jpg" alt="watches"/></div>
                <h4 className="products__descr">glasses</h4>
                <div className="products__price">$244</div>
              </div>
              <div className="box2__item">
                <div className="products__img"><img src="images/pic5.jpg" alt="watches"/></div>
                <h4 className="products__descr">shoes</h4>
                <div className="products__price">$199</div>
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="box3__item">
              <div className="products__img">
                <img src="images/pic6.jpg" alt=""/>
              </div>
            </div>
            <div className="box3__item">
              <div className="products__img">
                <img src="images/pic7.jpg" alt=""/>
              </div>
            </div>
            <div className="box3__item">
              <div className="products__img">
                <img src="images/pic8.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="box4">
            <div className="box4__item">
              <h4 className="products__descr">shoes</h4>
              <div className="products__img"><img src="images/pic9.jpg" alt="watches"/></div>
              <div className="products__price">$199</div>
            </div>
            <div className="box4__item">
              <h4 className="products__descr">purse</h4>
              <div className="products__img"><img src="images/pic10.jpg" alt="watches"/></div>
              <div className="products__price">$295</div>
            </div>
          </div>
        </div>
      </ProductsBlock>
  )
}