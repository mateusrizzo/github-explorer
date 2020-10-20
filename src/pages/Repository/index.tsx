import React, {useEffect, useState} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import {Header, RepositoryInfo, Issues} from './styles';


interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number
    owner: {
        login: string;
        avatar_url: string;
    };
}
const Repository: React.FC = () => {
    const [repository, setRepository] = useState(null);
    const [issues, setIssues] = useState([])
    const {params} = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.repository}`)
        .then(response => {
            console.log(response.data);
        })
        api.get(`repos/${params.repository}/issues`)
        .then(response => {
            console.log(response.data);
        })
    }, [params.repository]);

    return (
       <> 
       <Header>
           <img src={logo} alt="Github Explorer"/>
           <Link to="/">
               <FiChevronLeft size={16}/>
                Voltar
           </Link>
       </Header> 
       <RepositoryInfo>
           <header>
             <img src="https://avatars0.githubusercontent.com/u/67802605?s=460&u=a709d8bb80a43019b49737b767ed11e4028f742f&v=4" alt="Mateus Rizzo"/>
                <div>
                    <strong>mateusrizzo/timetracker-server</strong>
                    <p>Descrição interessantona</p>
                </div>  
           </header>
           <ul>
               <li>
                   <strong>1000</strong>
                   <span>Stars</span>
               </li>
               <li>
                   <strong>940</strong>
                   <span>Forks</span>
               </li>
               <li>
                   <strong>14k</strong>
                   <span>Issues abertas</span>
               </li>
           </ul>
       </RepositoryInfo>

       <Issues>
           <Link to='blablabla'>
                    <img src="" alt="" />
                    <div>
                        <strong>Tá muito ruim, nossa</strong>
                        <p>Odiei, 5 estrelas</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
       </Issues>
       </>
    );
}

export default Repository;