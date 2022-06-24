/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Memes = (props) => {
  const { loading, memes, error, fetchMeme } = props;

  useEffect(() => {
    fetchMeme();
  }, []);

  return loading ? (
    <h3>loading ...</h3>
  ) : (
    <>
      <h1>Memes page</h1>
      {memes.map((ele) => {
        return (
          <div key={ele.id}>
            <div>
              <h2>{ele.name}</h2>
            </div>
            <span>
              <img
                src={ele.url}
                alt={ele.name}
                height={ele.height}
                width={ele.width}
              />
            </span>
          </div>
        );
      })}
    </>
  );
};

Memes.defaultProps = {
  memes: [],
  loading: false,
  error: "",
};

Memes.propTypes = {
  memes: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  fetchMeme: PropTypes.func.isRequired,
};
export default Memes;
