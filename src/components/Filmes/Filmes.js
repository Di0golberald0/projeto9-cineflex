import Cartazes from "./Cartazes";
import styled from "styled-components";

export default function Filmes() {
  return (
    <>
      <Instrucoes>Selecione o filme</Instrucoes>
      <DivFilmes>
        <Cartazes />
      </DivFilmes>
    </>
  );
}

const Instrucoes = styled.div`
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

const DivFilmes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: space-around;
  justify-content: space-evenly;
`;
