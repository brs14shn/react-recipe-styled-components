import React from "react";

import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  OtherPart,
} from "./Detail.style";
import dietSvg from "../../assets/diet.svg";

const detail = () => {
  const { state } = useLocation;

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart wrap="wrap">
        <OtherPart>
          <h1>NUTRİENTS</h1>
        </OtherPart>
      </DetailPart>
    </DetailContainer>
  );
};

export default detail;
