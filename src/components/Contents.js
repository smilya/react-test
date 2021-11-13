import Button from "./Button";
import Label from "./Label";
import Panel from "./Panel";

const Contents = ({content}) => {
  function renderElems(elem) {
    if (elem.type === 'button') {
      return <Button {...elem.props} />;
    }
    if (elem.type === 'label') {
      return <Label {...elem.props} />;
    }
    if (elem.type === 'panel') {
      return <Panel {...elem.props} content={elem.content} />;
    }
    return null;
  }

  if (!content ||!content.length) return null;
  return (
    <div className="Content">
      <ul>
        {content.map((elem, index) => (
          <li key={index}>{renderElems(elem)}</li>
        ))}
      </ul>
    </div>
  )
}

export default Contents;