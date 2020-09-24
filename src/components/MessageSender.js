import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { images } from "./images/image";
export default function MessageSender(props) {
  //change object input into array
  const messageArray = Object.values(props);

  const [messages, setmessages] = useState(messageArray);

  //give <li> structure to each message
  let messageList;

  useEffect(() => {}, []);
  messageList = messageArray.map((message) => (
    <MessageRow>
      {/* if user is true */}
      {message.user && (
        <>
          <img src={images.EUNKO} />
          <MessageContent>{message.content}</MessageContent>
        </>
      )}
      {/* if user is false */}
      {!message.user && (
        <MessageAlignedRight>
          {/* make message position right  */}
          <MessageContent>{message.content}</MessageContent>
          <img src={images.COOL} />
        </MessageAlignedRight>
      )}
    </MessageRow>
  ));
  return <>{messageList}</>;
}
const Wrapper = styled.div``;

const MessageRow = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  position: relative;
  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
  }
`;
// make message position right
const MessageAlignedRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MessageContent = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  list-style: none;

  height: 60px;
  display: flex;
  background-color: white;

  height: 50px;
  align-items: center;
  margin: 10px;
`;

/*
어려웠던점.. 
오른쪽 끝에 배치하기. -> position: absolute를 활용하려고 했더니 text끼리 겹침 현상 발생.
absolute를 통한 배치는 지양하는게 좋다?

map함수 사용하기 위해 object를 array로 바꾸기.

*/
