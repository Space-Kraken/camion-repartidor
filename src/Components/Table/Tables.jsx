import React from "react";
import "./Tables.scss";

export default function Tables(props) {
  return (
    <div className="tableComponent">
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table class="table table-bordered table-striped mb-0 table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Dia</th>
              <th scope="col">Tina</th>
              <th scope="col"># Aleatorio</th>
              <th scope="col">Peso de la tina</th>
              <th scope="col">Peso acumulado</th>
              <th scope="col">Costo sobrepeso</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((value, key) => (
              <tr>
                <th scope="row">{key + 1}</th>
                <td>{value.id}</td>
                <td>{value.tina}</td>
                <td>{value.ale}</td>
                <td>{value.pes}</td>
                <td>{value.pesoA}</td>
                <td>{value.cost}</td>
              </tr>
            ))}
            {/* <tr>
              <th scope="row">1</th>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
