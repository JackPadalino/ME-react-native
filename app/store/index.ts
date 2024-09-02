import { configureStore } from "@reduxjs/toolkit";

import tracksReducer, { setStoreTracks } from "./tracksSlice";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
