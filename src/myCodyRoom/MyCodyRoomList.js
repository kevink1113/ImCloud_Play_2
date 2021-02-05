import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideBar from '../components/SideBar';

const data = [
	{
		date: '3월3일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 27일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 16일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 25일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 23일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 19일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 18일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 17일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 16일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 11일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 8일',
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 3일',
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
];

const roomProps = {
	match: PropTypes.object,
};

class MyCodyRoomList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: false,
		};
	}

	render() {
		return (
			<MyCodyContainer>
				<SideBar />
				<ListContainer>
					{data.map((value, index) => {
						return (
							<CodyContainerLink
								key={index}
								to={`${this.props.match.url}/${index}`}
								style={{ textDecoration: 'none' }}
							>
								<CodyContainer
									onClick={() => {
										this.setState({ detail: true });
										document.body.style.overflowY = 'scroll';
									}}
									// href={`https://lookylooks/mycody/${index}`}
									key={index}
								>
									<img src={value.img} />
									<p>{value.date}</p>
								</CodyContainer>
							</CodyContainerLink>
						);
					})}
				</ListContainer>
			</MyCodyContainer>
		);
	}
}

MyCodyRoomList.propTypes = roomProps;
export default MyCodyRoomList;
const MyCodyContainer = styled.div`
	display: flex;
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const CodyContainerLink = styled(Link)`
	margin: 20px;
`;

const CodyContainer = styled.div`
	margin: 0;

	border-radius: 7px;
	border-top-left-radius: 7px;
	border-top-right-radius: 7px;
	border-bottom-right-radius: 7px;
	border-bottom-left-radius: 7px;
	// background: yellow;
	transition: transform 0.3s ease;
	box-shadow: 8px 8px 17px #d9d9d9, -8px -8px 17px #ffffff;

	display: flex;
	flex-direction: column;
	img {
		width: 300px;
		height: 375px;
		object-fit: cover;
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
	}
	p {
		padding-left: 20px;
	}
	text-decoration: none;
	color: black;
`;
