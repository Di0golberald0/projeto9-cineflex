import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Seat from "./Seat";

export default function Assentos({ nome, setNome, CPF, setCPF }) {
  const { idAssentos } = useParams();
  const [info, setInfo] = useState([]);
  const [ids, setIds] = useState([]);

  function Finalizar() {
    const envio = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        ids: ids,
        name: nome,
        cpf: CPF
      }
    );
  }

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idAssentos}/seats`
    );

    requisicao.then((resposta) => {
      setInfo(resposta.data);
      console.log("chegamo aqui");
    });

    requisicao.catch(console.log("deu ruim"));
  }, []);

  return (
    <>
      {info !== undefined ? (
        <>
          <Instructions>Selecione o horário</Instructions>
          <Body>
            <ScreenSeats>
              <Seats>
                {info.seats !== undefined
                  ? info.seats.map((item) => (
                      <Seat item={item} ids={ids} setIds={setIds} />
                    ))
                  : "carregando"}
              </Seats>
            </ScreenSeats>
            <Legenda>
              <Container>
                <Assentos selected={true}></Assentos>
                <p>Selecionado</p>
              </Container>
              <Container>
                <Assentos available={true}></Assentos>
                <p>Disponível</p>
              </Container>
              <Container>
                <Assentos available={false}></Assentos>
                <p>Indisponível</p>
              </Container>
            </Legenda>
            <Formulario>
              <form onSubmit={Finalizar}>
                <div>
                  <p>Nome do comprador:</p>
                  <input
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <p>CPF do comprador:</p>
                  <input
                    placeholder="Digite seu nome"
                    value={CPF}
                    onChange={(e) => setCPF(e.target.value)}
                    required
                  />
                </div>
                <Enviar>
                  <button type="submit">Reservar assento(s)</button>
                </Enviar>
              </form>
            </Formulario>
          </Body>
          <Bottom>
            {" "}
            <Cartaz>
              {info.movie !== undefined ? (
                <img src={info.movie.posterURL} alt="cartaz do filme" />
              ) : (
                "carregando"
              )}
            </Cartaz>
            <Descricao>
              {info.movie !== undefined ? (
                <p>{info.movie.title}</p>
              ) : (
                "carregando"
              )}

              {info.day !== undefined ? (
                <p>
                  {info.day.weekday} - {info.name}
                </p>
              ) : (
                "carregando"
              )}
            </Descricao>
          </Bottom>
        </>
      ) : (
        <Bottom>Carregando, por favor aguarde...</Bottom>
      )}
    </>
  );
}

const Body = styled.div`
  margin-bottom: 150px;
`;

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
const ScreenSeats = styled.div`
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Seats = styled.div`
  width: 330px;
  height: 190px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 330px) {
    width: auto;
  }
`;

const Legenda = styled.div`
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;

const Assento = styled.div`
  margin-left: 8px;
  width: 26px;
  height: 26px;
  background: ${(props) =>
    props.available === false
      ? `#FBE192`
      : props.selected === true
      ? `#8DD7CF`
      : `#C3CFD9`};
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Formulario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 330px;
    display: flex;
    flex-direction: column;
    @media (max-width: 330px) {
      width: auto;
    }
  }

  p {
    margin-bottom: 2px;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
  }

  input {
    margin-bottom: 12px;
    width: 320px;
    height: 51px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
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

const Descricao = styled.div`
  display: flex;
  flex-direction: column;
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
