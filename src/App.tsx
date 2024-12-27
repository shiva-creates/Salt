import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Landing from './pages/landing/Landing';
import Cart from './pages/cart/Cart';
import MenuDetails from './pages/menu-details/MenuDetails';
import Menu from './pages/menu/Menu';
import { useState } from 'react';
import Profile from './pages/profile/Profile';
import SignUp from './pages/sign-up/SignUp';
import MealPlan from './pages/meal-plan/MealPlan';
import MyProfile from './pages/profile/profile-tabs/my-profile/MyProfile';
import EditMenu from './pages/profile/profile-tabs/edit-menu/EditMenu';
import MyAddress from './pages/profile/profile-tabs/my-address/MyAddress';
import Checkout from './pages/checkout/Checkout';
import LogIn from './pages/log-in/LogIn';

import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import ErrorMessageBox from './components/error-message-box/ErrorMessageBox';

function App() {
	const [cart, setCart] = useState([] as any);

  return (
    <div className="App">
        <LoadingIndicator />
		<ErrorMessageBox />
    <BrowserRouter>
    <Header size={cart.length} />
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/menu" element={<Menu />} />
			<Route path="/meal-plan" element={<MealPlan />} />
			<Route path="/menu-details" element={<MenuDetails />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route path="/log-in" element={<LogIn />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/profile" element={<Profile />} >
			<Route path="" element={<MyProfile />} />
			<Route path="/profile/edit-menu" element={<EditMenu />} />
			<Route path="/profile/my-address" element={<MyAddress />} />
			 </Route>

		</Routes>
      <Footer />
	</BrowserRouter>
    </div>
  );
}

export default App;
