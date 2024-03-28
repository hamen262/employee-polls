import { createSlice } from "@reduxjs/toolkit";
const authedUser = createSlice({
  name: "authedUser",
  initialState: null,
  reducers: {
    setAuthedUser: (state, action) => {
      return action.payload;
    },
    clearAuthedUser: (state, action) => {
      return null;
    }
  },
});

export const { setAuthedUser } = authedUser.actions;
export default authedUser.reducer;