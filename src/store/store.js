/* Thiết lập Redux store, middleware, root reducer… */

import { configureStore } from "@reduxjs/toolkit";
import { LoadingReducer } from "./reducer/loading/LoadingReducer";
import musicReducer from "@/store/slice/musicSlice";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  // các reducer
  //   Reducer cho loading
  LoadingReducer,
  music: musicReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
