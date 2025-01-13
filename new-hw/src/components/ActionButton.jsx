import React from "react";

const ActionButton = ({ label, onAction }) => {
  return (
    <button onClick={onAction}>
      {label}
    </button>
  );
};

export default ActionButton;
