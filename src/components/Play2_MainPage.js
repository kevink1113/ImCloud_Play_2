import React, { Component } from 'react';
import styled from 'styled-components';
import UploadPhoto from '../upload/UploadPhoto';
import Attend from '../Attend';

import MyCodyRoom from '../MyCodyRoom';
import OtherCodyDetail from '../OtherCodyDetail';
import MyCodyRoomList from '../MyCodyRoomList';

const obj = {
	//각 메뉴별 표시할 컨텐츠
	1: <UploadPhoto />,
	2: <MyCodyRoom />,
	3: <OtherCodyDetail isOther />,
	4: <Attend />,
};

const MenuContainer = styled.div`
	display: flex;
	margin: 1px 1px;
`;

const MenuButton = styled.a`
	background-color: rgb(240, 240, 240);
	border-radius: 7px;
	padding: 17px 0px;
	margin: 20px 0px;
	border: 1px solid rgb(200, 200, 200);
	flex-grow: 1;
	text-align: center;
	border-bottom-right-radius: 0px;
	border-bottom-left-radius: 0px;

	color: black;
	text-decoration: none;

	cursor: pointer;

	transition: all 0.3s;
	&:hover {
		background-color: white;
		border: 1px solid rgb(180, 180, 180);
		border-bottom: 1px solid rgb(1000, 1000, 1000);
	}

	&:focus {
		outline: none;
	}

	&.selected {
		background-color: rgb(1000, 1000, 1000);
		border: 1px solid rgb(200, 200, 200);
		border-bottom: 1px solid rgb(1000, 1000, 1000);
	}
`;

class Play2_MainPage extends Component {
	state = {
		//현재 표시되는 창 id, 1부터 시작
		activeTab: this.props.startNumber,

		//탭 정보, 배열 인덱스에 따라 0부터 시작
		//탭이 true이면 선택된 상태, false면 선택 안됨
		//tabInfo: [true, false, false, false],
		tabInfo: [this.props.tab1, this.props.tab2, this.props.tab3, this.props.tab4],
	};

	render() {
		return (
			<div>
				<div>
					<MenuContainer>
						{
							//1번 메뉴
						}
						{this.state.tabInfo[0] ? (
							<MenuButton href="/" className="selected">
								업로드
							</MenuButton>
						) : (
							<MenuButton href="/">업로드</MenuButton>
						)}

						{
							//2번 메뉴
						}
						{this.state.tabInfo[1] ? (
							<MenuButton href="/my" className="selected">
								내 코디 룸
							</MenuButton>
						) : (
							<MenuButton href="/my">내 코디 룸</MenuButton>
						)}

						{
							//3번 메뉴
						}
						{this.state.tabInfo[2] ? (
							<MenuButton href="/others" className="selected">
								다른 코디 보기
							</MenuButton>
						) : (
							<MenuButton href="/others">다른 코디 보기</MenuButton>
						)}

						{
							//4번 메뉴
						}
						{this.state.tabInfo[3] ? (
							<MenuButton href="/attend" className="selected">
								출석
							</MenuButton>
						) : (
							<MenuButton href="/attend">출석</MenuButton>
						)}
					</MenuContainer>
				</div>

				{
					//컨텐츠 내용 표시
				}
			</div>
		);
	}
}

export default Play2_MainPage;
