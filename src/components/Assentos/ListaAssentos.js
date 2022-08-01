import { useState } from "react";
import styled from "styled-components";
import Cadeira from "./Cadeira";

export default function ListaAssentos({ item, ids, setIds }) {
  const disponivel = item.isAvailable;
  const [selecionado, setSelecionado] = useState(false);
  function Remover(cadeira){
    if(cadeira !== item.name){
      return true;
    }
  }

  function Escolher() {
    if(disponivel !== false){
      if(selecionado === false){
        setSelecionado(true);
        const novaIds = [
          ...ids,
          item.name
        ];
        setIds(novaIds);
      }
      else{
        setSelecionado(false);
        const novaIds = ids.filter(Remover);
        setIds(novaIds);
      }
    }
    else{
      alert("Esse assento não está disponível");
    }
  }

  
  return (
    <>
      <Cadeira disponivel={disponivel} selecionado={selecionado} onClick={Escolher}>{item.name}</Cadeira>
    </>
  );
}
