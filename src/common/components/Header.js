import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../../common/redux/modules/user';

// components
import { Logo, Modal, Text, Image, Grid, Button } from './';
import { KAKAO_AUTH_URL } from '../utils/OAuth';
import { getCookie } from '../utils/Cookie';

const Header = (props) => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  // const [is_login, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  // 로컬 이미지
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  return (
    <>
      <Container>
        <InsideBox>
          <LeftSide>
            <LogoBox onClick={() => history.push('/')}>
              <Logo />
            </LogoBox>
          </LeftSide>
          <RightSide>
            {!is_login && props ? (
              <>
                {props.page === 'headermenu' ? (
                  <LoginButton
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    <Text
                      whiteSpace="nowrap"
                      type="button"
                      color="var(--white)"
                    >
                      로그인
                    </Text>
                  </LoginButton>
                ) : null}
              </>
            ) : (
              <>
                {props.page === 'headermenu' ? (
                  <LoginButton>
                    <Text whiteSpace="nowrap" type="button" color="var(--main)">
                      {/* {user_nickname} */}
                      댕댕님
                    </Text>
                  </LoginButton>
                ) : null}
              </>
            )}
          </RightSide>
        </InsideBox>
      </Container>
      {modalOpen && (
        <Modal width="31rem" height="31rem" setOpenModal={setModalOpen}>
          <Grid display="flex" justifyContent="center" margin="1rem 0 3rem 0">
            <img
              alt=""
              src={process.env.PUBLIC_URL + `/Image/bgdog1.png`}
              width="300px"
              height="300px"
            />
          </Grid>

          <Wrapper>
            <Button
              width="25rem"
              padding="0.5rem"
              bg="#FEE500"
              color="var(--white)"
              radius="5px"
              cursor
              onClick={() => {
                window.location.href = KAKAO_AUTH_URL;
              }}
            >
              <Text type="button">카카오톡으로 시작하기</Text>
            </Button>
          </Wrapper>
        </Modal>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0rem;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 10rem;
  // background-color: transparent;
  background-color: var(--white);
`;

const InsideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LeftSide = styled.section`
  flex-shrink: 0;
`;

const LogoBox = styled.div`
  cursor: pointer;
`;

const RightSide = styled.section``;

const LoginButton = styled.button`
  border-radius: 23px;
  display: flex;
  align-items: center;
  // background-color: transparent;
  background-color: var(--main);
  width: 4rem;
  cursor: pointer;
  border: none;
  margin-bottom: -0.8rem;
  ${({ theme }) => theme.device.mobile} {
    margin-left: 1.7rem;
  }
  ${({ theme }) => theme.device.fold} {
    margin-left: 0.8rem;
  }
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.device.mobile} {
    display: flex;
    justify-content: center;
  }
`;

export default Header;
