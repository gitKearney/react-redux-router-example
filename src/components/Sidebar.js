import React, { useState, } from "react";
import { Link} from "react-router-dom";

function Sidebar() {
  const [display, setDisplay] = useState('block')
  const closeSideBar = () => {
    setDisplay('none');
  };

  const openSideBar = () => {
    setDisplay('block');
  }

  if (display === 'none') {
    return (
      <div>
        <button className="w3-button w3-xlarge w3-left" onClick={openSideBar}>☰</button>
      </div>
    );
  }

  return (
    <div className="w3-animate-left w3-card w3-sidebar" style={{display}}>
      <div className="w3-bar w3-dark-grey">
        <span className="w3-bar-item w3-padding-16">Content</span>
        <button onClick={closeSideBar} className="w3-bar-item w3-button w3-right w3-padding-16"
                title="close Sidebar">&times;</button>
      </div>
      {/* <!-- side bar links --> */}
      <div className="w3-bar-block">
        <Link to="/" className="w3-bar-item w3-button w3-text-black">Home</Link>
        <Link to="/login" className="w3-bar-item w3-button w3-text-black">Login</Link>
        <Link to="/products" className="w3-bar-item w3-button w3-text-black">Products</Link>
      </div>
    </div>
  );
}

export default Sidebar;
