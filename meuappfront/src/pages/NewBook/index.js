import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api'

export default function NewBook(){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const userId = localStorage.getItem('userId');

    const history = useHistory();

    async function handleNewBook(e){
        e.preventDefault();

        const data = {
            title,
            author,
        };

        try{
            await api.post('books', data, {
                headers:{
                    Authorization: userId, 
                }
            })

            history.push('/profile');

        } catch(err){
            alert('Erro ao realizar cadastro de livro');
        }

    }

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

                <form onSubmit={handleNewBook}>
                    <input 
                    placeholder="Título do livro"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                    
                    <input 
                    placeholder="Autor"
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    />


                    
                    <button className="button" type="submit"> Cadastrar </button>
                </form>

            </div>
            
        </div>
    );
}