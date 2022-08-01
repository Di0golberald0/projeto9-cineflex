import styled from "styled-components";
import Informacao from "./Informacao";

export default function Confirmar({ resultado }) {
  return (
    <>
      <Instructions>Pedido feito com sucesso!</Instructions>
      <Informacao resultado={resultado} />
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
