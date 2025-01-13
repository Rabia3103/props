import React from "react";

const ImageWithCaption = ({ src, caption }) => {
  return (
    <div>
      {src ? (
        <img src={src} alt={caption} />
      ) : (
        <p className="image-not-available">Image not available</p>
      )}
      <p>{caption}</p>
    </div>
  );
};

export default ImageWithCaption;
