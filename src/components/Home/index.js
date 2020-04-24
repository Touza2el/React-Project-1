import React from "react";
import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  Span,
  HomeBtn,
} from "./style.js";

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Hassan Touza2el</HomeTitle>
          <HomeInfo>Mobile Developer</HomeInfo>
          <HomeDesc>
            Iam a professional <Span>React Developer</Span> and Front-End
            Developer creating modern and resposive designs to Web and Mobile.
            Let us work together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
};

export default Home;
