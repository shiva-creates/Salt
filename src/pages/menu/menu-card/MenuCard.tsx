import { useDispatch, useSelector } from 'react-redux';
import './MenuCard.css'
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store/store';
import { saveCartItem } from '../../../store/slices/cartSlice/cartSlice';

const MenuCard = ({menuData}: {menuData : any}) => {
    const userData = useSelector((state : RootState) => state.userIdSlice);
    console.log('Current User Id', userData.userId);
    const dispatch =  useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleDivClick = () => {
      navigate('/menu-details');
    };

    const addToCart = (menu : any) => {
        let cartData = {
            id : 0,
            userid : userData?.userId,
            itemid : menu.id,
            quantity : 1,
            isanonymoususer : false,
        }
        dispatch(saveCartItem(cartData))
    }

    return(
        <>

        {
            menuData?.map((menu:any)=>{
                return (
                    // <div className='product-card'  key={menu.id}>
                    <div className='product-card' key={menu?.id}>
                    <div className='menu-img-container'>
                    <img className='card-one-img' src={menu?.imageurl} alt="Non veg food" />
                    </div>
    
                    <div className="product-info-container">
                        <div className="product-name" onClick={handleDivClick}>{menu?.name}</div>
                        <div className="product-pricing">
                        <div className="price">${menu?.discountprice }</div>
                        <div className="discounted-price">${menu?.originalprice}</div>
                        </div>
    
                        <div className="product-details">
                        {menu?.description}
                        </div>
    
                    </div>
                    <div className='product-purchase-option'>
                        <div className="buy-now-btn">
                            Buy Now
                        </div>
                        <div className="cart-btn" onClick={() => addToCart(menu)}>
                            Add to cart
                        </div>
                    </div>
                </div>
                )
            })
        }



        </>
    )
}

export default MenuCard;