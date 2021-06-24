import React from "react";

function ModalImageSlide(props) {
  const {display, src} = props;

  return (
    <p>
      <img
        alt={'product'}
        src={`../../img/${src}`}
        style={{ display: display, width: '100%'}}
      />
    </p>
  );
};

export default ModalImageSlide;
