import React, { Component, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { GrUpload } from "react-icons/gr";
import { MdFileUpload } from "react-icons/md";

const ContainerDiv = styled.div`
  position: relative;
  border: none;
`;

const FileButton = styled.input`
  position: absolute;

  margin: 0px 0px;

  opacity: 0;
  border: 1px solid red;

  width 290px;
  height 340px;

  &:hover {
    cursor:pointer;
  }

`;

const IconClick = styled.div`
  margin: 125px 100px;
  width: 90px;
  height: 90px;
  position: absolute;
`;

const ShowUserImage = styled.img`
  position: absolute;
  float: left;
  width 290px;
  height 340px;

`;

class UploadConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      image: null,
      text: "테스트 성공!",
    };
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      //console.log(img);
      //console.log(URL.createObjectURL(img));
      this.setState({
        image: URL.createObjectURL(img),
      });

      //      this.setState({
      //      image: URL.createObjectURL(img),
      //  });
      console.log(this.state.image);
      //
    }

    if (this.state.image === null) {
    } else {
      console.log("001.");
      console.log(this.state.image);
      this.props.phState(this.state.image);
    }
  };

  handleFileInput(e) {
    this.setState({
      selectedFile: e.target.files[0],
    });

    //this.props.phState(this.state.selectedFile);
  }

  handlePost() {
    const formData = new FormData();
    formData.append("/api/upload", this.state.selectedFile);

    return axios
      .post("/api/upload", formData)
      .then((res) => {
        alert("업로드 성공");
        console.log("업로드 성공");
      })
      .catch((err) => {
        //alert("업로드 실패");
        console.log("업로드 실패");
      });
  }

  givePh = (e) => {
    console.log("3");
    this.props.phState(this.state.image);
  };

  render() {
    return (
      <div>
        <ContainerDiv>
          {this.state.image === null ? (
            <div>
              <IconClick>
                <MdFileUpload size={90} />
              </IconClick>
            </div>
          ) : (
            <div>
              <ShowUserImage src={this.state.image} />
            </div>
          )}

          <FileButton
            type="file"
            name=""
            title="사진을 올리세요"
            onChange={
              ((e) => this.handleFileInput(e), (e) => this.onImageChange(e))
            }
          />

          {/*
          <button type="button" name="hello" onClick={this.handlePost()} />
        */}
        </ContainerDiv>
      </div>
    );
  }
}

export default UploadConfirm;
