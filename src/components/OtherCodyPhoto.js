import React, { Component } from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { IoShareOutline } from 'react-icons/io5';

const PhotoContainer = styled.div`
	img {
		width: 400px;
		height: 500px;
		object-fit: cover;
	}
`;

const StyledLikeShare = styled.div`
	display: flex;
	.icon {
		cursor: pointer;
		padding-right: 10px;
	}
`;

class LikeShare extends Component {
	state = {
		like: false,
		bookmark: false,
	};

	render() {
		const { like, bookmark } = this.state;
		return (
			<StyledLikeShare>
				<div>
					{like ? (
						<AiFillHeart
							className="icon"
							size={40}
							color={'#ff4500'}
							onClick={() => {
								this.setState({ like: false });
							}}
						/>
					) : (
						<AiOutlineHeart
							className="icon"
							size={40}
							onClick={() => {
								this.setState({ like: true });
							}}
						/>
					)}
				</div>

				<div>
					{bookmark ? (
						<BsBookmarkFill
							className="icon"
							size={40}
							color={'#ff4500'}
							onClick={() => {
								this.setState({ bookmark: false });
							}}
						/>
					) : (
						<BsBookmark
							className="icon"
							size={40}
							onClick={() => {
								this.setState({ bookmark: true });
							}}
						/>
					)}
				</div>
				<IoShareOutline className="icon" size={40} />
			</StyledLikeShare>
		);
	}
}

class OtherCodyPhoto extends Component {
	render() {
		return (
			<PhotoContainer>
				<img src="./1.jpg" />
				<LikeShare />
			</PhotoContainer>
		);
	}
}

const CalendarContain = styled.div``;

export default OtherCodyPhoto;
