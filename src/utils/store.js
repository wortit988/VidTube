import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import buttonSlice from "./buttonSlice";

const store = configureStore({
    reducer: {
      app : appSlice,
      search : searchSlice,
      chat : chatSlice,
      buttons : buttonSlice,
    },
});

export default store;