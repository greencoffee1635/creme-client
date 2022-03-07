import React from 'react';
import { Helmet } from 'react-helmet';

// components
import { Button, Text } from '../../common/components';
import kakaoShareList from './kakaoShareList';

const KakaoShare = ({ title, description, imgUrl, link, buttonTitle }) => {
  return (
    <div>
      {/* Include Kakao sdk */}
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script>
          window.Kakao.init(process.env.REACT_APP_KAKAO_SHARE_KEY)
        </script>
      </Helmet>
      <Button
        circle
        foldSize
        size="3.5"
        bg="var(--white)"
        border="0.15rem solid var(--darkcream)"
        is_flex_center
        cursor
        onClick={() =>
          kakaoShareList(title, description, imgUrl, link, buttonTitle)
        }
      >
        <Text type="button" color="#fef01b">
          Kakao
        </Text>
      </Button>
    </div>
  );
};

export default KakaoShare;
