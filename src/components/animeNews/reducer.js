import {
  FETCH_ANIMENEWS_PENDING,
  FETCH_ANIMENEWS_SUCCESS,
  FETCH_ANIMENEWS_REJECTED,
} from "./action";

const initialState = {
  loading: false,
  animeNews: [],
  error: "",
};

const animeReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ANIMENEWS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ANIMENEWS_SUCCESS: {
      const { data } = action.payload.data;
      return {
        ...state,
        loading: false,
        animeNews: data,
      };
    }
    case FETCH_ANIMENEWS_REJECTED: {
      const responseBody = action.payload.data;
      return {
        ...state,
        error: responseBody,
      };
    }
    default:
      return state || initialState;
  }
};

export default animeReducer;
