import { apiType, API_INVOCATION } from "../../middlewears/constants";

export const FETCH_MEME = "FETCH_MEME";
export const FETCH_MEME_PENDING = "FETCH_MEME_PENDING";
export const FETCH_MEME_SUCCESS = "FETCH_MEME_SUCCESS";
export const FETCH_MEME_REJECTED = "FETCH_MEME_REJECTED";

export const fetchMeme = () => {
  const url = "https://api.imgflip.com/get_memes";
  const payload = {
    action: FETCH_MEME,
    method: apiType.GET,
    url,
  };
  return { type: API_INVOCATION, payload };
};
