import { Link } from "react-router-dom";
import './Navbar.css'

// Exibição da data em que o usuário está acessando a aplicação
let dt = new Date();
let dia = dt.getDate();
let ano = dt.getFullYear();

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mes = meses[dt.getUTCMonth()];
let texto = (`Atualizado DIARIAMENTE - ${dia} de ${mes} de ${ano}`)

// Criação da barra de navegação (menu ao topo)
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
            <Link to={'https://agenciadenoticias.ibge.gov.br/pt/agencia-home.html'} target="blank">Portal do <span className="ibge">IBGE</span></Link>
        </h2>
        <p className="diariamente">{texto}</p>
        <ul>
            <li>
                <Link className="hide diariamente" to={'https://www.linkedin.com/in/gustavo-parente/'} target="blank">Desenvolvido para fins de estudo</Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar