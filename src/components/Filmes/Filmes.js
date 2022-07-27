import Cartazes from "./Cartazes";
import styled from "styled-components";

export default function Filmes() {
  return (
    <>
      <Instructions>Selecione o filme</Instructions>
      <Movies>
        <Cartazes />
      </Movies>
    </>
  );
}

const Instructions = styled.div`
  margin-top: 70px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #293845;
`;

const Movies = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
  justify-content: space-evenly;
`;
