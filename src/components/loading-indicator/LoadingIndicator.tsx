import './LoadingIndicator.css'
import loadingGif from '../../assets/images/Stirfry-unscreen.gif'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
const LoadingIndicator = () => {
  const isLoading = useSelector((state: RootState) => state.loadingSlice.isLoading);

  return (
    <>
      {
        isLoading ?
          <div className="loading-container">
            <div className="img-container">
              <img className='loading-gif' src={loadingGif} alt="" />
            </div>
          </div> : <></>


      }



    </>
  )
}

export default LoadingIndicator