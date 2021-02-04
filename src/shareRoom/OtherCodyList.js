import React, { Component, useState } from 'react';
import styled from 'styled-components';
import OtherCodyPhoto from '../components/CodyPhoto';
import Statistics from '../components/Statistics';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { IoShareOutline } from 'react-icons/io5';

import LikeShare from '../components/LikeShare';

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

	&:hover {
		transform: scale(1.02);
	}
	text-decoration: none;
	color: black;
`;

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
		const { like, bookmark } = this.state;
		return (
			<ListContainer>
				{data.map((value, index) => {
					return (
						<div>
							<CodyContainer
								onClick={() => {
									this.setState({ detail: true });
									document.body.style.overflowY = 'scroll';
								}}
								// href={`https://lookylooks/mycody/${index}`}
								key={index}
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
		);
	}
}

export default OtherCodyList;
