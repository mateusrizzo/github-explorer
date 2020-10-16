import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Title } from './pages/Dashboard/styles';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () =>  (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);  

export default App;
