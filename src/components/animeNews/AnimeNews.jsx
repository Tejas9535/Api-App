import React, { useEffect } from "react";
import PropTypes from "prop-types";

const AnimeNews = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { loading, animeNews, error, fetchAnimeNews } = props;

  useEffect(() => {
    fetchAnimeNews();
  }, []);

  return loading ? (
    <h3>loading ...</h3>
  ) : (
    <>
      <h1>Anime news</h1>
      {animeNews &&
        animeNews.length !== 0 &&
        animeNews.map((ele) => {
          return (
            <div key={ele.mal_id}>
              <div>
                <h2>{ele.title}</h2>
              </div>
              <div>
                <h4>{ele.author_username}</h4>
                <p> {ele.date}</p>
              </div>
              <span>
                <a href={ele.forum_url}>
                  <img src={ele.images.jpg.image_url} alt={ele.title} />
                </a>
              </span>
              <div>{ele.forum_url}</div>
            </div>
          );
        })}
    </>
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
