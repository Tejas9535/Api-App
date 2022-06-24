import {
  FETCH_MEME_PENDING,
  FETCH_MEME_SUCCESS,
  FETCH_MEME_REJECTED,
} from "./action";

const initialState = {
  loading: false,
  memes: [],
  error: "",
};

const memeReducer = (state, action) => {
  switch (action.type) {
    case FETCH_MEME_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MEME_SUCCESS: {
      const { memes } = action.payload.data.data;
      return {
        ...state,
        loading: false,
        memes,
      };
    }
    case FETCH_MEME_REJECTED: {
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

export default memeReducer;
