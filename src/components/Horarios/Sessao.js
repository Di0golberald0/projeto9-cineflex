import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Showtimes from "./Showtimes";

export default function Sessao() {
  const { idHorarios } = useParams();
  const [sessions, setSessions] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idHorarios}/showtimes`
    );

    requisicao.then((resposta) => {
      setSessions(resposta.data);
      setDays(resposta.data.days);
    });
  }, []);

  return (
    <>
      {days.map((item) => (
        <>
          <Date>
            {item.weekday} - {item.date}
          </Date>
          <Showtimes showtimes={item.showtimes} />
        </>
      ))}
      <Bottom>
        <Cartaz>
          <img src={sessions.posterURL} alt="cartaz do filme" />
        </Cartaz>
        <p>{sessions.title}</p>
      </Bottom>
    </>
  );
}

const Date = styled.div`
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