import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Showtimes({ showtimes }) {
  return (
    <Times>
      {showtimes.map((item) => (
        <Link to={`/sessao/${item.id}`}>
          <Time>{item.name}</Time>
        </Link>
      ))}
    </Times>
  );
}

const Time = styled.div`
  margin-left: 10px;
  width: 83px;
  height: 43px;
  background-color: #e8833a;
  border-radius: 3px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;
  color: #ffffff;
`;

const Times = styled.div`
  margin: 20px 0px 0px 14px;
  display: flex;
`;
