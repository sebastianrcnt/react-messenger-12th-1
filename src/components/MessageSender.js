import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function MessageSender(props) {
	
	const [message, setMessage] = useState('');
	
	const inputTagStyle = {
		width: '90%',
		height: '60%',
		display: 'inline-flex',		// inline으로해야 input과 button이 같은 선상에 있다.

		margin: '10px',
		borderRadius: '10%',
		borderColor: 'grey',
		background: 'rgba(255, 255, 255, 0.3)'
	};

	const inputButtonTagStyle = {
		display: 'inline-flex',
		height: '45px',
		width: '60px',
		borderRadius: '35%',
		backgroundColor: '#FFE066',

		textAlign: 'center',
		justifyContent: 'center'
	}

	const formSubmit = e => {
		e.preventDefault();
		props.onSubmit(message);
		document.querySelector('#messageBox').value = '';
		setMessage('');		// 메시지 한번 전송 후, 메시지state를 초기화 해야함.
	}

	const onChangeMessage = e => {
		setMessage(e.target.value)
	}

	return (
	<Wrapper>
		{/* <form onSubmit={formSubmit}> */}
		<SubmitToChattingScreenWrapper onSubmit={formSubmit}>
			<input type="text" id="messageBox" style={inputTagStyle} onChange={onChangeMessage} />
			{/* <inputMessage type="text" onChange={onChangeMessage}></inputMessage> */}
			<input type="submit" style={inputButtonTagStyle} value="전송" />
		</SubmitToChattingScreenWrapper>
		{/* </form> */}
	</Wrapper>
	);
}
const Wrapper = styled.footer`
	height: 70px;
	left: 0px;
	bottom: 0px;
	width: 100vw;
	${'' /* display: flex; */}
	position: fixed;
	
	background-color: white;
	background: rgba(255, 255, 255, 0.8);
	color: black;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

	display: flex;
	${'' /* flex-grow: 1; */}
`;

const SubmitToChattingScreenWrapper = styled.form`
	width: 100%;
`;

// const inputMessage = styled.input`
// 	height: 100%;
// 	width: 100%;
// `;
// 인풋을 styled component로 바꾸지는 못한다.. ?
