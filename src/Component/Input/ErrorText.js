import React from "react";

export const ErrorText = (props) => {
  return (
    <div style={{ width: 150 }}>
      <p
        className={props.className}
        style={{
          color: "red",
          marginLeft: 2.5,
          margin: 2,
          fontWeight: 500,
          fontSize: "small",
          wordBreak: "normal",
        }}
      >
        {props.children}
      </p>
    </div>
  );
};
