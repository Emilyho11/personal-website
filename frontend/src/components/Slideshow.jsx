import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Slideshow = ( {images, ratio} ) => {

  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  }
  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [index]);

  const getImageSizes = (ratio) => {
    if (ratio === "9/16") {
      return {
        maxWidth: '350px',
        maxHeight: '800px',
        aspectRatio: ratio,
      };
    }
    if (ratio === "21/9") {
      return {
        maxWidth: '800px',
        maxHeight: '450px',
        aspectRatio: ratio,
      };
    };
    if (ratio === "1/1") {
      return {
        maxWidth: '700px',
        maxHeight: '500px',
        aspectRatio: ratio,
      };
    };
  };

  const imageSize = getImageSizes(ratio);

  return (
		<div className="flex flex-col items-center px-4">
      <div className="relative w-full md:max-w-[800px]" style={imageSize}>
        <img
          src={images[index]}
          alt="Image Slideshow"
          className="w-full h-auto lg:max-h-[450px] object-cover transition-opacity duration-500 border border-slate-400"
          style={imageSize}
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-dark_blue hover:bg-zinc-600 rounded p-1 -ml-9"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-3xl text-back_light_blue" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-dark_blue hover:bg-zinc-600 rounded p-1 -mr-9"
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-3xl text-back_light_blue" />
        </button>
      </div>
    </div>
	);
}

export default Slideshow