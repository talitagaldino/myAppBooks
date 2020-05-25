import React from 'react';
import './styles.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">

            <section>
                    <img src={logo} alt="Meus Livros"></img>
                    <h1>Criar conta</h1>
                    <p>Faça sua conta para cadastrar os seus livros favoritos!</p>

                    <Link className="links" to="/register">
                        <FiArrowLeft size={16} color="#ff66a3" />
                        Cadastre-se
                    </Link>
                </section>
                
                <form>
                    <input placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input placeholder="Telefone" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    
                    <button className="button" type="submit"> Cadastrar </button>
                </form>

            </div>
            
        </div>
    );
}