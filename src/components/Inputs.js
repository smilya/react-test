import InputField from "./InputField";
import Button from "./Button";
import "./Inputs.css";
import { connect } from "react-redux";

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

const mapStateToProps = state => state.inputs;
const mapDispatchToProps = dispatch => ({
  changePath: e =>
    dispatch({ type: "SET_PATH", payload: e.target.value }),
  changeNewValue: e =>
    dispatch({ type: "SET_NEW_VALUE", payload: e.target.value }),
  updateContent: (path, newValue) =>
    dispatch({ type: "UPDATE_CONTENT", payload: { path, newValue } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
