import { configureStore } from "@reduxjs/toolkit";
import { rootStore } from "./rootStore";

const store = configureStore({
  reducer: rootStore,
});

export default store;