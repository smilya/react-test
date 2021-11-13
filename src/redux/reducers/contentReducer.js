import initialContent from "../initialContent";

const contentReducer = (content = initialContent, action) => {
  const oldContent = content;
  switch (action.type) {
    case "UPDATE_CONTENT":
      const path = action.payload.path;
      const newValue = action.payload.newValue;
      if (path === '' || newValue === '') {
        return oldContent;
      }
      const clearPath = action.payload.path.replace(/['"]/g, "");
      const codeString = `${clearPath}=${action.payload.newValue}`;
      const content = [...oldContent];
      eval(codeString)
      return content;
    default:
      return oldContent;
  }
};

export default contentReducer;
