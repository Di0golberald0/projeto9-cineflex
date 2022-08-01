import styled from "styled-components";
import Cadeira from "./Cadeira";

export default function Legenda() {
    return (
        <Div>
            <Container>
                <Cadeira selecionado={true}></Cadeira>
                <p>Selecionado</p>
            </Container>
            <Container>
                <Cadeira disponivel={true}></Cadeira>
                <p>Disponível</p>
            </Container>
            <Container>
                <Cadeira disponivel={false}></Cadeira>
                <p>Indisponível</p>
            </Container>
        </Div>
    )
}

const Div = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0px 6px;
  width: 70px;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 70px;
    line-height: 16px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;