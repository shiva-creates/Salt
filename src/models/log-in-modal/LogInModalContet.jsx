import './LogInModalContent.css';
import googleImg from '../../assets/images/google.png'
import { useNavigate } from 'react-router-dom';
// this are the imports required
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { useDispatch } from 'react-redux';
import { googleLogInValidate } from '../../store/slices/logInSlice/logInSlice';
import { showError } from '../../store/slices/errorMessageSlice/errorMessageSlice';

const LogInModalContent = ({ toggleDialog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleProfileClick = () => {
  //   toggleDialog();
  //   navigate('/profile');
  // };

  // this is the firebase app config you can store anywhere you want
  const firebaseConfig = {
    apiKey: "AIzaSyCO7to8SN0yuBuk-XKr9K469mVoyg9D_I8",
    authDomain: "plenty-api.firebaseapp.com",
    projectId: "plenty-api",
    storageBucket: "plenty-api.appspot.com",
    messagingSenderId: "961135446524",
    appId: "1:961135446524:web:a7e1068f9e7964f368ca79",
    measurementId: "G-FXT6EQHX1Y"
  };

  // this is required for initializing googlr provider
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogInClick = () => {
    toggleDialog();
    navigate('/log-in');
  }

  const handleGoogleLogInClick = () => {
    // main logic for signin with google
    const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((result) => {
        console.log('result', result);
        dispatch(googleLogInValidate(result));
      })


  }

  return (
    <>

      <div className="log-in-modal-container">
        <div className="log-in-header-container">
          <div className='log-in-header'>Login / Create Account</div>
          <div className='log-in-subheader'>Register now and get 500 reward points instantly!</div>
        </div>

        <div className="login-option-container">
          <div className="log-in-option" onClick={handleLogInClick}>
            Log in with Mobile Number / Email
          </div>
          <div className="log-in-option" onClick={handleGoogleLogInClick}>
            <img src={googleImg} alt="google" className='log-in-logo-img' />
            Google
          </div>

          {/* <div className="log-in-option" onClick={handleProfileClick}>
        Profile
      </div> */}
        </div>
      </div>
    </>
  )
}

export default LogInModalContent;
