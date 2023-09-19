import React from "react";
import iconSuccess from "../../images/icon-success.svg";
import Button from "../atoms/Button";

const Success = ({email, isDismissed}) => {


  return <>
    <div className="container container--md-small" id="success">
      <img src={iconSuccess} alt="" className={"icon-success"}/>
      <h2 className="heading">
        Thanks for subscribing!
      </h2>
      <p className="lead">
        A confirmation email has been sent to <strong>{email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>

      <Button className="btn btn--dismiss" onClick={isDismissed} text={"Dismiss message"}/>
    </div>
  </>
}

export default Success
