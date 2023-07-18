import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    items: [],
  },
  reducers: {
    addPost: function (state, action) {
      state.items.push(action.payload);
      //console.log(action);
    },

    deletePost: function (state, action) {
      state.items = state.items.filter((item) => item.id != action.payload.id);
    },
    updatePost: function (state, action) {
      state.items.map((item) => {
        if (item.id == action.payload.id) {
          item.title = action.payload.title;
          item.discription = action.payload.discription;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
