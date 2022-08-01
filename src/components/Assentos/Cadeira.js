import styled from "styled-components";

const Cadeira = styled.div`
width: 26px;
height: 26px;
background: ${(props) =>
  props.disponivel === false
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

export default Cadeira;