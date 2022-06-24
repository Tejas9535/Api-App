import { apiType, API_INVOCATION } from "../../middlewears/constants";

export const FETCH_ANIMENEWS = "FETCH_ANIMENEWS";
export const FETCH_ANIMENEWS_PENDING = "FETCH_ANIMENEWS_PENDING";
export const FETCH_ANIMENEWS_SUCCESS = "FETCH_ANIMENEWS_SUCCESS";
export const FETCH_ANIMENEWS_REJECTED = "FETCH_ANIMENEWS_REJECTED";

export const fetchAnimeNews = () => {
  const url = "https://api.jikan.moe/v4/anime/1/news";
  const payload = {
    action: FETCH_ANIMENEWS,
    method: apiType.GET,
    url,
  };
  return { type: API_INVOCATION, payload };
};
