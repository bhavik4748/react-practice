import React from "react";
import classes from './Button.module.css';
const button = props => {
  let classStyle = null;
  switch (props.type) {
    case "save":
      classStyle = classes.send_edit;
      break;
    case "cancel":
      classStyle = classes.disable_edit;
      break;
  }
  return (
    <button
      type="button"
      className={classStyle}
      disabled={props.disabled}
      onClick={props.clicked}
    >
      {" "}
      {props.children}{" "}
    </button>
  );
};

export default button;
