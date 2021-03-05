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
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalInsert, setModalInsert] = useState(false);

  const [processSelected, setprocessSelected] = useState({
    id: '',
    process: '',
    parentProcess: '',
    instances: ''
  });

  const selectProcess=(element, option)=>{
    setprocessSelected(element);
(option==='Edit')?setModalEdit(true):setModalDelete(true)
  }

  const handleChange=e=>{
    const {process, value}=e.target;
    setprocessSelected((prevState)=>({
      ...prevState,
      [process]: value
    }));
  }

  const edit=()=>{
    var newData=data;
    newData.map(nprocess=>{
      if(nprocess.id===processSelected.id){
        nprocess.process=processSelected.process;
        nprocess.parentProcess=processSelected.parentProcess;
        nprocess.instances=processSelected.parentProcess;
        
      }
    });
    setData(newData);
    setModalEdit(false);
  }

  const remove=()=>{
    setData(data.filter(nprocess=>nprocess.id!==processSelected.id));
    setModalDelete(false);
  }

  const abrirModalInsertar=()=>{
    setprocessSelected(null);
    setModalInsert(true);
  }

  const insert =()=>{
    var insertValue=processSelected;
    insertValue.id=data[data.length-1].id+1;
    var newData = data;
    newData.push(insertValue);
    setData(newData);
    setModalInsert(false);
  }


  return (
    <div className="App">
            <h2>SANS - Find Evil - Know Normal</h2>
            <h4>Knowing what’s normal on a Windows host helps cut through the noise to quickly locate potential malware</h4>
      <br />
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
