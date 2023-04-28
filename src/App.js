import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<EmployeeList/>} />
        <Route exact path='/employeeform' element={<EmployeeForm/>} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
