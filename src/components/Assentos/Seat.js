import styled from "styled-components";

export default function Seat({ item }) {
  console.log(item);
  function Escolher() {}

  return (
    <>
      {item !== undefined ? (
        <>
          <Assento
            available={item.isAvailable}
            selected={false}
            onClick={Escolher()}
          ></Assento>
        </>
      ) : (
        <Assento>Carregando, por favor aguarde...</Assento>
      )}
    </>
  );
}

const Assento = styled.div`
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
