import React from 'react';
import './Card.css';

function Card({ bank, nummer, valide, validate, datum, namen }) {
  return (
  <div 
className="Card"
>
  <h2 className='Bank'>{bank}</h2>
  <h2 className='Nummer'>{nummer}</h2>
  <span className='Valide'>{valide}</span>
  <span className='Validate'>{validate}</span>
  <span className='Datum'>{datum}</span>
  <h2 className='Namen'>{namen}</h2>
  </div>
  );
}

export default Card;