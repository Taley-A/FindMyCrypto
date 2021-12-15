import React from "react";
import styled from "styled-components";

const ReviewsBox = ({ review }) => {
	return (
		<>
			<Container>
				<ReviewMessage> •{review.review}</ReviewMessage>
				<Name> •ATM ID: {review.atmId}</Name>
			</Container>
		</>
	);
};

export default ReviewsBox;

const Container = styled.div`
	border: 2px solid #01bf71;
	border-radius: 10px;
	padding: 30px;
`;

const Name = styled.div`
	margin-top: 10px;
	text-decoration: underline;
	font-size: 16px;
	font-family: "Franklin Gothic Medium", sans-serif;
`;

const ReviewMessage = styled.div``;
