import React from 'react';
import './styles.css';
import logo from '../../images/logo.png';
import { FiLogIn } from 'react-icons/fi';

export default function Login(){
    return(
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="Meus Livros" />

                <form>
                    <h1>Login</h1>

                    <input placeholder="ID" />

                    <button className="button" type="submit">Entrar</button>
                    <FiLogIn size={16} color="#ff66a3" />
                    <a href="/register">Cadastre-se</a>
                </form>
            </section>
        </div>
    );
}