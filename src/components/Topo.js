import styled from "styled-components";

export default function Topo() {
  return <Top>CINEFLEX</Top>;
}

const Top = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #c3cfd9;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #e8833a;
`;
