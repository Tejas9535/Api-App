import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Heading, Spinner } from "../../common";

const AnimeNews = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { loading, animeNews, error, fetchAnimeNews } = props;

  useEffect(() => {
    fetchAnimeNews();
  }, []);

  return (
    <div className="dark:bg-neutral-700">
      <Heading heading="Anime News" />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap justify-around m-10 ">
          {animeNews &&
            animeNews.length !== 0 &&
            animeNews.map((ele) => {
              return <Card className="basis-1/3" {...ele} />;
            })}
        </div>
      )}
    </div>
  );
};

AnimeNews.defaultProps = {
  animeNews: [],
  loading: false,
  error: "",
};

AnimeNews.propTypes = {
  animeNews: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  fetchAnimeNews: PropTypes.func.isRequired,
};

export default AnimeNews;
