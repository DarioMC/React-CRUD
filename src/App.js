import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { MainCRUD } from './components/MainCRUD';

function App() {
  return (
    <div className="App">
      <MainCRUD />
    </div>
  )

}

export default App;
