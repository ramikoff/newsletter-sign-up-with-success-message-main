import React, {useState} from "react";
import illustrationMobile from "../../images/illustration-sign-up-mobile.svg"
import illustrationDesktop from "../../images/illustration-sign-up-desktop.svg"
import listIcon from "../../images/icon-list.svg"
import Button from "../atoms/Button";


const Form = ({isFormSuccessPullData, isMobile}) => {

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const onInputChange = (event) => {
    setInputValue(event.target.value)
    if (event.target.value === "")
      setError(false)
  }

  const onSubscribe = (event) => {
    event.preventDefault()
    isFormSuccessPullData(validateEmail(inputValue), inputValue)
    if (validateEmail(inputValue) === false)
      setError(true)
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email)
  }


  return (
      <div className="container container--md-large" id="form">
        <img src={isMobile ? illustrationMobile : illustrationDesktop} alt="" className=""/>
        <form action="assets/js" className="form">

          <label className="heading">
            Stay updated!
          </label>
          <p className="lead">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <ul className="list">
            <li className="list-item">
              <img src={listIcon} alt="" className={"list-icon"}/>
              <span>Product discovery and building what matters</span>
            </li>
            <li className="list-item">
              <img src={listIcon} alt="" className={"list-icon"}/>
              Measuring to ensure updates are a success
            </li>
            <li className="list-item">
              <img src={listIcon} alt="" className={"list-icon"}/>
              And much more!
            </li>
          </ul>
          <div className="input-label">
            <label htmlFor='email'>Email address</label>  {error ? <span className="error-message">Valid email required</span> : ""}
          </div>
          <input type="text" name="email" id="email" value={inputValue} onChange={onInputChange}
                 className={error ? "input input--error" : "input"} placeholder={"email@company.com"}/>

          <Button onClick={onSubscribe} className={"btn"} text={"Subscribe to monthly newsletter"}/>

        </form>
      </div>
  )

}

export default Form
