import { combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import animeReducer from "./components/animeNews/reducer";
import apiSaga from "./middlewears/apiSaga";
import memeReducer from "./components/memesPage/reducer";

const sagaMiddeleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddeleware];
const rootReducers = combineReducers({
  animeNews: animeReducer,
  memes: memeReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddeleware.run(apiSaga);

export default store;
