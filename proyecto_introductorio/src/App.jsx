import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Boton from "./components/Boton";
import Acordeon from "./components/Acordeon";
import Alerta from "./components/Alerta";
import Insignia from "./components/Insignia";
import Cards from "./components/Cards";
import Select from "./components/Selects";
import Checkbox from "./components/Checkbox";
import Range from "./components/Range";
import Label from "./components/Label";
import List from "./components/List";
import Pagination from "./components/Pagination";
import Placeholder from "./components/Placeholder";
import Spinners from "./components/Spinners";
import Progress from "./components/Progress";
import Collapse from "./components/Collapse";
import Radio from "./components/Radio";
import InputGroup from "./components/InputGroup";
import StackButtons from "./components/StackButtons";
import FocusRing from "./components/FocusRing";
function App() {
  return (
    <>
      <Navbar />
      <br />
      <Boton />
      <br />
      <br />
      <Acordeon />
      <br />
      <Alerta />
      <br />
      <Insignia />
      <br />
      <Cards />
      <br />
      <Select></Select>
      <br></br>
      <Checkbox></Checkbox>
      <br></br>
      <Range></Range>
      <br></br>
      <Label></Label>
      <br></br>
      <List></List>
      <br></br>
      <Pagination></Pagination>
      <br></br>
      <Placeholder></Placeholder>
      <br></br>
      <Spinners></Spinners>
      <br></br>
      <Progress></Progress>
      <br></br>
      <Collapse></Collapse>
      <br></br>
      <Radio></Radio>
      <br></br>
      <InputGroup></InputGroup>
      <br></br>
      <StackButtons></StackButtons>
      <br></br>
      <FocusRing></FocusRing>
    </>
  );
}

export default App;
