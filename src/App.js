import React from 'react';
import './App.css';
import Card from './component/Card';

function App() {
  return (
    <div className='Header'>
      <div className="App">
      <Card bank={"Big Bank, Inc."}
      nummer={"1234 5432 1234 3455"}
      valide={"1234"}
      validate={"VALID THRU"}
      datum={"08/19"}
      namen={"CARDHOLDER NAME"}
      />
      

      </div>
    </div>
  );
}
export default App;
