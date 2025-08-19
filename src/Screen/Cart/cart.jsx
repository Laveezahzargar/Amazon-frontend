import React from 'react'
import './cart.css';

const Cart = () => {
  return (
    <div className='cart'>

        <div className="topLeftCart">
             <div className="topLeftCartTitle">Shopping Cart</div>
             <div className="deselectAllCart">Deselect all Items</div>
             <div className="cartPriceTextDivider">Price</div>

             <div className="cartItemsDiv">

                <div className="cartItemBlock">

                    <div className="cartItemLeftBlock">

                      <div className="cartItemLeftBlockImage">
                          <img src="https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UL480_QL65_.jpg" className="cartItemLeftBlockImg" />
                      </div>
                      
                      <div className="cartItemLeftBlockDetails">
                        <div className="cartItemProductName">boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistanc...</div>
                        <div className="inStockCart">In Stock</div>
                        <div className="elgFreeShp">Eligible for FREE Shipping</div>
                        <div className="amazonFullFilledImage">
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" className="fullfillImg" />
                        </div>
                        <div className="removeFromCart">Remove From Cart</div>
                      </div>
                      
                    </div>

                    <div className="cartItemRightBlock">
                        Rs {25000}
                    </div>
                </div>

                <div className="cartItemBlock">

                    <div className="cartItemLeftBlock">

                      <div className="cartItemLeftBlockImage">
                          <img src="https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UL480_QL65_.jpg" className="cartItemLeftBlockImg" />
                      </div>
                      
                      <div className="cartItemLeftBlockDetails">
                        <div className="cartItemProductName">boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistanc...</div>
                        <div className="inStockCart">In Stock</div>
                        <div className="elgFreeShp">Eligible for FREE Shipping</div>
                        <div className="amazonFullFilledImage">
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" className="fullfillImg" />
                        </div>
                        <div className="removeFromCart">Remove From Cart</div>
                      </div>
                      
                    </div>

                    <div className="cartItemRightBlock">
                        Rs {25000}
                    </div>
                </div>

                <div className="cartItemBlock">

                    <div className="cartItemLeftBlock">

                      <div className="cartItemLeftBlockImage">
                          <img src="https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UL480_QL65_.jpg" className="cartItemLeftBlockImg" />
                      </div>
                      
                      <div className="cartItemLeftBlockDetails">
                        <div className="cartItemProductName">boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistanc...</div>
                        <div className="inStockCart">In Stock</div>
                        <div className="elgFreeShp">Eligible for FREE Shipping</div>
                        <div className="amazonFullFilledImage">
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" className="fullfillImg" />
                        </div>
                        <div className="removeFromCart">Remove From Cart</div>
                      </div>
                      
                    </div>

                    <div className="cartItemRightBlock">
                        Rs {25000}
                    </div>
                </div>


             </div>
        </div>

        <div className="topRightCart">
             <div className="subTotalTitle">Subtotal ({2} items) : <span className='subTotalTitleSpan'>Rs {45000}</span></div>
             <div className="giftAddto">
                <input type='checkbox'/>
                <div>This Order Contains a gift</div>
             </div>
             <div className="proceedToBuy">Proceed To Buy</div>
        </div>
    </div>
  )
}

export default Cart