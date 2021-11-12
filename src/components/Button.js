const Button = ({ caption='button', width, height, visible = true, onClick }) => (
  <button
    style={{
      width: `${width}px`,
      height: `${height}px`,
      visibility: visible ? 'visible' : 'hidden',
    }}
    onClick={onClick}
  >
    {caption}
  </button>
);

export default Button;
