import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LikeShare from '../components/LikeShare';
import SideBarOther from '../components/SideBarOther';

let data = [
	{
		date: '3월 17일',
		likes: 30,
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 24일',
		likes: 30,
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 23일',
		likes: 30,
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 18일',
		likes: 30,
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 17일',
		likes: 15,
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 16일',
		likes: 12,
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 13일',
		likes: 18,
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 12일',
		likes: 30,
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 11일',
		likes: 30,
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 9일',
		likes: 21,
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 7일',
		likes: 30,
		img:
			'https://images.unsplash.com/photo-1573649027689-060a6275c33a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
	},
	{
		date: '2월 3일',
		likes: 42,
		img:
			'https://images.unsplash.com/photo-1610902188765-fcdeff499d75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
	},
];

const roomProps = {
	match: PropTypes.object,
};

class OtherCodyList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: false,
			like: false,
			bookmark: false,
		};
	}

	render() {
		return (
			<MyCodyContainer>
				<SideBarOther />
				<ListContainer>
					{data.map((value, index) => {
						return (
							<div key={index}>
								<CodyContainer
									onClick={() => {
										this.setState({ detail: true });
										document.body.style.overflowY = 'scroll';
									}}
									// href={`https://lookylooks/mycody/${index}`}
								>
									<Link
										to={`${this.props.match.url}/${index}`}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<img src={value.img} />
										<p>OTHER {value.date}</p>
									</Link>

									<LikeShare index={index} data={data} />
								</CodyContainer>
							</div>
						);
					})}
				</ListContainer>
			</MyCodyContainer>
		);
	}
}

OtherCodyList.propTypes = roomProps;

export default OtherCodyList;

const MyCodyContainer = styled.div`
	display: flex;
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const CodyContainer = styled.a`
	margin: 20px;
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
