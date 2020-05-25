import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewBook(){
    return(
        <div className="new-book-container">
            <div className="content">

            <section>
                    <img src={logo} alt="Meus Livros"></img>
                    <h1>Cadastrar novo livro</h1>
                    <p>Faça o cadastro de um livro</p>

                    <Link className="links" to="/profile">
                        <FiArrowLeft size={16} color="#ff66a3" />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do livro" />
                    
                    <input placeholder="Autor" />


                    
                    <button className="button" type="submit"> Cadastrar </button>
                </form>

            </div>
            
        </div>
    );
}