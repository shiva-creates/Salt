import { useDispatch, useSelector } from 'react-redux';
import './ErrorMessageBox.css'
import { AppDispatch, RootState } from '../../store/store';
import { hideError } from '../../store/slices/errorMessageSlice/errorMessageSlice';
import warningIcon from '../../assets/images/warning.png'

const ErrorMessageBox = () => {
  const isShowing = useSelector((state: RootState) => state.errorMessageSlice.isShowing);
  const errorData = useSelector((state: RootState) => state.errorMessageSlice.errorMessage);
  
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
    {
      isShowing ? <div className='error-main-container'>
        <div className="error-container">
          <div className="error-header-container">
          <div className="error-header">
          Error
          </div>
          <div className="dialog-btn-container">
           <button className="dialog-btn" onClick={() => dispatch(hideError())}>X</button>
            </div>
          </div>
        <div className="error-content">
      <span><img className='warning-icon' src={warningIcon} alt="error" /></span>{errorData?.code} : {errorData?.message}
        </div>
        </div>
      </div> : <></>
    }
    </>
  )
}

export default ErrorMessageBox