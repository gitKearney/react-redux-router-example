import React, {useEffect, useState} from "react";
import ModalImageSlide from "./ModalImageSlide";
import ModalImageSlideNav from "./ModalImageSlideNav";

function ModalSlideShow(props) {
  const [imageIndex, setImageIndex] = useState(0);

  function increment() {
    if (imageIndex === (props.productSlides.length - 1)) {
      return setImageIndex(0);
    }

    setImageIndex(imageIndex + 1);
  }

  function decrement() {
    if (imageIndex === 0) {
      setImageIndex(props.productSlides.length - 1);
      return;
    }

    setImageIndex(imageIndex - 1);
  }

  if (props?.product?.id === undefined) {
    return null;
  }


  return(
    <div className="w3-content w3-display-container">
      <ModalImageSlide display={'block'} src={props.productSlides[imageIndex]} />
      <ModalImageSlideNav inc={increment} dec={decrement} />
    </div>
  )
}

export default ModalSlideShow;
