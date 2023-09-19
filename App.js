import React, {useEffect, useState} from "react"
import Form from "./assets/js/elements/Form.js"

import Success from "./assets/js/elements/Success.js"
import Attribution from "./assets/js/atoms/Attribution";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("email@com")

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768

  const isFormSuccessPullData = (isDataSuccess, input) => {
    setIsSuccess(isDataSuccess)
    setEmail(input)
  }

  const isDismissed = () => {
    setIsSuccess(false)
  }


  return <>
    {
      isSuccess ?
          <Success isMobile={isMobile} email={email} isDismissed={isDismissed}/> :
          <Form isMobile={isMobile} isFormSuccessPullData={isFormSuccessPullData} isDismissed={isDismissed}/>
    }

    <Attribution/>

  </>
}
