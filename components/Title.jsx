import React from "react";

export default function Title(props) {
  return props.small ? (
    <React.Fragment>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </React.Fragment>
  );
}
