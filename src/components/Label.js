const Label = ({caption='label', visible=true}) => (
  <span style={{
    visibility: visible ? 'visible' : 'hidden',
  }}>{caption}</span>
)

export default Label;