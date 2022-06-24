import { connect } from "react-redux";
import Memes from "./Memes";
import { fetchMeme } from "./action";

const mapStateToProps = (state) => ({
  loading: state.memes.loading,
  error: state.memes.error,
  memes: state.memes.memes,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMeme: () => dispatch(fetchMeme()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Memes);
