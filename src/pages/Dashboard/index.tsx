import React, {useState} from 'react';
import {FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles'

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState("");
    const [repositories, setRepositories] = useState([]);

    function handleAddRepository() {

    }
    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>
            <Form action="">
                <input placeholder="Digite o nome do repositório" value={newRepo} onChange={e => setNewRepo(e.target.value)} />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/67802605?s=460&u=a709d8bb80a43019b49737b767ed11e4028f742f&v=4" alt="Mateus Rizzo"/>
                    <div>
                        <strong>mateusrizzo/sunshine</strong>
                        <p>A weather app made on React Native</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;

