import React, {useState, useEffect, } from "react";

function Carousel() {
  const images = ['white-socks.jpg', 'red-socks.jpg', 'many-socks.jpg'];

  const [imgIndex, setImgIndex] = useState(0);
  const [imgSource, setImgSource] = useState(images[imgIndex]);


  useEffect(() => {
    const rotateImages = () => {
      let newImgIndex = imgIndex + 1;
      if (newImgIndex === images.length) {
        newImgIndex = 0;
      }

      setImgIndex(newImgIndex);
      setImgSource(images[newImgIndex]);

    };

    setTimeout(rotateImages, 4000);
  });

  return (
    <div>
      {/* <!-- Begin Automatic Slideshow Images --> */}
      <img src={`../../img/${imgSource}`} alt={"rotating images of socks"}
           className="w3-border" style={{width: '100%', display: 'block',}} />
      {/* <!-- End Automatic Slideshow Images --> */}
    </div>
  );
}

export default Carousel;
