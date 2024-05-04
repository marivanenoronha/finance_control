import React from 'react';
import Header from './Header';
import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  ListAccounts from "./components/ListAccounts/financeList";
import AddAccounts from "./components/AddAccounts/financeAccount";
import UpdateAccounts from "./components/UpdateAccounts/financeEdit";
import ViewAccounts from "./components/ViewAccounts/DetailsAccount";
import  AccountLogin from './components/Users/accountLogin';
function App() {

  return (
    <div>
      < Header />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={AccountLogin} />
          <Route exact path='/addaccounts' Component={AddAccounts} />
          <Route path='/listaccounts' Component={ListAccounts} />
          <Route path="/updateaccounts/:id" Component={UpdateAccounts} />
          <Route path="/viewaccounts/:id" Component={ViewAccounts} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
