import React from "react";

function ModalImageSlideNav(props) {
  const {inc, dec} = props;
  return(
    <>
      <button className="w3-button w3-black w3-display-left" onClick={dec}>&#10094;</button>
      <button className="w3-button w3-black w3-display-right" onClick={inc}>&#10095;</button>
    </>

  );
}

export default ModalImageSlideNav;
