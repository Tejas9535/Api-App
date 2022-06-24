import { connect } from "react-redux";
import AnimeNews from "./AnimeNews";
import { fetchAnimeNews } from "./action";

const mapStateToProps = (state) => ({
  loading: state.animeNews.loading,
  error: state.animeNews.error,
  animeNews: state.animeNews.animeNews,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnimeNews: () => dispatch(fetchAnimeNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeNews);
