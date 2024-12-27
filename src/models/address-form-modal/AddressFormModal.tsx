import { useForm } from 'react-hook-form';
import './AddressFormModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { postAddress } from '../../store/slices/addressSlice/addressSlice';



const AddressFormModal = ({ toggleDialog }: { toggleDialog: any }) => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const userData = useSelector((state : RootState) => state.logInSlice?.data);
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (data: any) => {
     let submitData = {
        id : 0,
        userid : userData.userId,
        city : data.city,
        state : data.city,
        postalcode : data.pinCode,
        address : data.flatNo,
        landmark : data.landmark,
        locality : data.locality,
        isdefault : false,
     }  
    let addressData = {
        token : userData.token,
        submitData : submitData,
     } 
     dispatch(postAddress(addressData));
    }
    return (
        <div className="sign-up-container">
            <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                    <div >Flat no/Building/Street name</div>
                    <input type="text" placeholder='Flat no/Building/Street name' {...register("flatNo", { required: true })} />
                    {errors.flatNo && <div className='error-msg'>Flat No. is required</div>}
                </div>

                <div className="flex-container">
                    <div className="form-group flex-form-item">
                        <div >City</div>
                        <input type="text" placeholder='Enter City' {...register("city", { required: true })} />
                        {errors.city && <div className='error-msg'>City is required</div>}
                    </div>

                    <div className="form-group flex-form-item">
                        <div >State</div>
                        <input type="text" placeholder='Enter State' {...register("state", { required: true })} />
                        {errors.state && <div className='error-msg'>State is required</div>}
                    </div>
                </div>

                <div className="flex-container">

                    <div className="form-group flex-form-item">
                        <div >Pin code</div>
                        <input type="text" placeholder='Enter Pin code'  {...register("pinCode", { required: true })} />
                        {errors.pinCode && <div className='error-msg'>Pin Code is required</div>}
                    </div>
                </div>




                <div className="form-group">
                    <div >Locality</div>
                    <input type="text" placeholder='Enter locality' {...register("locality", { required: true })} />
                    {errors.locality && <div className='error-msg'>Locality is required</div>}
                </div>

                <div className="form-group">
                    <div >Landmark</div>
                    <input type="text" placeholder='Enter Landmark' {...register("landmark", { required: true })} />
                    {errors.landmark && <div className='error-msg'>Landmark is required</div>}
                </div>
                <input className='submit-btn' type="submit" value="Save" onClick={() => toggleDialog()} />
            </form>
        </div>
    )
}

export default AddressFormModal