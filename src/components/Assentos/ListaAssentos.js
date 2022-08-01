import { useState } from "react";
import styled from "styled-components";
import Cadeira from "./Cadeira";

export default function ListaAssentos({ item, ids, setIds, info }) {
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
    console.log(info)
  }

  
  return (
    <>
      <Cadeira disponivel={disponivel} selecionado={selecionado} onClick={Escolher}>{item.name}</Cadeira>
    </>
  );
}
