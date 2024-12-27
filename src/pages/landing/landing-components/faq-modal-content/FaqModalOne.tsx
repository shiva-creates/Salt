import './FaqModalOne.css'

function FaqModalOne() {
    return (
        <div>
               <div className='reward-container animate-component'>
        <ul className="faq-accordion">
  <li>
    <input className='faq-checkbox' type="checkbox" id="first" />
    <label htmlFor="first">What are the benefits of a subscription?</label>
    <div className="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum suscipit consequuntur voluptatum.
      </p>
    </div>
  </li>

  <li>
    <input className='faq-checkbox' type="checkbox" id="second" />
    <label htmlFor="second">Who is a super subscriber? What are the privileges of a super subscriber?</label>
    <div className="content">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum suscipit consequuntur voluptatum.
      </p>
    </div>
  </li>

  <li>
    <input className='faq-checkbox' type="checkbox" id="third" />
    <label htmlFor="third">Can I pause my subscription plan?</label>
    <div className="content">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum suscipit consequuntur voluptatum.
      </p>
    </div>
  </li>

  <li>
    <input className='faq-checkbox' type="checkbox" id="fourth" />
    <label htmlFor="fourth">Can I cancel my subscription at any time?</label>
    <div className="content">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum suscipit consequuntur voluptatum.
      </p>
    </div>
  </li>
  <li>
    <input className='faq-checkbox' type="checkbox" id="five" />
    <label htmlFor="five">How soon will I receive meals after subscribing?</label>
    <div className="content">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum suscipit consequuntur voluptatum.
      </p>
    </div>
  </li>

  <li>
    <input className='faq-checkbox' type="checkbox" id="six" />
    <label htmlFor="six">Can I customize my meal plan?</label>
    <div className="content">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum suscipit consequuntur voluptatum.
      </p>
    </div>
  </li>

</ul>

        </div>
        </div>
    )
}

export default FaqModalOne