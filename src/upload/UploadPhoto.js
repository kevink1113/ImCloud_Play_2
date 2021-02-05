import styled from 'styled-components';
import React, { Component } from 'react';
import axios from 'axios';
import { MdFileUpload } from 'react-icons/md';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import Play2_MainPage from '../components/Play2_MainPage';
import Button from '../components/Button';
import { darken } from 'polished';

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
				selectedFile: event.target.files[0],
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

	handlePost = () => {
		// console.log();
		const formData = new FormData();
		// console.log(formData);
		formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
		// console.log(this.state.selectedFile);
		// console.log('handlepost is working');
		axios.post('gs://react-image-upload-test-81e0f.appspot.com', formData).then((res) => {
			console.log(res);
		});
	};

	onLoading = () => {
		setTimeout(
			function () {
				console.log('work!');
				this.setState({
					loading: 'none',
					final: 'inline',
				});
			}.bind(this),
			3000,
		);
	};

	refresh = (e) => {
		console.log('REFRESH!!!', e);
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
											onChange={(e) => this.onImageChange(e)}
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
								console.log('image null !', e);
							} else {
								console.log(this.state.image);
								console.log(this.state.selectedFile);
								this.setState({
									visible: 'none',
									loading: 'inline',
								});
								this.onLoading();
								this.handlePost();
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
						<Button link="/my" size="large" label="보러 가기" />
						<Refresh onClick={this.refresh}>한번 더 업로드</Refresh>
					</DivContainer>
				</div>
			</div>
		);
	}
}

export default UploadPhoto;

const UploadContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
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
	justify-content: space-around;
	text-align: center;
	height: 70vh;
	align-items: center;
`;

const AfTitle = styled.h1`
	text-align: center;
	height: 30vh;
`;

const Refresh = styled(Link)`
	cursor: pointer;
	display: inline-block;
	background-color: rgb(100, 100, 100);
	border: none;
	border-radius: 2px;
	line-height: 1;
	color: white;
	transition: color 0.2s, background-color 0.2s;

	padding: 0.8rem 1.5rem;
	font-size: 1.2rem;

	&:hover {
		background-color: ${darken(0.1, 'rgb(100, 100, 100)')};
	}

	text-decoration: none;
`;
