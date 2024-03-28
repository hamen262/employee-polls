import { createSlice } from "@reduxjs/toolkit";
import { getInitialData } from "../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await getInitialData();
    return response.data;
  }
);

const users = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    getUsers: (state, action) => {
      const { users } = action.payload;
      state = { ...state, ...users };
    }
  }, extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addUser, addQuestionToUser, addAnswerToUser } = users.actions;
export default users.reducer;