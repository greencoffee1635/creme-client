import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AnimatedKeyword } from '../../common/components/AnimatedKeyword';
import { MyPetKeywordsData } from '../../common/components/MyPetKeywordsData';

// components
import {
  Container,
  Header,
  Navbar,
  Text,
  Button,
} from '../../common/components';
import { Keywords } from '../../common/components/Keyword';
import { MyPetData } from './MyPetData';
import InputBox from '../../common/components/InputBox';

const AddPetPage = (props) => {
  const history = useHistory();
  const [myPetData, setMyPetData] = useState(MyPetData);
  const [inputData, setInputData] = useState({
    age: '',
    name: '',
  });

  const onChangeData = (name, value) => {
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const [files, setFiles] = useState([]);

  const [clickedKeywords, setClickedKeywords] = useState([]);

  return (
    <Container>
      <Header />
      <Navbar />
      <Text type="mainTitle" color="var(--main)" padding-top="30px">
        마이펫 추가하기
      </Text>

      <AddPetSection>
        <InfoWrapper>
          <p>MyPet</p>
          <InputBox
            data={inputData}
            files={files}
            onChangeData={onChangeData}
            onChangeFile={setFiles}
          />
        </InfoWrapper>
        <KeywordsSection>
          <p>Keywords</p>
          <KeywordWrapper>
            <AnimatedKeyword
              keywordsData={MyPetKeywordsData}
              questionTitle="나의 댕댕이의 성격은?"
              clickedKeywords={clickedKeywords}
              onChangeClickedKeywords={setClickedKeywords}
            />
          </KeywordWrapper>
        </KeywordsSection>
      </AddPetSection>

      <ButtonWrapper>
        <Button
          width="80px"
          height="80px"
          bg="var(--main)"
          radius="50%"
          size="20px"
          color="var(--white)"
          cursor
          onClick={() => {
            console.log('완료');
            history.push('/mypet');
          }}
        >
          완료
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const AddPetSection = styled.div`
  background-color: var(--bggray);
  border: solid 1px var(--cream);
  border-radius: 15px;
  margin-top: 20px;

  height: 1000px;

  p {
    font-size: 20px;
    color: var(--main);
    margin-top: 30px;
  }
`;

const InfoWrapper = styled.div`
  width: 90%;
  margin-left: 40px;
`;

const KeywordsSection = styled.div`
  width: 90%;
  margin-top: 30px;
  margin-left: 40px;
`;

const KeywordWrapper = styled.div`
  margin-top: 30px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default AddPetPage;
