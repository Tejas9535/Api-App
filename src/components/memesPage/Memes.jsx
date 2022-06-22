import React, { useEffect, useState } from "react";
import axios from "axios";

const Memes = () => {
  const [meme, setMeme] = useState([{ name: "", url: "" }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(" https://api.imgflip.com/get_memes")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const { memes } = data.data;
        setLoading(false);
        return setMeme(memes);
      })
      .catch((error) => alert("request failed", error));
  }, []);

  return loading ? (
    <h3>loading ...</h3>
  ) : (
    <>
      <h1>Memes page</h1>
      {meme.map((ele) => {
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

export default Memes;
