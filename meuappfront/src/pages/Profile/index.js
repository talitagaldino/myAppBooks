import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import logo from '../../images/logo.png';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

export default function Profile(){
    const [books, setBooks] = useState([]);
    
    const history = useHistory();

    const userEmail = localStorage.getItem('userEmail');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId
            }
        }).then( res => {
            setBooks(res.data);
        })
    }, [userId]);

    async function handleDeleteBook(id){
        console.log('entrou');
        try{
            await api.delete(`books/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });
            
            setBooks(books.filter(books => books.id !== id));

        } catch(err){
            alert('Erro ao deletar livro');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Meus Livros" />
                <span> Olá, bem vindo!</span>

                <Link className="button" to="/books/new">
                    Cadastrar livro
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#ff66a3"/>
                </button>
            </header>

            <h1>Livros:</h1>

            <ul>
            {books.map(books => (
                    <li key={books.id}>
                        <strong>Título: </strong>
                        <p>{books.title}</p>

                        <strong>Autor: </strong>
                        <p>{books.author}</p>

                        <strong>Descrição: </strong>
                        <p>{books.description}</p>

                        <button onClick={() => handleDeleteBook(books.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
} 