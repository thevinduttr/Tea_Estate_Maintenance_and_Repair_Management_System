import './App.css';
import MRHeader from './MREmployee/header';
import EmpDashboard from './MREmployee/dashboard';
import AddRepair from './MREmployee/addrepair';
import AddMaintenance from './MREmployee/addmaintenance';
import MRViewStatus from './MREmployee/viewstatus';
import MREdit from './MREmployee/edit';
import EditMaintenance from './MREmployee/editmaintenance';
import EditRepair from './MREmployee/editrepair';

import MRManagerMenu from './MRManager/ManagerMenu';
import MRManagerDashboard from './MRManager/ManagerDashboard';

import MaintenanceRequests from './MRManager/MaintenanceRequest';
import MaintenanceStatus from './MRManager/MaintenanceStatus';
import MaintenancePending from './MRManager/MaintenancePending';
import MaintenanceInProgress from './MRManager/MaintenanceInProgress';
import MaintenanceCompleted from './MRManager/MaintenanceCompleted';

import RepairRequests from './MRManager/RepairRequest';
import RepairStatus from './MRManager/RepairStatus';
import RepairPending from './MRManager/RepairPending';
import RepairInProgress from './MRManager/RepairInProgress';
import RepairCompleted from './MRManager/RepairCompleted';

import MRTechnicianDashboard from './MRTechnician/TechnicianDashboard';
import MRTechnicianMenu from './MRTechnician/TechnicianMenu';
import MRTechnicianMaintenanceRequest from './MRTechnician/MaintenanceInProgress';
import MRTechnicianRepairRequest from './MRTechnician/RepairInProgress';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// AddRepairPage includes the MRHeader and the AddRepair components
function AddRepairPage() {
  return (
    <div className="flex-container">
      <MRHeader />
      <div className="main-content">
        <AddRepair />
      </div>
    </div>
  );
}

// AddMaintenancePage includes the MRHeader and the AddMaintenance components
function AddMaintenancePage() {
  return (
    <div className="flex-container">
      <MRHeader />
      <div className="main-content">
        <AddMaintenance />
      </div>
    </div>
  );
}

// MRViewStatusPage includes the MRHeader and the MRViewStatus components
function MRViewStatusPage() {
  return (
    <div className="flex-container">
      <MRHeader />
      <div className="main-content">
        <MRViewStatus />
      </div>
    </div>
  );
}

// MREditPage includes the MRHeader and the MREdit components
function MREditPage() {
  return (
    <div className="flex-container">
      <MRHeader />
      <div className="main-content">
        <MREdit />
      </div>
    </div>
  );
}

// MREditPage includes the MRHeader and the MREdit components
function EditMaintenancePage() {
  return (
    <div className="flex-container">
      <MRHeader />
      <div className="main-content">
        <EditMaintenance/>
      </div>
    </div>
  );
}

// MREditPage includes the MRHeader and the MREdit components
function EditRepairPage() {
  return (
    <div className="flex-container">
      <MRHeader />
      <div className="main-content">
        <EditRepair />
      </div>
    </div>
  );
}


// MRManager

function MaintenanceRequestsPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <MaintenanceRequests />
      </div>
    </div>
  );
}

function MaintenanceStatusPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <MaintenanceStatus />
      </div>
    </div>
  );
}

function MaintenancePendingPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <MaintenancePending />
      </div>
    </div>
  );
}

function MaintenanceInProgressPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <MaintenanceInProgress />
      </div>
    </div>
  );
}

function MaintenanceCompletedPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <MaintenanceCompleted />
      </div>
    </div>
  );
}

function RepairRequestsPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <RepairRequests />
      </div>
    </div>
  );
}

function RepairStatusPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <RepairStatus />
      </div>
    </div>
  );
}

function RepairPendingPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <RepairPending />
      </div>
    </div>
  );
}

function RepairInProgressPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <RepairInProgress />
      </div>
    </div>
  );
}

function RepairCompletedPage() {
  return (
    <div className="flex-container">
      <MRManagerMenu />
      <div className="main-content">
        <RepairCompleted />
      </div>
    </div>
  );
}

function MRTechnicianMaintenanceRequestPage() {
  return (
    <div className="flex-container">
      <MRTechnicianMenu />
      <div className="main-content">
        <MRTechnicianMaintenanceRequest />
      </div>
    </div>
  );
}

function MRTechnicianRepairRequestPage() {
  return (
    <div className="flex-container">
      <MRTechnicianMenu />
      <div className="main-content">
        <MRTechnicianRepairRequest />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/MREmployee' element={<EmpDashboard />} />
        <Route path='/MREmployee/addrepair' element={<AddRepairPage />} />
        <Route path='/MREmployee/addmaintenance' element={<AddMaintenancePage />} />
        <Route path='/MREmployee/viewstatus' element={<MRViewStatusPage />} />
        <Route path='/MREmployee/edit' element={<MREditPage />} />
        <Route path='/MREmployee/editmaintenance' element={<EditMaintenancePage />} />
        <Route path='/MREmployee/editrepair' element={<EditRepairPage />} />


        <Route path='/MRManager' element={<MRManagerDashboard />} />

        <Route path='/MRManager/maintenancerequests' element={<MaintenanceRequestsPage />} />
        <Route path='/MRManager/maintenancestatus' element= { <MaintenanceStatusPage /> }/>
        <Route path='/MRManager/maintenancepending'  element={<MaintenancePendingPage/>} />
        <Route path='/MRManager/maintenanceinprogress' element={<MaintenanceInProgressPage/>} />
        <Route path='/MRManager/maintenancecompleted' element={<MaintenanceCompletedPage/>}/>
        
        <Route path='/MRManager/repairrequests' element={<RepairRequestsPage />} />
        <Route path='/MRManager/repairstatus' element= { <RepairStatusPage /> }/>
        <Route path='/MRManager/repairpending'  element={<RepairPendingPage/>} />
        <Route path='/MRManager/repairinprogress' element={<RepairInProgressPage/>} />
        <Route path='/MRManager/repaircompleted' element={<RepairCompletedPage/>}/>

        <Route path='/Technician' element ={<MRTechnicianDashboard/>} />
        <Route path='/Technician/maintenancerequest' element={<MRTechnicianMaintenanceRequestPage/>} />
        <Route path='/Technician/repairrequest' element={<MRTechnicianRepairRequestPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
