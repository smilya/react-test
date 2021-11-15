import initialContent from "../initialContent";
import { deepClone } from "../assets";

const contentReducer = (oldContent = initialContent, action) => {
  switch (action.type) {
    case "UPDATE_CONTENT":
      const clearPath = action.payload.path.replace(/['"]/g, "");
      const codeString = `${clearPath}=${action.payload.newValue}`;
      let content = deepClone(oldContent);
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
