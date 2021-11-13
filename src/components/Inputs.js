import InputField from "./InputField";
import Button from "./Button";
import "./Inputs.css";

const Inputs = ({
  path,
  newValue,
  changePath,
  changeNewValue,
  updateContent,
}) => {
  return (
    <div className="inputsContainer">
      <InputField label="Путь" value={path} onChange={changePath} />
      <InputField
        label="Новое значение"
        value={newValue}
        onChange={changeNewValue}
      />
      <Button
        caption="Применить"
        onClick={() => {
          updateContent(path, newValue);
        }}
      />
    </div>
  );
};

export default Inputs;
