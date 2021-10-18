import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const store = configureStore({
  reducer: {
    items: reducer,
    middleware: [logger],
  },
});

export default store;
