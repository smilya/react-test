import initialContent from "../initialContent";

const contentReducer = (oldContent = initialContent, action) => {
  switch (action.type) {
    case "UPDATE_CONTENT":
      const clearPath = action.payload.path.replace(/['"]/g, "");
      const codeString = `${clearPath}=${action.payload.newValue}`;
      let content = [...oldContent];
      try {
        eval(codeString);
      } finally {
        return content;
      }
    default:
      return oldContent;
  }
};

export default contentReducer;
