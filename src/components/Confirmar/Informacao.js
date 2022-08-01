import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Informacao({ resultado }) {
    const ingressos = resultado.assentos
    return(
        <Confirm>
            <Container>
                <Strong>Filme e sessão</Strong>
                <Light>${resultado.filme}</Light>
                <Light>${resultado.dia} ${resultado.sessao}</Light>
            </Container>
            <Container>
                <Strong>Ingressos</Strong>
                {ingressos.map((item, index) => (
                     <Light key={index}>Assento ${item}</Light>
                ))}
            </Container>
            <Container>
                <Strong>Comprador</Strong>
                <Light>Nome: ${resultado.nome}</Light>
                <Light>CPF: ${resultado.cpf}</Light>
            </Container>
            <Link to={`/`}>
                <Enviar>
                    <button>Voltar pra Home</button>
                </Enviar>
            </Link>
        </Confirm>
    )
}

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