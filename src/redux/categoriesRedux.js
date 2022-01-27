import shortid from "shortid";

// selectors
export const getAllCategories = (state) => state.categories;
export const getCategoriesById = (state, postCategoryId) =>
  state.categories.find((category) => category.id === postCategoryId);

//actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_CATEGORIES = createActionName("ADD_LIST");

//action creators

export const addCategory = (payload) => ({ type: ADD_CATEGORIES, payload });

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default categoriesReducer;
