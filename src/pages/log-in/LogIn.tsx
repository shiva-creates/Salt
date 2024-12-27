import { NavLink, useNavigate } from 'react-router-dom'
import './LogIn.css'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postLogIn } from '../../store/slices/logInSlice/logInSlice';
import { AppDispatch, RootState } from '../../store/store';
import { currentUserId } from '../../store/slices/userIdSlice/userIdSlice';
import { getCartItems, updateCartItems } from '../../store/slices/cartSlice/cartSlice';
import { showError } from '../../store/slices/errorMessageSlice/errorMessageSlice';


const LogIn = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const cartData = useSelector((state : RootState) => state.cartSlice?.data)
  const userId = useSelector((state : RootState) => state.userIdSlice?.userId);
  const navigate = useNavigate();


//   const onSubmit = (data : any) => {
//     dispatch(postLogIn(data))
//     .then((response) => {
//       if(response.payload.userId){
//         dispatch(currentUserId(response?.payload?.userId));
//         if(cartData.length > 0){
//           let updateItems = cartData?.map((data)=> ({...data, userid: response?.payload?.userId}));
//           for(let item of updateItems){
//             let updatedCartData = {
//               userid: response?.payload?.userId,
//               itemid: item.itemid,
//               isadded: false
//             }
//             let cartData = {
//               cartUpdateData :  updatedCartData,
//               cartItemId : item.id
//             }
//           dispatch(updateCartItems(cartData))
//           }
//         }
//       }
//     })
// .then(()=>{
//     navigate('/');
//     dispatch(getCartItems(userId));
//   })
//   }

const onSubmit = async (data : any) => {
  try {
    const response = await dispatch(postLogIn(data))
    // .unwrap().catch((error) => {})
    
    if (response.payload?.userId) {
      const userId = response.payload?.userId;
      dispatch(currentUserId(userId));
      
      if (cartData.length > 0) {
        // let updateItems = cartData.map((data) => ({ ...data, userid: userId }));
        let updatePromises = cartData.map((item) => {
          let updatedCartData = {
            userid: userId,
            itemid: item.itemid,
            isadded: false
          };
          let cartData = {
            cartUpdateData: updatedCartData,
            cartItemId: item.id
          };
          return dispatch(updateCartItems(cartData));
        });
        await Promise.all(updatePromises);
      }
    }
    navigate('/');
    dispatch(getCartItems(response.payload?.userId));
  } catch (error) {
    console.error('Error on component', error);
  }
};

  return (
    <>
            <div className="sign-up-container">
                <h2>LOG IN</h2>
                <form action='' className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <div >Email</div>
                        <input type="email" {...register("email", {required : true})}  placeholder='Enter Email' />
                        {errors.email && <div className='error-msg'>Email is required</div>}
                    </div>
                    <div className="form-group">
                        <div >Password</div>
                        <input type="password" {...register("password", { required: true })} placeholder='Enter Password' />
                        {errors.password && <div className='error-msg'>Password is required</div>}
                    </div>
                    <input className='submit-btn' type="submit" value="Log In" />
                </form>
            </div>

            <div className="log-in-nav">Don't have an account? Click here to <NavLink to="/sign-up">Sign up</NavLink> </div>
    </>
  )
}

export default LogIn