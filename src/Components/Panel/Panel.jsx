import { React, useState } from "react";
import "./Panel.scss";

export default function Panel(props) {
  const [values, setValues] = useState({
    dias: "",
    tinas: "",
  });

  return (
    <div className="panel">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Dias trabajados
          </span>
        </div>
        <input
          type="number"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={values.dias}
          onChange={(e) => {
            setValues({ dias: e.target.value });
            props.getDay(e.target.value);
          }}
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Tinas por dia
          </span>
        </div>
        <input
          type="number"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={values.tinas}
          onChange={(e) => {
            setValues({ tinas: e.target.value });
            props.getNumber(e.target.value);
          }}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          console.log("test");
          props.action();
        }}
        class="btn btn-primary"
      >
        Calcular
      </button>
    </div>
  );
}
