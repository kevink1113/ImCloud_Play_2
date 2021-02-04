import { render } from "@testing-library/react";
import React, { Component } from "react";
import styled from "styled-components";

const LoadingContain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
`;

const LoadingDesc = styled.div`
  margin: 50px auto;
`;

function Loading() {
  return (
    <LoadingContain>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
      <LoadingDesc>LOADING! PLEASE WAIT! </LoadingDesc>
      <a href="/">로딩이 안되시나요?</a>
    </LoadingContain>
  );
}

export default Loading;
