import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED } from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
  loading: true,
};

const handlers = {
  [LOAD_POSTS]: (state, action) => ({
    ...state,
    allPosts: action.payload,
    bookedPosts: action.payload.filter((post) => post.booked),
    loading: false,
  }),
  [TOGGLE_BOOKED]: (state, action) => {
    const allPosts = state.allPosts.map((post) => {
      if (post.id === action.payload) {
        post.booked = !post.booked;
      }
      return post;
    });
    return {
      ...state,
      allPosts,
      bookedPosts: allPosts.filter((post) => post.booked),
    };
  },
  [REMOVE_POST]: (state, action) => {
    return {
      ...state,
      allPosts: state.allPosts.filter((p) => p.id !== action.payload),
      bookedPosts: state.bookedPosts.filter((p) => p.id !== action.payload),
    };
  },
  [ADD_POST]: (state, action) => {
    return {
      ...state,
      allPosts: [{ ...action.payload }, ...state.allPosts],
    };
  },
  DEFAULT: (state) => state,
};

export const postReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
