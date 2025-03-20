import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Boton from "./components/Boton";
import Acordeon from "./components/Acordeon";
import Alerta from "./components/Alerta";
import Insignia from "./components/Insignia";
import Card from "./components/Cards";
function App() {
  return (
    <>
      <Navbar />
      <br />
      <Boton />
      <br />
      <br />
      <Acordeon />
      <br/>
      <Alerta/>
      <br/>
      <Insignia/>
      <br/>
      {/* <Card/> */}
    </>
  );
}

export default App;
