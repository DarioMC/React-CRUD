import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {

  const dataProcesses = [
    { id: 1, process: "System", parentProcess: "None", instances: "one"},
    { id: 2, process: "smss.exe", parentProcess: "System", instances: "one" },
    { id: 3, process: "wininit.exe", parentProcess: "smss.exe", instances: "one"},
    { id: 4, process: "RuntimeBroker.exe", parentProcess: "svchost.exe", instances: "one"},
    { id: 5, process: "taskhostw.exe", parentProcess: "svchost.exe", instances: "one or more"},
    { id: 6, process: "winlogon.exe", parentProcess: "smss.exe", instances: "one or more"},
    { id: 7, process: "csrss.exe", parentProcess: "smss.exe", instances: "2 or more"},
    { id: 8, process: "services.exe", parentProcess: "wininit.exe", instances: "one"},
    { id: 9, process: "svchost.exe", parentProcess: "services.exe (most often)", instances: "Many (generally at least 10)"},
    { id: 10, process: "lsaiso.exe", parentProcess: "wininit.exe", instances: "Zero or one"},
  ];

  const [data, setData] = useState(dataProcesses);

  return (
    <div className="App">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Process</th>
            <th>Parent process</th>
            <th>Instances</th>
          </tr>
        </thead>
        <tbody>
        {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.process}</td>
              <td>{elemento.parentProcess}</td>
              <td>{elemento.instances}</td>
              <td><button className="btn btn-primary">Edit</button> {"   "} 
              <button className="btn btn-danger">Delete</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
