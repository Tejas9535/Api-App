/* eslint-disable camelcase */
/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { name, title, url } = props;
  return (
    <div className="w-80 h-80 border-solid border-gray-900 border-[1px] rounded-lg drop-shadow-lg mt-10">
      {name && (
        <div className="text-center text-gray-900 font-semibold  mt-3">
          <p>{name}</p>
        </div>
      )}
      {title && (
        <div className="text-center text-gray-900 font-semibold  mt-3">
          <p>{title}</p>
        </div>
      )}
      {/* {image_url && (
        <div className="mt-4">
          <img className="m-auto w-4/5 h-24" src={url} alt="title" />
        </div>
      )} */}
      {url && (
        <div className="mt-4 w-4/5 h-[77%] m-auto ">
          <img className="w-full h-full" src={url} alt="title" />
        </div>
      )}
    </div>
  );
};

Card.defaultProps = {
  name: "",
  title: "",
  url: "",
  // image_url: "",
};

Card.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  // image_url: PropTypes.string,
};

export default Card;
