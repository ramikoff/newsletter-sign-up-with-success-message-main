import React from "react";
import listIcon from "../images/icon-list.svg"

const Success = (props) => {
  return <>
    <div className='container container--small' id="success">
      <img src={listIcon} alt='' className={"list-icon list-icon--success"}/>
      <h2 className='form-label'>
        Thanks for subscribing!
      </h2>
      <p className='form-legend'>
        A confirmation email has been sent to <strong>{props.email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>

      <button className="btn btn--dismiss">
        Dismiss message
      </button>
    </div>
  </>
}

export default Success
