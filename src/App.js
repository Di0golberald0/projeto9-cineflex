import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Topo from "./components/Topo";
import Filmes from "./components/Filmes/Filmes";
import Horarios from "./components/Horarios/Horarios";
import Assentos from "./components/Assentos/Assentos";
import Confirmar from "./components/Confirmar/Confirmar";

export default function App() {
  const [nome, setNome] = useState("");
  const [CPF, setCPF] = useState("");

  return (
    <BrowserRouter>
      <Topo />
      <Routes>
        <Route path="/" element={<Filmes />} />
        <Route path="/sessoes/:idFilme" element={<Horarios />} />
        <Route
          path="/assentos/:idSessao"
          element={
            <Assentos nome={nome} setNome={setNome} CPF={CPF} setCPF={setCPF} />
          }
        />
        <Route
          path="/sucesso"
          element={
            <Confirmar
              nome={nome}
              setNome={setNome}
              CPF={CPF}
              setCPF={setCPF}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
