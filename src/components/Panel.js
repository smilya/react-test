import "./Panel.css";
import Content from "./Content";

const Panel = ({ content, width, height, visible = true }) => {
  return (
    <div
      className="Panel"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <Content content={content} />
    </div>
  );
};

export default Panel;
