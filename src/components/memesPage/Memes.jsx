/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Heading, Spinner } from "../../common";

const Memes = (props) => {
  const { loading, memes, error, fetchMeme } = props;

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="dark:bg-neutral-700">
      <Heading heading="Memes" />
      {/* <h1>Memes</h1> */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap justify-around m-10">
          {memes &&
            memes.length !== 0 &&
            memes.map((ele) => {
              return <Card className="basis-1/3 dark:bg-stone-800" {...ele} />;
            })}
        </div>
      )}
    </div>
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
