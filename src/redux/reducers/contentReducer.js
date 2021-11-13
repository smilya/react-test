import initialContent from '../initialContent';

const contentReducer = (content=initialContent, action) => {
  switch (action.type) {
    case 'UPDATE_CONTENT':
      console.log(action.payload);
      return content;
    default:
      return content;
  }
}

export default contentReducer;