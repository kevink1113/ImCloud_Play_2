import React, { Component } from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';
import { IoShareOutline } from 'react-icons/io5';
import Button from './Button';

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
		padding-left: 10px;
		padding-right: 10px;
		z-index: 99999999;
	}
	#heart {
		padding-left: 0px;
		padding-right: 5px;
	}
`;

const Likes = styled.div`
	display: flex;
	align-items: center;
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
						<Likes>
							<AiFillHeart
								id="heart"
								className="icon"
								size={40}
								color={'#ff4500'}
								onClick={() => {
									this.setState({ like: false });
								}}
							/>
							{this.props.likes + 1}
						</Likes>
					) : (
						<Likes>
							<AiOutlineHeart
								id="heart"
								className="icon"
								size={40}
								onClick={() => {
									this.setState({ like: true });
								}}
							/>
							{this.props.likes}
						</Likes>
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

class CodyPhoto extends Component {
	render() {
		return (
			<PhotoContainer>
				<img src="../1.jpg" />
				{this.props.showLikeShare === true ? <LikeShare likes={this.props.likes} /> : ''}
			</PhotoContainer>
		);
	}
}

export default CodyPhoto;
