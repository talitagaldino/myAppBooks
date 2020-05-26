import React, { useState } from 'react';
import './styles.css';
import logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [telephone, setTelephone] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            city,
            uf,
            telephone,
        };

        try{
            await api.post('users', data);

            alert('Cadastro feito com sucesso');
            history.push('/');
            
        } catch (err){
            alert('Erro no cadastro');
        }
    }

    return(
        <div className="register-container">
            <div className="content">

            <section>
                    <img src={logo} alt="Meus Livros"></img>
                    <h1>Criar conta</h1>
                    <p>Faça sua conta para cadastrar os seus livros favoritos!</p>

                    <Link className="links" to="/">
                        <FiArrowLeft size={16} color="#ff66a3" />
                        Já tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <input 
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />

                    <input
                        placeholder="Telefone"
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    
                    <button className="button" type="submit"> Cadastrar </button>
                </form>

            </div>
            
        </div>
    );
}