import { useState } from "react";
import styled from "styled-components";

export default function Assento({ item, ids, setIds, info }) {
  const disponivel = item.isAvailable;
  const [selecionado, setSelecionado] = useState(false);
  
  return (
    <>
      <BotaoAssento disponivel={disponivel} selecionado={selecionado}>{item.name}</BotaoAssento>
    </>
  );
}

const BotaoAssento = styled.div`
  margin-left: 8px;
  width: 26px;
  height: 26px;
  background: ${(props) =>
    props.disponivel=== false
      ? `#FBE192`
      : props.selecionado === true
      ? `#8DD7CF`
      : `#C3CFD9`};
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
