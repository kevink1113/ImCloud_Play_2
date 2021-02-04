import React, { Component, useState } from 'react';
import styled from 'styled-components';
import OtherCodyPhoto from '../components/CodyPhoto';
import Statistics from '../components/Statistics';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { IoShareOutline } from 'react-icons/io5';

const StyledLikeShare = styled.div`
	display: flex;
	.icon {
		cursor: pointer;
		padding: 10px;
		padding-left: 20px;
	}
`;

const Likes = styled.div`
	display: flex;
	align-items: center;
`;

class LikeShare extends Component {
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
			<StyledLikeShare>
				<div>
					{like ? (
						<Likes>
							<AiFillHeart
								className="icon"
								size={30}
								color={'#ff4500'}
								onClick={() => {
									this.setState({ like: false });
								}}
							/>
							{this.props.data[this.props.index].likes + 1}
						</Likes>
					) : (
						<Likes>
							<AiOutlineHeart
								className="icon"
								size={30}
								onClick={() => {
									this.setState({ like: true });
								}}
							/>
							{this.props.data[this.props.index].likes}
						</Likes>
					)}
				</div>

				<div>
					{bookmark ? (
						<BsBookmarkFill
							className="icon"
							size={30}
							color={'#ff4500'}
							onClick={() => {
								this.setState({ bookmark: false });
							}}
						/>
					) : (
						<BsBookmark
							className="icon"
							size={30}
							onClick={() => {
								this.setState({ bookmark: true });
							}}
						/>
					)}
				</div>
				<IoShareOutline className="icon" size={30} />
			</StyledLikeShare>
		);
	}
}

export default LikeShare;
