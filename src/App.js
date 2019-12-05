import React from 'react';

import Modal from "./components/Modal";
import useModal from './hooks/useModal';
import DataTable from './components/DataTable'

import './App.css';

import { headings, rows } from './utilities/lists'

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function App() {
  const {isShowing, toggle} = useModal();

  return (
    <div className="App">
      <header className="App-header"><p>header</p></header>
      <main className="App-main">
        <p>Mock data is used to show the DataTable component in the main window and a modal.</p>
        <br />
        <DataTable headings={headings} rows={rows} />
        <br/>
        <button className="button-default" onClick={toggle}>Show Table in Modal</button>        
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
      </main>
      <footer className="App-footer"><p>footer</p></footer>
    </div>
  );
}

export default App;
