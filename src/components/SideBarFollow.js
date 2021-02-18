import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; //React-Router import
import { AiOutlineCloseCircle } from 'react-icons/ai';

const follower = [
	{
		name: '강상원',
	},
	{
		name: '이희준',
	},
];

const SideBar = () => {
	return (
		<StyledSideBar>
			<li>
				<StyledLink to="/follow">팔로잉 목록</StyledLink>
			</li>
			<ul>
				{follower.map((value, index) => {
					return (
						<li key={index}>
							<Name>
								<StyledLink to={`/follow?${index}`} className="name">
									{value.name}
								</StyledLink>
								<a>
									<XIcon size={18} color="#ff4500" />
								</a>
							</Name>
						</li>
					);
				})}
			</ul>
		</StyledSideBar>
	);
};

export default SideBar;

const StyledSideBar = styled.ul`
	position: fixed;
	bottom: 0px;
	min-width: 170px;
	li {
		line-height: 2;
	}
	border-right: 1px solid gray;

	padding-top: 10px;
	border-top: 1px solid gray;
`;

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
`;

const XIcon = styled(AiOutlineCloseCircle)`
	opacity: 0;
	visibility: hidden;
	transition: all 0.4s ease;
	padding-top: 12px;
`;

const Name = styled.div`
	display: flex;
	align-items: center;

	&:hover {
		${XIcon} {
			opacity: 1;
			visibility: visible;
			padding-left: 7px;
		}
	}
`;
