import React, {useState} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'TAEBAEKfont';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/TAEBAEKfont.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
`

export const ModalContainer = styled.div`
  display: flex;
  z-index: 50;
`;

export const ModalView = styled.div.attrs(props => ({
  role: 'dialog'
}))`
  text-align: center;
  text-decoration: none;
  background-color: white;
  border-radius: 20px;
  width: 180px;
  height: 200px;
  margin: -10px 50px -200px auto;
  padding: 10px;
  background-color: black;
`;

const My_list = styled.div`
  font-size: 23px;
  color: gray;
  padding: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'TAEBAEKfont';
  &:hover{
    color: #ea5028;
  }
`;

//구분선
const My_list_line = styled.div`
  border: 1px solid gray;
  width: 50px;
  margin: 5px auto;
`;

function My_modal() {

  return (
      <ModalContainer>
        <GlobalStyle/>
        <ModalView>
          <My_list>로그아웃</My_list>
          <My_list_line></My_list_line>
          <My_list>회원탈퇴</My_list>
          <My_list_line></My_list_line>
          <My_list><Link to="https://open.kakao.com/o/sJexJjMf">문의하기</Link></My_list>
        </ModalView>
      </ModalContainer>
  );
}

export default My_modal;
