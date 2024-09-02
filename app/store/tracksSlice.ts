import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
// import { TrackInt } from "../ints/ints";

interface StoreTracksState {
  featuredTracks: any[];
  storeTracks: any[];
}

const initialState: StoreTracksState = {
  featuredTracks: [],
  storeTracks: [],
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setFeaturedTracks: (state, action: PayloadAction<any[]>) => {
      state.featuredTracks = action.payload;
    },
    setStoreTracks: (state, action: PayloadAction<any[]>) => {
      state.storeTracks = action.payload;
    },
  },
});

export const { setFeaturedTracks, setStoreTracks } = tracksSlice.actions;

// selectors to be used to pull data down from redux store
export const selectFeaturedTracks = (state: RootState) =>
  state.tracks.featuredTracks;
export const selectStoreTracks = (state: RootState) => state.tracks.storeTracks;

export default tracksSlice.reducer;
