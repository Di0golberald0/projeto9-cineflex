import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Confirmar() {
  return (
    <>
      <Instructions>Pedido feito com sucesso!</Instructions>
      <Confirm>
        <Container>
          <Strong>Filme e sessão</Strong>
          <Light></Light>
          <Light></Light>
        </Container>
        <Strong>Ingressos</Strong>
        <Light></Light>
        <Light></Light>
        <Container></Container>
        <Container>
          <Strong>Comprador</Strong>
          <Light></Light>
          <Light></Light>
        </Container>
        <Link to={`/`}>
          <Enviar>
            <button>Voltar pra Home</button>
          </Enviar>
        </Link>
      </Confirm>
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
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #247a6b;
`;

const Confirm = styled.div``;

const Container = styled.div``;

const Strong = styled.div`
  font-family: "Roboto";
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #293845;
`;

const Light = styled.div`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #293845;
`;

const Enviar = styled.div`
  margin-top: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 225px;
    height: 42px;
    background-color: #e8833a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`;
