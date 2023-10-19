import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

// Função que puxa as notícias através do método GET baseado na quantidade que o usuário escolher
const Home = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async(e) => {
    let qtd = (e || 5)
    try {
      const response = await axios.get(`http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${(qtd)}`);
      const data = [response.data];
      const data2 = data[0]
      const data3 = data2.items
      setPosts(data3);

      // Tratamento de erros
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])  

  // Retorno na tela das notícias puxadas anteriormente, tratadas para mostrar apenas título, descrição, data da publicação e link da fonte
  return (
      <div className="home">
        <div className='btnNewsContainer'>
          <p>Exibir: </p>
          <button className="btnNews" onClick={() => getPosts(5)}>5 notícias</button>
          <button className="btnNews" onClick={() => getPosts(10)}>10 notícias</button>
          <button className="btnNews" onClick={() => getPosts(20)}>20 notícias</button>
        </div>
        <h1>Últimas Notícias do <span className='ibge'>IBGE</span></h1>
        {posts.length === 0 ? (<p>Carregando notícias...</p>) : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.titulo}</h2>
              <p>{post.introducao}</p>
              <p className="date">Publicação: {post.data_publicacao}</p>
              <Link to={post.link} className="btn" target="blank">
                Saiba mais
              </Link>
            </div>
          ))
        )}
      </div>  
  )
}

export default Home;