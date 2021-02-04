import styled from 'styled-components';
import React, { Component, useState } from 'react';
import axios from 'axios';
import { MdFileUpload } from 'react-icons/md';
import Loading from './Loading';
import { Link } from 'react-router-dom';
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

  transition: all 0.2s;

  &:hover {
    background-color: rgb(222,222,222);
  }
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
  border-radius:4px;

  transition: all 0.3s;
  &:hover {
    background-color: rgb(207, 207, 207);
    color:rgb(20,20,20);
    cursor:pointer
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

const UploadClick = styled.div`
	margin: 0px 0px;
	color: rgb(90, 90, 90);
	border: none;

	transition: all 0.2s;

	&:hover {
		color: rgb(10, 10, 10);
	}
`;

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

class UploadPhoto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isUploaded: null,
			selectedFile: null,
			image: null,
			text: '테스트 성공!',
			visible: 'inline',
			loading: 'none',
			final: 'none',
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
			//console.log(this.state.image);
			//
		}
	};

	handleFileInput(e) {
		this.setState({
			selectedFile: e.target.files[0],
		});
	}

	handlePost() {
		const formData = new FormData();
		formData.append('/api/upload', this.state.selectedFile);

		return axios
			.post('/api/upload', formData)
			.then((res) => {
				alert('업로드 성공');
				console.log('업로드 성공');
			})
			.catch((err) => {
				//alert("업로드 실패");
				console.log('업로드 실패');
			});
	}

	onLoading = () => {
		setTimeout(
			function () {
				console.log('work!');
				this.setState({
					loading: 'none',
					final: 'inline',
				});
			}.bind(this),
			3500,
		);
	};

	refresh = (e) => {
		this.setState({
			isUploaded: null,
			selectedFile: null,
			image: null,
			text: '테스트 성공!',
			visible: 'inline',
			loading: 'none',
			final: 'none',
		});
	};

	render() {
		return (
			<div>
				<Play2_MainPage startNumber="1" tab1={true} tab2={false} tab3={false} tab4={false} />
				<div style={{ display: this.state.visible }}>
					<UploadTitle>사진을 업로드 하세요</UploadTitle>
					<UploadContainer>
						<UserPhotoUpload>
							<UploadClick>
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
											onChange={((e) => this.handleFileInput(e), (e) => this.onImageChange(e))}
										/>
									</ContainerDiv>
								</div>
							</UploadClick>
						</UserPhotoUpload>
						<UploadDesc>
							Известен факт е, че читателя обръща вниото мание на съдържанието, което чете, а не на
							ормлеофнието му. Свойсвт на Lorem Ipsum е, че до голяма степен има норм алържанино
							разпределение на буквите и се чете по-лесно, заете, а не на оормлението му. Свойството
							на Lorem Ipsum е, че до читателя обръща внимание на съдето, което чете, а не на офор.
							ание епен има норм ие на съдъ уквит.
						</UploadDesc>
					</UploadContainer>
					<UploadButton
						onClick={function (e) {
							if (this.state.image === null) {
								alert('사진을 선택해 주세요');
								console.log('image null !');
							} else {
								console.log(this.state.image);
								this.setState({
									visible: 'none',
									loading: 'inline',
								});
								this.onLoading();
							}
						}.bind(this)}
					>
						분석하기
					</UploadButton>
				</div>
				<div style={{ display: this.state.loading }}>
					<Loading />
				</div>
				<div style={{ display: this.state.final }}>
					<DivContainer>
						<AfTitle>분석 완료</AfTitle>

						<Link to="/2" style={{ textDecoration: 'none' }}>
							<LinkButton>보러 가기</LinkButton>
						</Link>

						<Link to="/" style={{ textDecoration: 'none' }} onClick={this.refresh}>
							<LinkButton>한번 더 업로드</LinkButton>
						</Link>
					</DivContainer>
				</div>
			</div>
		);
	}
}

export default UploadPhoto;
