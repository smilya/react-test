import './Content.css';
import Button from './Button';
import Label from './Label';

const Content = ({ content }) => {

  function renderElems(elem) {
    if (elem.type === 'button') {
      return <Button {...elem.props} />;
    }
    if (elem.type === 'label') {
      return <Label {...elem.props} />;
    }
    if (elem.type === 'panel') {
      return <div>panel</div>;
    }
    return null;
  }
  return (
    <div className="Content">
      <ul>
        {content.map((elem, index) => (
          <li key={index}>{renderElems(elem)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
