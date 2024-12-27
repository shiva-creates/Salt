import './MenuDetails.css'
import item4 from '../../assets/images/item4.png'


function MenuDetails() {
    return (
        <div>
            <div className="menu-details-main-cotnainer">
                <div className='menu-details-container'>
            <div className="menu-detail-img-container web-view">
            <img src={item4} alt="Paleo" className='menu-side-image' />
            <img src={item4} alt="Paleo" className='menu-side-image' />
            <img src={item4} alt="Paleo" className='menu-side-image' />
            <img src={item4} alt="Paleo" className='menu-side-image' />
            <img src={item4} alt="Paleo" className='menu-side-image' />
            </div>
            <div className="menu-main-img-container">
            <img src={item4} alt="Paleo" className='menu-main-image' />
            </div>
            <div className="menu-img-details-container">
            <div className="header menu-detail-header">
            Mexican-Style Cheesy Corn Fritter Tacos
            </div>
            <div className="product-pricing">
                    <div className="price">$15.28</div>
                    <div className="discounted-price">$25.28</div>
                    </div>

                    <div className="product-desc product-desc-top menu-details-prod-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, repellat modi. Culpa ad officia quia. Ipsam aspernatur repudiandae odio. Laudantium facilis voluptatibus maxime minus delectus cupiditate officia at velit? Similique?
                    </div>
                    <div className='product-purchase-option'>
                    <div className="buy-now-btn">
                        Buy Now
                    </div>
                    <div className="cart-btn">
                        Add to cart
                    </div>
                </div>
            </div>



                </div>

                <div className='package-details'>
                <div className="header menu-detail-header">
                    Packaging and Delivery
                </div>
                <div className="package-desc menu-details-prod-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quo delectus iste molestias, laudantium excepturi iusto facere. Inventore ipsum amet sequi quisquam architecto quas odit dolore quia saepe temporibus.
                    Lorem ipsum dolor sit amet consec hic voluptatum architecto libero, doloremque numquam, quasi quos veritatis odit vel molestias saepe! Exercitationem dolorum aliquid velit molestias facere?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ab possimus error eligendi officiis maiores cupiditate commodi quos sequi nisi ratione ut illo, repudiandae, libero, hic perferendis nulla fugit? Veritatis?
                </div>

                <div className="package-desc menu-details-prod-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quo delectus iste molestias, laudantium excepturi iusto facere. Inventore ipsum amet sequi quisquam architecto quas odit dolore quia saepe temporibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio sed hic voluptatum architecto libero, doloremque numquam, quasi quos veritatis odit vel molestias saepe! Exercitationem dolorum aliquid velit molestias facere?
                   maiores cupiditate commodi quos sequi nisi ratione ut illo, repudiandae, libero, hic perferendis nulla fugit? Veritatis?
                </div>

                <div className="package-desc menu-details-prod-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quo delectus iste molestias, laudantium excepturi iusto facere. Inventore ipsum amet sequi quisquam architecto quas odit dolore quia saepe temporibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optis?
                </div>

                <div className="header menu-detail-header">
                    Suggested Use
                </div>
                <div className="package-desc menu-details-prod-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quo delectus iste molestias, laudantium excepturi iusto facere. Inventore ipsum amet sequi quisquam architecto quas odit dolore quia saepe temporibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optis?
                </div>

                <div className="header menu-detail-header">
                    Other ingredeients
                </div>
                <div className="package-desc menu-details-prod-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vero quo delectus iste molestias, laudantium excepturi iusto facere. Inventore ipsum amet sequi quisquam architecto quas odit dolore quia saepe temporibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optis?
                </div>

                <div className="header menu-detail-header">
                    More Info
                </div>
                <div className="package-desc menu-details-prod-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                </div>
            </div>
        </div>
    )
}

export default MenuDetails