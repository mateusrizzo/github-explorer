import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import logo from '../../assets/logo.svg';

import {Header, RepositoryInfo, Issues} from './styles';


interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();
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
                   <span>Issues</span>
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