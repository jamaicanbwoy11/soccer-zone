import React from 'react';
import './Notification.scss';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function Notification() {
  return (
    <div className="notification">
      <div className="notification__content">
        <InsertEmoticonIcon />

        <h1>SUCCESS!</h1>
        <h2>Your product has been added to the cart</h2>
        <div className="notification__content__point">
          <span className="gray"></span>
          <span className="white"></span>
        </div>
      </div>
    </div>
  );
}

export default Notification;
