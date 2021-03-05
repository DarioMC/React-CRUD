import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

export const MainCRUD = () => {

  const dataProcesses = [
    { id: 1, process: "System", parentProcess: "None"},
    { id: 2, process: "smss.exe", parentProcess: "System"},
    { id: 3, process: "wininit.exe", parentProcess: "smss.exe"},
    { id: 4, process: "RuntimeBroker.exe", parentProcess: "svchost.exe"},
    { id: 5, process: "taskhostw.exe", parentProcess: "svchost.exe"},
    { id: 6, process: "winlogon.exe", parentProcess: "smss.exe"},
    { id: 7, process: "csrss.exe", parentProcess: "smss.exe"},
    { id: 8, process: "services.exe", parentProcess: "wininit.exe"},
    { id: 9, process: "svchost.exe", parentProcess: "services.exe (most often)"},
    { id: 10, process: "lsaiso.exe", parentProcess: "wininit.exe"},
  ];

  const [data, setData]               = useState(dataProcesses);
  const [modalEdit, setModalEdit]     = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalInsert, setModalInsert] = useState(false);

  const [processSelected, setProcessSelected] = useState({
    id: '',
    process: '',
    parentProcess: ''
  });

  const selectProcess=(element, option)=>{
setProcessSelected(element);
(option==='Edit')?setModalEdit(true):setModalDelete(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setProcessSelected((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const edit=()=>{
    var newData=data;
    newData.map(task=>{
      if(task.id===processSelected.id){
        task.parentProcess=processSelected.parentProcess;
        task.process=processSelected.process;
      }
    });
    setData(newData);
    setModalEdit(false);
  }

  const remove =()=>{
    setData(data.filter(task=>task.id!==processSelected.id));
    setModalDelete(false);
  }

  const openModalInsert=()=>{
    setProcessSelected(null);
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
    <button className="btn btn-success" onClick={()=>openModalInsert()}>Insert process</button>
    <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Process</th>
            <th>Parent process</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(element=>(
            <tr>
              <td>{element.id}</td>
              <td>{element.process}</td>
              <td>{element.parentProcess}</td>
              <td><button className="btn btn-primary" onClick={()=>selectProcess(element, 'Edit')}>Edit</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>selectProcess(element, 'Delete')}>Delete</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      {/* CRUD Modals */}

      <Modal isOpen={modalEdit}>
        <ModalHeader>
          <div>
            <h3>Edit process</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={processSelected && processSelected.id}
            />
            <br />

            <label>Process</label>
            <input
              className="form-control"
              type="text"
              name="process"
              value={processSelected && processSelected.process}
              onChange={handleChange}
            />
            <br />

            <label>Parent process</label>
            <input
              className="form-control"
              type="text"
              name="parentProcess"
              value={processSelected && processSelected.parentProcess}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>edit()}>
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEdit(false)}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalDelete}>
        <ModalBody>
          Area you sure to kill the process: {processSelected && processSelected.process}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>remove()}>
            yes
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalDelete(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsert}>
        <ModalHeader>
          <div>
            <h3>Insert process</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            />
            <br />

            <label>Process</label>
            <input
              className="form-control"
              type="text"
              name="process"
              value={processSelected ? processSelected.process: ''}
              onChange={handleChange}
            />
            <br />

            <label>parentProcess</label>
            <input
              className="form-control"
              type="text"
              name="parentProcess"
              value={processSelected ? processSelected.parentProcess: ''}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insert()}>
            Insert
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsert(false)}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

