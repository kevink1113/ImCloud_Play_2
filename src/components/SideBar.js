import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; //React-Router import

const StyledSideBar = styled.ul`
	min-width: 170px;
	li {
		line-height: 2;
	}
	border-right: 1px solid gray;
`;

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`;

const SideBar = () => {
	return (
		<StyledSideBar>
			<li>
				<StyledLink to="/my">내 코디</StyledLink>
			</li>
			<ul>
				<li>
					<StyledLink to="/my">전체 코디</StyledLink>
				</li>
				<li>
					<StyledLink to="/my?shared">공유한 코디</StyledLink>
				</li>
			</ul>
			<li>
				<StyledLink to="/my?others">다른 코디</StyledLink>
			</li>
			<ul>
				<li>
					<StyledLink to="/my?others?like">좋아요한 코디</StyledLink>
				</li>
				<li>
					<StyledLink to="/follow">팔로잉</StyledLink>
				</li>
			</ul>
		</StyledSideBar>
	);
};

export default SideBar;
