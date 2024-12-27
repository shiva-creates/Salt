import { NavLink, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useForm } from 'react-hook-form';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import { postSignUp } from '../../store/slices/signUpSlice/signUpSlice';

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit = (data : any) => {
    let submitData = {
        id : 0,
        username : data.name,
        email : data.email,
        password : data.password,
        phonenumber : data.phoneNumber,
    }
    dispatch(postSignUp(submitData)).then(() => {
      navigate('/log-in');
  })
  }
    return (

        <>
        <div className="sign-up-container">
            <h2>Sign Up</h2>
            <form action='' className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div >Name</div>
                    <input type="text" {...register("name", {required : true})} placeholder='Enter Name' />
                    {errors.name && <div className='error-msg'>Name is required</div>}
                </div>
                <div className="form-group">
                    <div >Email</div>
                    <input type="email" {...register("email", {required : true})} placeholder='Enter Email'  />
                    {errors.email && <div className='error-msg'>Email is required</div>}
                </div>
                <div className="form-group">
                    <div >Mobile Number</div>
                    <input type="tel"  placeholder='Enter Mobile Number' {...register("phoneNumber", {required : true})}/>
                    {errors.phoneNumber && <div className='error-msg'>Mobile Number is required</div>}
                </div>
                <div className="form-group">
                    <div >Password</div>
                    <input type="password"  placeholder='Enter Password' {...register("password", {required : true})}/>
                    {errors.password && <div className='error-msg'>Password is required</div>}

                </div>
                <div className="form-group">
                    <div>Confirm Password</div>
                    <input type="password"  placeholder='Enter Password' {...register("confirmPassword", {required : true})}/>
                    {errors.confirmPassword && <div className='error-msg'>Password is required</div>}
                </div>
                {/* <div className="form-group">
                    <div >Date of Birth</div>
                    <input type="date" id="dob" name="dob" required />
                </div> */}
                <input className='submit-btn' type="submit" value="Sign Up" />
            </form>
        </div>
        
        <div className="log-in-nav">Already a user? Click here to <NavLink to="/log-in"> Log in</NavLink></div>
        </>

    );
}

export default SignUp