import { React, useState } from "react";
import "./App.css";
import Panel from "./Components/Panel";
import Table from "./Components/Table";

function App() {
  const [data, setdata] = useState(false);
  const [values, setValues] = useState([]);
  const [desicion, setDesicion] = useState("");
  const [sumatoria, setSumatoria] = useState("");

  let noDays = "";
  let amount = "";
  let table = [];
  let factor = 0;

  function getDay(value) {
    noDays = value;
  }

  function getAmoun(value) {
    amount = value;
  }

  function calculate() {
    let peso = "";
    let random = "";
    factor = 0;
    for (let days = 0; days < noDays; days++) {
      let pesoA = 0;
      let cost = 0;
      for (let tinas = 0; tinas < amount; tinas++) {
        random = Math.random().toFixed(5);
        random < 0.5
          ? (peso = 190 + Math.sqrt(800 * random))
          : (peso = 230 - Math.sqrt(800 * (1 - random)));
        pesoA = pesoA + peso;
        cost = pesoA >= 1000 ? 200 : "-";
        if (cost === 200) {
          factor += 200;
        }
        table.push({
          id: days + 1,
          tina: tinas + 1,
          ale: random,
          pes: peso.toFixed(3),
          pesoA: pesoA.toFixed(3),
          cost: cost,
        });
      }
    }
    factor >= 60000
      ? setDesicion("Comprar otro camion")
      : setDesicion("Seguir con el plan actual");
    console.log(factor);
    setSumatoria(factor);
    setdata(true);
    setValues(table);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Panel action={calculate} getDay={getDay} getNumber={getAmoun} />
        {data ? (
          <>
            <Table data={values} />
            <br></br>
            <h4 className="text-white">
              {"Costo por exceso de peso: " + sumatoria}
              <br /> {"Resolucion: " + desicion}
            </h4>
          </>
        ) : null}
      </header>
    </div>
  );
}

export default App;
