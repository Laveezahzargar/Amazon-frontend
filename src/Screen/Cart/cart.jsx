import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { removeFromCart } from '../../redux/actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a = 0;
  let cost = cartItems.map((item) => { return a = a + item.price });

  useEffect(() => {
    setCartItem(cartItems)
  }, [cartItems]);

  const handleRemoveFromCart = (id) => {
    toast.error("Item Removed From Cart", {
      position: "bottom-right"
    })
    dispatch(removeFromCart(id));

  }
  return (
    <div className='cart'>

      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="deselectAllCart">Deselect all Items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">

          {
            cartItems.map((item, ind) => {
              return (
                <div className="cartItemBlock">

                  <div className="cartItemLeftBlock">

                    <div className="cartItemLeftBlockImage">
                      <img src={item.imageUrl} className="cartItemLeftBlockImg" />
                    </div>

                    <div className="cartItemLeftBlockDetails">
                      <div className="cartItemProductName">{item.name}</div>
                      <div className="inStockCart">In Stock</div>
                      <div className="elgFreeShp">Eligible for FREE Shipping</div>
                      <div className="amazonFullFilledImage">
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" className="fullfillImg" />
                      </div>
                      <div className="removeFromCart" onClick={() => { handleRemoveFromCart(item.id) }} >Remove From Cart</div>
                    </div>

                  </div>

                  <div className="cartItemRightBlock">
                    Rs {item.price}
                  </div>
                </div>
              );
            })
          }



        </div>
      </div>

      <div className="topRightCart">
        <div className="subTotalTitle">Subtotal ({cartItems.length} items) : <span className='subTotalTitleSpan'>Rs {a}</span></div>
        <div className="giftAddto">
          <input type='checkbox' />
          <div>This Order Contains a gift</div>
        </div>
        <div className="proceedToBuy">Proceed To Buy</div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Cart