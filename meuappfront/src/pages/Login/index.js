import React, { useState } from 'react';
import './styles.css';
import logo from '../../images/logo.png';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';


export default function Login(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const response = await api.post('sessions', {id});
            
            //salvando na aplicação
            localStorage.setItem('userId', id);
            localStorage.setItem('userName', response.data.name);

            history.push('/profile');
        } catch(err){
            alert('Falha no login');
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Meus Livros" />

                <form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <input
                    placeholder="ID" 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>
                    <FiLogIn size={16} color="#ff66a3" />
                    <Link className="links" to="/register">Cadastre-se</Link>
                </form>
            </section>
        </div>
    );
}