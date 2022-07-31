import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Showtimes from "./Showtimes";

export default function Sessao() {
  const { idFilme } = useParams();
  const [sessoes, setSessoes] = useState([]);
  const [dias, setDias] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
    );

    requisicao.then((resposta) => {
      setSessoes(resposta.data);
      setDias(resposta.data.days);
    });

    requisicao.catch(console.log("Falha ao carregar lista de horários, tentando novamente"));
  }, []);

  return (
    <>
      {dias.map((item) => (
        <Fragment key={item.id}>
          <Data>
            {item.weekday} - {item.date}
          </Data>
          <Showtimes showtimes={item.showtimes} />
        </Fragment>
      ))}
      <Bottom>
        <Cartaz>
          <img src={sessoes.posterURL} alt="cartaz do filme" />
        </Cartaz>
        <p>{sessoes.title}</p>
      </Bottom>
    </>
  );
}

const Data = styled.div`
  margin: 24px 0px 0px 24px;
  width: 240px;
  height: 35px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #293845;
`;

const Bottom = styled.div`
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
