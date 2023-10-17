import styled from "styled-components";
import {useState} from 'react';
import axios from 'axios';

const ItemCreateContainer = styled.div`
  padding: 1px 5px;
`;

const ItemInputContainer = styled.div`
  border: 3px solid #FF541E;
  box-shadow: rgba(245, 105, 60, 0.18) 0px 0px 15px;
  border-radius: 12px;
  background-color: white;
`;

const ItemInputBox = styled.input`
  width: 895px;
  height: 70px;
  font-size: 19px;
  padding: 2px 20px;
  border: none;
  border-radius: 12px;
  outline: none;
`;

const ItemAddBtn_box = styled.span`
  margin-left: 15px;
`;

const ItemAddBtn = styled.button`
  font-size: 20px;
  margin: auto 10px auto 20px;
  color: #FF541E;
  background-color: white;
  border: none;
  font-weight: 700;
`;
  
export default function InputBox() {
    const [inputValue, setInputValue] = useState("");

    function onClickChat(){
        axios({
            url: '/chat-gpt/question',
            method: 'POST',
            data: {
                question: inputValue
            }
        }).then(function (response) {
                console.log(inputValue);
            });
        console.log(inputValue);
    }

    return (
      <ItemCreateContainer>
          <ItemInputContainer >
            <ItemInputBox
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInputValue(e.target.value); }}
              type="text"
              placeholder="짐 도우미(GPT)에게 질문해보세요!"
            />
            <ItemAddBtn_box>
              <ItemAddBtn onClick={onClickChat}>전송</ItemAddBtn>
            </ItemAddBtn_box>
          </ItemInputContainer>
      </ItemCreateContainer>
    );
  }