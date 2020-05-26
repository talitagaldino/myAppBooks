import React, { useState } from 'react';
import './styles.css';
import logo from '../../images/logo.png';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email,
            password
        };

        await api.post('sessions', data);

        //salvando na aplicação
        localStorage.setItem('userEmail', data.email);

        history.push('/profile');

    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Meus Livros" />

                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input
                        placeholder="Email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="Senha"
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>
                    <FiLogIn size={16} color="#ff66a3" />
                    <Link className="links" to="/register">Cadastre-se</Link>
                </form>
            </section>
        </div>
    );
}