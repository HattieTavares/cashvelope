import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Summary } from './components/Summary';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { CategoryList } from './components/CategoryList';

import { GlobalProvider } from './context/GlobalState';

import './App.css'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <CategoryList />
      </div>
      <div className='container'>
        <TransactionList />
        <AddTransaction />
      </div>

    </GlobalProvider>
  )
}

export default App
