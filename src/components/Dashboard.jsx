import React from "react";
import "../css/centerboard.css";

const CenterBoard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Doctors List */}
          <div className="col-lg-2 col-md-3 col-sm-12">
            <ol className="cb__list list-group list-group-numbered">
              <li
                type="button"
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                Doctor #1
                <span className="badge bg-primary rounded-pill">4</span>
              </li>
              <li
                type="button"
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                Doctor #2
                <span className="badge bg-primary rounded-pill">0</span>
              </li>
              <li
                type="button"
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                Doctor #3
                <span className="badge bg-primary rounded-pill">0</span>
              </li>
            </ol>
          </div>
          {/* Main Board */}
          <div className="cb__drugs col-lg-9 col-md-9 col-sm-12">
            <h5>Drugs Prescribed</h5>
            <ul className="list-group list-group-flush rounded">
              <li className="list-group-item d-flex justify-content-between">
                <span>Drug(s)</span>
                <span>Dose</span>
                <span>Time</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                Paracetamol
                <span>30 days</span>
                <span>Morning Evening</span>
              </li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterBoard;
