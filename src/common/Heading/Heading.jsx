import React from "react";
import PropTypes from "prop-types";

const Heading = (props) => {
  const { heading } = props;
  return (
    <div className="text-center font-bold text-2xl bg-white dark:bg-neutral-700">
      <h1 className="text-indigo-600 dark:text-cyan-50 p-3">{heading}</h1>
      <div className="border-b-2 border-solid" />
    </div>
  );
};

Heading.defaultProps = {
  heading: "",
};

Heading.propTypes = {
  heading: PropTypes.string,
};

export default Heading;
