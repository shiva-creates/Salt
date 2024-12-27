import './Cart.css'
import vegLogo from '../../assets/images/veg-logo.png'
import nonVegLogo from '../../assets/images/non-veg-log.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItems, getCartItems } from '../../store/slices/cartSlice/cartSlice';
import { AppDispatch, RootState } from '../../store/store';

function Cart() {
    const dispatch = useDispatch<AppDispatch>();
    const userId = useSelector((state : RootState) => state.userIdSlice?.userId);
    const cartData = useSelector((state : RootState) => state.cartSlice?.data);
    const [price, setPrice] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
    const [gstAmount, setGstAmount] = useState(0);
    const [deliveryCharges, setDeliveryCharges] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();






    const handleRemove = (id : string) => {
        dispatch(deleteCartItems(id))
        
    }

    useEffect(() => {
        dispatch(getCartItems(userId))
    }, [])

    const handleNavigation = () => {
        navigate('/checkout')
    }
    return (
        <>
            <div className="cart-container">
            <div className='cart-main-item-container'>
                    {
                        Object.keys(cartData)?.length == 0 ?
                            <>
                                <div className="empty-cart-message">
                                    Cart is Empty.
                                </div>
                            </>
                        : 
                        cartData.length > 0  &&  cartData?.map((cartData) => {
                            
                                return (
                                        <div className="cart-item-container" key={cartData?.id}>
                                            <img src={cartData?.Item?.imageurl} alt="Food" className='cart-img' />

                                            <div className="cart-details-container">
                                                <div className="item-name">
                                                    {cartData?.Item?.name} <span><img className='veg-logo' src={vegLogo} alt="Veg logo" /></span>
                                                </div>
                                                <div className="cart-item-desc">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                </div>
                                                <div className="item-price">
                                                    <div className="product-pricing">
                                                        <div className="price">${cartData?.Item?.discountprice}</div>
                                                        <div className="discounted-price">${cartData?.Item?.originalprice}</div>
                                                    </div>
                                                </div>
                                                <div className="item-quantity-section">
                                                    <div className="cart-size-section">
                                                        <div className="cart-size-text">Size:</div>
                                                        <div className="size-option-container">
                                                            <div className="custom-select">
                                                                <select>
                                                                    <option value="">Size </option>
                                                                    <option value="">S</option>
                                                                    <option value="">M</option>
                                                                    <option value="">L</option>
                                                                    <option value="">XL</option>
                                                                    <option value="">XXL</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-size-section">
                                                        <div className="cart-size-text">Quantity:</div>
                                                        <div className="quantity-option-container">
                                                            <div className="decrease">-</div>
                                                            <div className="item-quantity">{cartData?.quantity}</div>
                                                            <div className="increase">+</div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item-purchase-btn">
                                                    <div className='product-purchase-option'>
                                                        <div className="buy-now-btn">
                                                            Add to Fav
                                                        </div>
                                                        <div className="cart-btn" onClick={() => handleRemove(cartData?.id)}>
                                                            Remove
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                )
                            })
                    }

                </div>

                <div className="pricing-container">
                    <div className="discount-option option-dropdown">
                        <div className="option-name">
                            Apply coupon
                        </div>
                        <div className="option-dropdown-icon">
                            V
                        </div>
                    </div>
                    <div className="discount-option option-dropdown">
                        <div className="option-name">
                            Gift Voucher
                        </div>
                        <div className="option-dropdown-icon">
                            V
                        </div>
                    </div>
                    <div className="discount-option discount-option-last-child option-dropdown">
                        <div className="option-name">
                            Reward Points
                        </div>
                        <div className="option-dropdown-icon">
                            V
                        </div>
                    </div>

                    <div className="biling-header">
                        Billing Details
                    </div>
                    <div className="discount-option discount-option-first-child">
                        <div className="price-detail-name">
                            Cart total
                        </div>
                        <div className="option-dropdown-icon">
                            $ {price}
                        </div>
                    </div>
                    <div className="discount-option">
                        <div className="price-detail-name">
                            Discount
                        </div>
                        <div className="option-dropdown-icon">
                            -${discountedPrice}
                        </div>
                    </div>
                    <div className="discount-option">
                        <div className="price-detail-name">
                            GST
                        </div>
                        <div className="option-dropdown-icon">
                            ${gstAmount}
                        </div>
                    </div>
                    <div className="discount-option">
                        <div className="price-detail-name">
                            Delivery Charges
                        </div>
                        <div className="option-dropdown-icon">
                            ${deliveryCharges}
                        </div>
                    </div>

                    <div className="discount-option discount-option-last-child">
                        <div>
                            Total Amount
                        </div>
                        <div className="option-dropdown-icon">
                            ${totalPrice}
                        </div>
                    </div>
                    {/* <div className="place-order-btn">
                        Place Order
                    </div> */}

                    <div className='place-order-button-container'>
                    <div className='place-order-button' onClick={handleNavigation}>
                        Place Order
                    </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Cart