import React, {useState} from "react";
import illustrationMobile from "../images/illustration-sign-up-mobile.svg"
import illustrationDesktop from "../images/illustration-sign-up-desktop.svg"
import listIcon from "../images/icon-list.svg"


const Form = (props) => {

  const [inputValue, setInputValue] = useState('email@company.com');

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const sendForm = (event) => {
    event.preventDefault()
    props.isSuccessPullData(validateEmail(inputValue))
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email)
  }



  return (
      <div className='container' id="form">
        <img src={props.isMobile ? illustrationMobile : illustrationDesktop} alt='' className=""/>
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
          <input type='text' name='email' id='email' value={inputValue} onChange={onInputChange}
                 className='input'/>
          <button className="btn" onClick={sendForm}>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
  )

}

export default Form
