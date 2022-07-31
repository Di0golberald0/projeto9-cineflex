import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Assento from "./Assento";
import Formulario from "./Formulario";
import Bottom from "./Bottom";

export default function Assentos({ nome, setNome, CPF, setCPF }) {
  const { idSessao } = useParams();
  const [info, setInfo] = useState([]);
  const [assentos, setAssentos] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
    );

    requisicao.then((resposta) => {
      setInfo(resposta.data);
      setAssentos(resposta.data.seats);
      console.log("Renderizando")
    });

    requisicao.catch(console.log("Falha ao carregar lista de assentos, tentando novamente"));
  }, []);

  return (
    <>
      <Instrucoes>Selecione o horário</Instrucoes>
      <Corpo>
        <TelaAssentos>
          <ListaAssentos>
            {assentos.map((item, index) => (
              <Assento key={index} item={item} info={info} ids={ids} setIds={setIds} />
              ))
            }
          </ListaAssentos>
        </TelaAssentos>
        <Legenda>
          <Container>
            <BotaoAssento selected={true}></BotaoAssento>
            <p>Selecionado</p>
          </Container>
          <Container>
            <BotaoAssento available={true}></BotaoAssento>
            <p>Disponível</p>
          </Container>
          <Container>
            <BotaoAssento available={false}></BotaoAssento>
            <p>Indisponível</p>
          </Container>
        </Legenda>
        <Formulario nome={nome} setNome={setNome} CPF={CPF} setCPF={setCPF} ids={ids} setIds={setIds} />
      </Corpo>
      
    </>
  );
}

const Corpo = styled.div`
  margin-bottom: 150px;
`;

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
const TelaAssentos = styled.div`
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ListaAssentos = styled.div`
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

const BotaoAssento = styled.div`
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