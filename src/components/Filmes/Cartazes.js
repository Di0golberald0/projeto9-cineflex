import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Cartazes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    requisicao.then((resposta) => {
      setFilmes(resposta.data);
    });

    requisicao.catch(console.log("Falha ao carregar lista de filmes, tentando novamente"));
  }, []);

  return (
    <>
      {filmes.map((item) => (
        <Link key ={item.id} to={`/sessoes/${item.id}`}>
          <Cartaz>
            <img src={item.posterURL} alt="cartaz do filme" />
          </Cartaz>
        </Link>
      ))}
    </>
  );
}

const Cartaz = styled.div`
  margin-top: 10px;
  width: 145px;
  height: 209px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    width: 80%;
    height: 80%;
  }
`;
