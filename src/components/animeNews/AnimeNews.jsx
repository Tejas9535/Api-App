import React, { useEffect, useState } from "react";
import axios from "axios";

const AnimeNews = () => {
  const [aniNews, setAniNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime/1/news")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const arry = data.data;
        setLoading(false);
        return setAniNews(arry);
      })
      .catch((error) => alert("request failed", error));
  }, []);

  return loading ? (
    <h3>loading ...</h3>
  ) : (
    <>
      <h1>Anime news</h1>
      {aniNews &&
        aniNews.length !== 0 &&
        aniNews.map((ele) => {
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

export default AnimeNews;
