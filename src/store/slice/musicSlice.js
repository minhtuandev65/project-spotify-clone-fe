import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    currentMusic: null,
  },
  reducers: {
    setCurrentMusic: (state, action) => {
      state.currentMusic = action.payload;
    },
  },
});

export const { setCurrentMusic } = musicSlice.actions;
export default musicSlice.reducer;
