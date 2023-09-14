import React, {useState, useEffect} from "react";
import illustrationMobile from "../images/illustration-sign-up-mobile.svg"
import illustrationDesktop from "../images/illustration-sign-up-desktop.svg"
import listIcon from "../images/icon-list.svg"


const Form = () => {

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768
  const onInputChange = () => {
    console.log("input changed...")
  }

  return (
      <div className='container'>
        <img src={isMobile ? illustrationMobile : illustrationDesktop} alt='' className=""/>
        <form action='' className='form'>

          <label className='form-label'>
            Stay updated!
          </label>
          <p className='form-legend'>
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="list">
            <li className="list-item">
              <img src={listIcon} alt='' className={"list-icon"}/>
              <span>Product discovery and building what matters</span>
            </li>
            <li className="list-item">
              <img src={listIcon} alt='' className={"list-icon"}/>
              Measuring to ensure updates are a success
            </li>
            <li className="list-item">
              <img src={listIcon} alt='' className={"list-icon"}/>
              And much more!
            </li>
          </ul>
          <div className='input-label'>
            Email address
          </div>
          <input type='text' name='email' id='email' value='email@company.com' onChange={onInputChange}
                 className='input'/>
          <button className="btn">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
  )

}

export default Form
