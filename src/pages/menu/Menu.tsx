import './Menu.css'
import { useEffect, useState } from 'react';
import menuItem1 from '../../assets/images/item3.png'
import paleo from '../../assets/images/paleo-diet.png'
import gluten from '../../assets/images/gluten-free.png'
import fish from '../../assets/images/fish.png'
import veg from '../../assets/images/salad.png'
import keto from '../../assets/images/keto.png'
import item2 from '../../assets/images/item2.png';
import MenuCard from './menu-card/MenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getMenu } from '../../store/slices/menuSlice/menuSlice';


function Menu() {
    const dispatch = useDispatch<AppDispatch>()

    const menuResponse = useSelector((state: RootState) => state.menuSlice.data);

    const [filters, setFilters] = useState({
        redMeat: false,
        vegetables: false,
        salad: false,
        keto: false,
        breakfast: false,
        lunch: false,
        dinner: false,
    });

    useEffect(() => {
        dispatch(getMenu())
    }, []);

    const handleCheckboxChange = (event: any) => {
        const { name, checked } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: checked,
        }));
    };

    const filterMenuWihCheckbox = (category: any) => {
        // const filteredMenu = MenuApiData.filter((data) => {
        //     return data.category === category;
        // });
        // setMenuData(filteredMenu);
    }


    const filterMenu = (category: string) => {
        // const filteredMenu = MenuApiData.filter((data) => {
        //     return data.category === category;
        // });
        // setMenuData(filteredMenu);
    }
    return (
        <>
            <div className="menu-container">
                <div className="side-bar web-view">
                    <div className="category-btn-container">
                        Browse all category
                    </div>

                    <div className="category-section">
                        <div className="category-header">
                            Category
                        </div>

                        <div className="category-item-container" onClick={() => filterMenu('Paleo')}>
                            <img src={paleo} alt="Paleo" className='category-icon' />
                            <div className='category-name'>Paleo</div>
                            <div className='category-badge'>0</div>
                        </div>
                        <div className="category-item-container" onClick={() => filterMenu('Vegetarian')}>
                            <img src={veg} alt="Paleo" className='category-icon' />
                            <div className='category-name'>Vegetarian</div>
                            <div className='category-badge'>0</div>
                        </div>
                        <div className="category-item-container" onClick={() => filterMenu('Gluten-Free')}>
                            <img src={gluten} alt="Paleo" className='category-icon' />
                            <div className='category-name'>Gluten-Free</div>
                            <div className='category-badge'>0</div>
                        </div>
                        <div className="category-item-container" onClick={() => filterMenu('Keto-friendly')}>
                            <img src={keto} alt="Paleo" className='category-icon' />
                            <div className='category-name'>Keto-friendly</div>
                            <div className='category-badge'>0</div>
                        </div>
                        <div className="category-item-container" onClick={() => filterMenu('Pescatarian')}>
                            <img src={fish} alt="Paleo" className='category-icon' />
                            <div className='category-name'>Pescatarian</div>
                            <div className='category-badge'>0</div>
                        </div>
                    </div>

                    <div className='filter-section'>
                        {/* <div className="price-filter">Filter by price</div>
                    <div className="filter-bar-container">
                    </div> */}

                        <div className='type-section'>
                            <div className="type-header">
                                Type
                            </div>
                            <div className="type-list-contianer">
                                <input className="checkbox-contianer" type="checkbox" name="redMeat" onChange={e => handleCheckboxChange(e)} />
                                <div className="type">
                                    Red meat (0)
                                </div>
                            </div>

                            <div className="type-list-contianer">
                                <input className="checkbox-contianer" type="checkbox" name="vegetables" onChange={e => handleCheckboxChange(e)} />
                                <div className="type">
                                    Vegetables (0)
                                </div>
                            </div>

                            <div className="type-list-contianer">
                                <input className="checkbox-contianer" type="checkbox" name="salad" onChange={e => handleCheckboxChange(e)} />
                                <div className="type">
                                    Salad (0)
                                </div>
                            </div>

                            <div className="type-list-contianer">
                                <input className="checkbox-contianer" type="checkbox" name="keto" onChange={e => handleCheckboxChange(e)} />
                                <div className="type">
                                    Keto (0)
                                </div>
                            </div>
                        </div>
                        <div className='type-section'>
                            <div className="type-header">
                                Meal by time
                            </div>
                            <div className="type-list-contianer">
                                <input className="checkbox-contianer" type="checkbox" name="breakfast" onChange={e => handleCheckboxChange(e)} />
                                <div className="type">
                                    Breakfast (0)
                                </div>
                            </div>

                            <div className="type-list-contianer">
                                <input className="checkbox-contianer" type="checkbox" name="lunch" onChange={e => handleCheckboxChange(e)} />
                                <div className="type">
                                    Lunch (0)
                                </div>
                            </div>

                            <div className="type-list-contianer">
                                <input className="checkbox-contianer" type="checkbox" name="dinner" onChange={e => handleCheckboxChange(e)} />
                                <div className="type">
                                    Dinner (0)
                                </div>
                            </div>
                        </div>
                        <div className="buy-now-btn" onClick={filterMenuWihCheckbox}>
                            Filter
                        </div>
                    </div>


                    <div className='filter-section'>
                        <div className="type-header">
                            New Products
                        </div>

                        <div className="new-product-container">
                            <div className="new-product">
                                <img className='new-pro-img' src={item2} alt="Non veg food" />
                                <div className="new-product-details">
                                    <div className="new-product-name">
                                        Chen Cardigan
                                    </div>
                                    <div className="new-product-price">
                                        $12.34
                                    </div>
                                </div>
                            </div>

                            <div className="new-product">
                                <img className='new-pro-img' src={item2} alt="Non veg food" />
                                <div className="new-product-details">
                                    <div className="new-product-name">
                                        Sweet & Salty
                                    </div>
                                    <div className="new-product-price">
                                        $12.34
                                    </div>
                                </div>
                            </div>

                            <div className="new-product">
                                <img className='new-pro-img' src={item2} alt="Non veg food" />
                                <div className="new-product-details">
                                    <div className="new-product-name">
                                        Chen Sweater
                                    </div>
                                    <div className="new-product-price">
                                        $12.34
                                    </div>
                                </div>
                            </div>

                            <div className="new-product">
                                <img className='new-pro-img' src={item2} alt="Non veg food" />
                                <div className="new-product-details">
                                    <div className="new-product-name">
                                        Angie’s Boomch
                                    </div>
                                    <div className="new-product-price">
                                        $12.34
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="menu-item-container">
                    <div className="product-main-container">
                        <div className='top-bar top-mobile-view'>
                            <div className="category-btn-container top-mobile-btn">
                                Browse all category
                            </div>
                            <div className="category-btn-container top-mobile-btn">
                                Filter
                            </div>
                            <div className="category-btn-container top-mobile-btn">
                                Sort
                            </div>
                        </div>
                        <div className="product-header">
                            Popular products
                        </div>

                        <div className="product-card-container">
                            {
                                Object.keys(menuResponse).length > 0 && <MenuCard menuData={menuResponse} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu