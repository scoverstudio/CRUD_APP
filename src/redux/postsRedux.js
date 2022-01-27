import shortid from "shortid";

// selectors
export const getAllPosts = (state) => state.posts;
export const getPostsById = (state, postId) =>
  state.posts.find((post) => post.id === postId);
export const getPostsByCategory = (state, categoryName) =>
  state.posts.filter((post) => post.category === categoryName);

//actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const ADD_POST = createActionName("ADD_POST");
const REMOVE_POST = createActionName("REMOVE_POST");
const EDIT_POST = createActionName("EDIT_POST");

//action creators
export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});
export const removePost = (payload) => ({
  type: REMOVE_POST,
  payload,
});
export const editPost = (payload) => ({
  type: EDIT_POST,
  payload,
});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_POST:
      return statePart.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    default:
      return statePart;
  }
};

export default postsReducer;
