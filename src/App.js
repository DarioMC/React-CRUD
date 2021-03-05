import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

function App() {

  const dataProcesses = [
    { id: 1, process: "System", parentProcess: "None", description: "The System process is responsible for most kernel-mode threads."},
    { id: 2, process: "smss.exe", parentProcess: "System", description: "One master instance and another child instance per session." },
    { id: 3, process: "wininit.exe", parentProcess: "smss.exe", description: "Starts key background processes within Session 0. It starts the Service Control Manager (services.exe), the Local Security Authority process (lsass.exe), and lsaiso.exe for systems with Credential Guard enabled. Note that prior to Windows 10." },
    { id: 4, process: "RuntimeBroker.exe", parentProcess: "svchost.exe", description: "Acts as a proxy between the constrained Universal Windows Platform (UWP) apps (formerly called Metro apps) and the full Windows API." },
    { id: 5, process: "taskhostw.exe", parentProcess: "svchost.exe", description: "The generic host process for Windows Tasks. Upon initialization, taskhostw.exe runs a continuous loop listening for trigger events." },
    { id: 6, process: "winlogon.exe", parentProcess: "smss.exe", description: "Handles interactive user logons and logoffs." },
    { id: 7, process: "csrss.exe", parentProcess: "smss.exe", description: "The Client/Server Run-Time Subsystem is the user-mode process for the Windows subsystem." },
    { id: 8, process: "services.exe", parentProcess: "wininit.exe", description: ": Implements the Unified Background Process Manager (UBPM), which is responsible for background activities such as services and scheduled tasks." },
    { id: 9, process: "svchost.exe", parentProcess: "services.exe (most often)", description: "Generic host process for Windows services. It is used for running service DLLs." },
    { id: 10, process: "lsaiso.exe", parentProcess: "wininit.exe", description: "When Credential Guard is enabled, the functionality of lsass.exe is split between two processes itself and lsaiso.exe" },
  ];

  const [data, setData] = useState(dataProcesses);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Process</th>
            <th>Parent process</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

    </div>
  );
}

export default App;
