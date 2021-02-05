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

const SideBarOther = () => {
	return (
		<StyledSideBar>
			<li>
				<StyledLink to="/others">추천 항목</StyledLink>
			</li>

			<li>
				<StyledLink to="/others?byLike">좋아요순</StyledLink>
			</li>

			<li>
				<StyledLink to="/others?byRecent">최신순</StyledLink>
			</li>
		</StyledSideBar>
	);
};

export default SideBarOther;
