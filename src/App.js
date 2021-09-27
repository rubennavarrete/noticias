import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {


  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=238be07e427b485c877935dd47f0dcd2`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]);


  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>

      <ListadoNoticias
        noticias={noticias}
      />
    </Fragment>
  );
}

export default App;
