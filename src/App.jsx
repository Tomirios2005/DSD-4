import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import Header from './components/header/Header';
import Footer from "./components/footer/Footer"


function App() {
  const [recursos, setRecursos] = useState([]);

  function getRecursos() {
    axios.get("https://64a46c2cc3b509573b57827f.mockapi.io/recursos")
      .then((response) => {
        setRecursos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getRecursos();
  }, []);

  return (
    <>
    <div>
    <Header></Header>
    </div>
    
      <div className="tienda_container">
        {recursos.map((recurso, index) => (
          <div className="card" key={index}>
            <h3>{recurso.nombre}</h3>
            <img src={recurso.imagen} alt={recurso.nombre} />
            <button>
              <a href={recurso.link} target= "_blank" rel="noreferrer">Abrir Link</a>
            </button>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;


