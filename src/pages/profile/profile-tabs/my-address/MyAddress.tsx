import { useEffect, useRef, useState } from 'react';
import './MyAddress.css'
import AddressFormModal from '../../../../models/address-form-modal/AddressFormModal';
import Modal from '../../../../models/Modal';
import editIcon from '../../../../assets/images/edit.png';
import deleteIcon from '../../../../assets/images/delete.png';
import useDialogToggle from '../../../../models/useModal';
import { AppDispatch, RootState } from '../../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress, getUserAddress } from '../../../../store/slices/addressSlice/addressSlice';

const MyAddress = () => {
  const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);
  const { dialogRef, toggleDialog } = useDialogToggle();
  const userData = useSelector((state : RootState) => state.logInSlice?.data);
  const addressData = useSelector((state : RootState) => state.addressSlice.data);

  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteAddress = (addressId : any) => {
    let deleteAddressData = {
      addressId : addressId,
      authToken : userData.token
    }
      dispatch(deleteAddress(deleteAddressData))
  }


  useEffect(() => {
        dispatch(getUserAddress(userData));
}, [dispatch]);

  return (
    <>
          <div className="add-address-btn" onClick={() => { setDialogContent(<AddressFormModal toggleDialog={toggleDialog} />); toggleDialog(); }}>
        + Add new address
      </div>
            <div className="dialog-container">
                <Modal toggleDialog={toggleDialog} ref={dialogRef}>
                    {dialogContent}
                </Modal>
            </div>
      {
         Object.keys(addressData)?.length == 0 ?
         <>
             <div className="empty-cart-message">
                 No address found.
             </div>
         </>
     :
     addressData.length > 0  &&  addressData?.map((address) => {
                            
      return (
        <div className="address-container" key={address?.id}>
        <div className="user-address">
          <div>
          <div className="address-heading">
          {address.city}, {address.state} 
          {/* <span className='default-tag'>Default</span> */}
          </div>
          <div className="address-content">
          {address.address}, {address.locality},
  {address.landmark}, 
          <div>
          {address.city}, {address.state}  - {address.postalcode}
            </div> 
          </div>
          </div>
          <div className="button-container">
            {/* <span className="edit-btn">
              <img className='iconImg' src={editIcon} alt="Edit" />
            </span> */}
            <span className="delete-btn" onClick={()=> handleDeleteAddress(address?.id)}>
            <img className='iconImg' src={deleteIcon} alt="Edit" />
            </span>
          </div>
  
        </div>
  </div>
      )
  })
      }
    
    </>
  )
}

export default MyAddress