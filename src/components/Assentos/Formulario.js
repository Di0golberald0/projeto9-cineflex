import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Formulario({ nome, setNome, CPF, setCPF, ids, setIds, resultado, setResultado }) {
  let navigate = useNavigate();
    
  function Finalizar(event) {
    event.preventDefault();
    if(ids.length !== undefined){
      if(isNaN(Number(nome)) !== false){
        if(isNaN(Number(CPF)) !== true && CPF.length === 10){
          const envio = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
          {
            ids: ids,
            name: nome,
            cpf: CPF
          });
          const NovoResultado = {
            ...resultado,
            assentos: ids,
            nome: nome,
            cpf: CPF
          };
          envio.then(() => {
            setNome("");
            setCPF("");
            setIds([]);
            setResultado(NovoResultado);
            navigate("../sucesso");
          })
        }
        else{
          alert("Por favor, preencher o CPF corretamente");
        }
      }
      else{
        alert("Por favor, preencher o Nome corretamente");
      }
    }
    else {
      alert("Por favor, escolher um ou mais assentos para prosseguir");
    }
  }

  return(
    <DivFormulario>
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
          placeholder="Digite seu CPF"
          value={CPF}
          onChange={(e) => setCPF(e.target.value)}
          required
          />
        </div>        
        <Enviar>
          <button type="submit">Reservar assento(s)</button>
        </Enviar>
      </form>
    </DivFormulario>
  )
}

const DivFormulario = styled.div`
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