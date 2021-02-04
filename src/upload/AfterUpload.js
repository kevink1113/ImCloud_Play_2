import styled from "styled-components";
import React, { Component, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  text-align: center;
`;

const AfTitle = styled.h1`
  padding-top: 70px;
  padding-bottom: 130px;
  text-align: center;
`;

const LinkButton = styled.div`
  text-align: center;
  color:white;
  background-color:rgb(160,160,160);
  margin: 25px auto;
  width:200px;
  height 50px;
  border-radius:4px;

  transition: all 0.3s;
  &:hover {
    background-color: rgb(207, 207, 207);
    color:rgb(20,20,20);
    cursor:pointer
  }
  
`;

class AfterLoading extends Component {
  refreshPage = (e) => {
    this.props.ref();
  };

  render() {
    return (
      <DivContainer>
        <AfTitle>분석 완료</AfTitle>

        <Link to="/2" style={{ textDecoration: "none" }}>
          <LinkButton>보러 가기</LinkButton>
        </Link>

        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={(e) => this.refreshPage(e)}
        >
          <LinkButton>한번 더 업로드</LinkButton>
        </Link>
      </DivContainer>
    );
  }
}

export default AfterLoading;
