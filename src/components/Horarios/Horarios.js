import Sessoes from "./Sessoes";
import styled from "styled-components";

export default function Horarios() {
  return (
    <>
      <Instrucoes>Selecione o horário</Instrucoes>
      <Sessoes />
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
