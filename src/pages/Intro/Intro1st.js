import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import { Text, Button } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';

export const Intro1st = (props) => {
  const history = useHistory();
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  return (
    <MainTitleBg>
      <TitleContent>
        <Text color="var(--deepcream)" fontSize="40px">
          우리집 <HighlightText color="var(--cream)">옥자</HighlightText>는{' '}
          <br />
          오늘{' '}
          <span style={{ color: 'var(--lightcream)', fontSize: '40px' }}>
            무슨 감정
          </span>
          을<br />
          느끼고 있을까요?
        </Text>
        <p style={{ fontFamily: 'IBM Plex Sans KR' }}>
          나의 댕댕이가 오늘은 어떤 감정을 느끼고 있는지 궁금하시죠?
          <br />
          혹시, 가까웠던 댕댕이와의 관계가 소홀해지셨나요?
          <br />
          오늘의 마이펫은 현재 댕댕이가
          <br />
          어떤 감정을 가지고 있는지 분석해드립니다.
        </p>
        <Button
          width="80px"
          height="80px"
          bg="var(--lightcream)"
          radius="50%"
          size="20px"
          color="var(--main)"
          margin="20px 0 0 0"
          onClick={() => {
            console.log('넘어감');
            history.push('/main');
          }}
          cursor
        >
          start
        </Button>
      </TitleContent>
      <MainDogImg>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/bgdog1.png`}
          width="400px"
          height="400px"
        />
      </MainDogImg>
    </MainTitleBg>
  );
};

const MainTitleBg = styled.div`
  background-color: var(--main);
  width: 100%;
  height: 550px;
  display: flex;
`;

const TitleContent = styled.div`
  width: 500px;
  height: 100%;
  margin-top: 100px;
  margin-left: 70px;

  p {
    // font-family: normal;
    color: var(--lightcream);
  }
`;

const MainDogImg = styled.div`
  width: 500px;
  height: 100%;
  // background-color: var(--cream);

  img {
    margin-top: 150px;
    margin-left: 20px;
  }
`;
