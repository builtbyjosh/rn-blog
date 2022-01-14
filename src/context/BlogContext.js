import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: action.payload.title,content: action.payload.content ,id: Math.floor(Math.random() * 99999)}];
    case 'delete_blogpost': 
      return state.filter((blog)=> blog.id !== action.payload)
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content} });
    callback()
  };
};
const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id})
  }
}

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  []
);
