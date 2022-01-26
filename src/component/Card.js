import React from "react";
import "./Card.css";

function Card({ bank, nummer, valide, validate1, validate2, datum, namen }) {
  return (
    <div className="Card">
      <h2 className="Bank">{bank}</h2>
      <h2 className="Nummer">{nummer}</h2>
      <span className="Valide">{valide}</span>
      <div className="Inline">
        <div className="Block">
          <span className="Validate1">{validate1}</span>
          <span className="Validate2">{validate2}</span>
        </div>
        <span className="Datum">{datum}</span>
      </div>
      <h2 className="Namen">{namen}</h2>
    </div>
  );
}

export default Card;
