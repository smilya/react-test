import Content from "./Content";
import { connect } from "react-redux";

const mapStateToProps = state => state;

const ContentConnected = connect(mapStateToProps)(Content);

export default ContentConnected;
