import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

// COMPONENTS
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { addRow,
  deleteRow,
  draw,
  animationStep,
  recalculateServiceTime,
  findNextIndexWithPriority,
  findNextIndex,
  animate } from "./sjf.js";

const SJF = () => {
  return (
    <div className="main">
      <div className="container">
        <Navbar />
        <div>
          <div>
            Algorithm:
            <form id="algorithm">
              <input
                type="radio"
                name="algorithm"
                defaultValue="fcfs"
                defaultChecked
              />{" "}
              FCFS
              <br />
              <input type="radio" name="algorithm" defaultValue="sjf" /> SJF
              <br />
              <input
                type="radio"
                name="algorithm"
                defaultValue="priority"
              />{" "}
              Priority scheduling
              <br />
              <input type="radio" name="algorithm" defaultValue="robin" /> Round
              Robin
            </form>
            <br />
          </div>
          <table id="inputTable">
            <tbody>
              <tr>
                <th>Process</th>
                <th>Arrival Time</th>
                <th>Execute Time</th>
                <th className="servtime">Service Time</th>
                <th className="priority-only">Priority</th>
              </tr>
              <tr>
                <td>P0</td>
                <td>0</td>
                <td>
                  <input
                    className="initial exectime"
                    type="text"
                    defaultValue={5}
                  />
                </td>
                <td className="servtime" />
                <td className="priority-only initial">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>P1</td>
                <td>1</td>
                <td>
                  <input className="initial exectime" defaultValue={3} />
                </td>
                <td className="servtime" />
                <td className="priority-only">
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <input
            id="minus"
            style={{
              display: "inline",
              left: 428,
              position: "absolute",
              top: 170,
            }}
            type="button"
            defaultValue="-"
            onclick={deleteRow()}
          />
        </div>
        <input type="button" defaultValue="+" onclick={addRow()} />
        <div></div>
        <p id="quantumParagraph" hidden>
          Quantum:
          <input
            style={{ width: 50 }}
            id="quantum"
            type="text"
            defaultValue={3}
          />
        </p>
        <input type="button" defaultValue="Go" onclick={draw()} />
        <br />
        <br />
        <fresh></fresh>
        <p>
          Timer: <strong id="timer" /> sec
        </p>
      </div>
    </div>
  );
};

export default SJF;
