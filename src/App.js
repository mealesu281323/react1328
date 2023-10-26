import AppForm from './components/AppForm';
import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import { useState } from 'react';

function App() {
   /// READ - LECTURA - fnRead /////
   const [docBD, setDocBD] = useState([]);
   const fnRead = () => {
   }
   //// DELETE - Eliminar - fnDelete ////
   const [idActual, setIdActual] = useState("");
   const fnDelete = (xId) => {
 
   }
   
  return (
    <div style={{width:"350px" , background:"greenyellow" , padding:"10xp"}}> 
      <AppForm />
      <p>No.1 Juan manuel              X       A</p>
      <p>No.1 Rosa Maria              X       A</p>
    </div>
  );
}

export default App;
