import Inputs from "./Inputs";
import { connect } from "react-redux";

const mapStateToProps = state => state.inputs;

const mapDispatchToProps = dispatch => ({
  changePath: e =>
    dispatch({ type: "SET_PATH", payload: e.target.value }),
  changeNewValue: e =>
    dispatch({ type: "SET_NEW_VALUE", payload: e.target.value }),
  updateContent: (path, newValue) =>
    dispatch({ type: "UPDATE_CONTENT", payload: { path, newValue } }),
});

const InputsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inputs);
export default InputsConnected;
