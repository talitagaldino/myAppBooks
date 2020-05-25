import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../../images/logo.png';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

export default function Profile(){
    const [books, setBooks] = useState([]);

    const userName = localStorage.getItem('userName');
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

    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Meus Livros" />
                <span> Olá, bem vindo {userName}!</span>

                <Link className="button" to="/books/new">
                    Cadastrar livro
                </Link>
                <button type="button">
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

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
} 