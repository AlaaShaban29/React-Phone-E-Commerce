import React from "react";
import { TextContainer, TextInfo } from "./TitleElement";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <TextContainer className="col-10 mx-auto my-2 text-center ">
        <h1 className="text-capitalize font-weight-bold">
          {name} <TextInfo className="text-blue">{title}</TextInfo>
        </h1>
      </TextContainer>
    </div>
  );
}
