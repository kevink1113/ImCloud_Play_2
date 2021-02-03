import styled from 'styled-components';
import React, { Component } from 'react';
import Play2_MainPage from '../components/Play2_MainPage';

const UploadContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 30px 0px;
`;

const UploadTitle = styled.h1`
	padding-top: 40px;
	padding-bottom: 65px;
	text-align: center;
`;

const UserPhotoUpload = styled.div`
margin:0px 3%;
  width 290px;
  height 340px;
  background-color: rgb(202,202,202);
`;

const UploadButton = styled.button`
  color:rgb(250,250,250);
  position:absolute; 
  top:auto; left:50%;
  margin-top:80px;
  margin-left:-100px; 
  width:200px;
  height 50px;
  background-color: rgb(100, 100, 100);
  border:none;
  border-radius:6px;

  transition: all 0.3s;
  &:hover {
    background-color: rgb(207, 207, 207);
    color:rgb(20,20,20);
  }

  &:focus {
    outline:none;

  }

`;

const UploadDesc = styled.div`
  margin:0px 6%;
  width:300px;
  height 300px;
`;

function UploadPhoto(props) {
	return (
		<div>
			<Play2_MainPage startNumber="1" tab1={true} tab2={false} tab3={false} tab4={false} />
			<UploadTitle>사진을 업로드 하세요</UploadTitle>
			<UploadContainer>
				<UserPhotoUpload></UserPhotoUpload>
				<UploadDesc>
					Известен факт е, че читателя обръща внимание на съдържанието, което чете, а не на
					оформлението му. Свойството на Lorem Ipsum е, че до голяма степен има нормално
					разпределение на буквите и се чете по-лесно, заете, а не на оформлението му. Свойството на
					Lorem Ipsum е, че до читателя обръща внимание на съдържанието, което чете, а не на офор
				</UploadDesc>
			</UploadContainer>
			<UploadButton>분석하기</UploadButton>
		</div>
	);
}

export default UploadPhoto;
