import React, {useEffect, useState} from "react"
import Form from "./assets/js/Form.js"
import Success from "./assets/js/Success.js"

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState('email@com')

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

  const isFormSuccessPullData = (isSuccessData, emailData) => {
    setIsSuccess(isSuccessData)
    setEmail(emailData)
  }

  return <>
    {isSuccess ? <Success isMobile={isMobile} email={email}/> : <Form isMobile={isMobile} isFormSuccessPullData={isFormSuccessPullData}/>}

    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Your Name Here</a>.
    </div>
  </>
}
