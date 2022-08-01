import { useState } from "react";
import Cadeira from "./Cadeira";

export default function ListaAssentos({ item, ids, setIds, cadeiras, setCadeiras }) {
  const disponivel = item.isAvailable;
  const [selecionado, setSelecionado] = useState(false);
  function RemoverId(id){
    if(id !== item.id){
      return true;
    }
  }
  function RemoverCadeira(cadeira){
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
          item.id
        ];
        setIds(novaIds);
        const novasCadeiras = [
          ...cadeiras,
          item.name
        ];
        setCadeiras(novasCadeiras);
      }
      else{
        setSelecionado(false);
        const novaIds = ids.filter(RemoverId);
        setIds(novaIds);
        const novasCadeiras = cadeiras.filter(RemoverCadeira);
        setCadeiras(novasCadeiras);
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
