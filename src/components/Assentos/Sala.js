import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import ListaAssentos from "./ListaAssentos";
import Legenda from "./Legenda";
import Formulario from "./Formulario";
import Bottom from "./Bottom";

export default function Sala({ nome, setNome, CPF, setCPF, ids, setIds, resultado, setResultado }) {
    const { idSessao } = useParams();
    const [info, setInfo] = useState([]);
    const [assentos, setAssentos] = useState([]);
    const [cadeiras, setCadeiras] = useState([]);
    const [filme, setFilme] = useState([]);
    const [dia, setDia] = useState([]);
  
    useEffect(() => {
      const requisicao = axios.get(
        `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
      );
  
      requisicao.then((resposta) => {
        setInfo(resposta.data);
        setAssentos(resposta.data.seats);
        setFilme(resposta.data.movie);
        setDia(resposta.data.day);
        const NovoResultado = {
          filme: resposta.data.movie.title,
          dia: resposta.data.day.date,
          sessao: resposta.data.name
        };
        setResultado(NovoResultado);
      });
  
      requisicao.catch(console.log("Falha ao carregar lista de assentos, tentando novamente"));
    }, []);

  return (
    <>
      <Corpo>
        <Tela>
          <Lista>
            {assentos.map((item, index) => (
              <ListaAssentos key={index} item={item} info={info} ids={ids} setIds={setIds} cadeiras={cadeiras} setCadeiras={setCadeiras} />
              ))
            }
          </Lista>
        </Tela>
        <Legenda />
        <Formulario
         nome={nome} setNome={setNome} CPF={CPF} setCPF={setCPF}
         ids={ids} setIds={setIds} cadeiras={cadeiras} setCadeiras={setCadeiras}
         resultado={resultado} setResultado={setResultado} />
      </Corpo>
      <Bottom info={info} filme={filme} dia={dia} />
    </>
  );
}

const Corpo = styled.div`
  margin-bottom: 150px;
`;

const Tela = styled.div`
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Lista = styled.div`
  width: 284px;
  height: 190px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 330px) {
    width: auto;
  }
`;