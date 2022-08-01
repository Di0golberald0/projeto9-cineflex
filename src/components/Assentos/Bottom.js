import styled from "styled-components";

export default function Bottom({ info, filme, dia }) {
  return(
    <Div>
      <Cartaz>
        <img src={filme.posterURL} alt="cartaz do filme" />
      </Cartaz>
      <Descricao>
        <p>{filme.title}</p>
        <p>{dia.weekday} - {info.name}</p>
      </Descricao>
    </Div>
  )
}

const Div = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 120px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;

const Cartaz = styled.div`
  width: 64px;
  height: 89px;
  margin: 10px 14px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
  }
`;

const Descricao = styled.div`
  display: flex;
  flex-direction: column;
`;