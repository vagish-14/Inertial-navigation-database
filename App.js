import './App.css';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />}/>
          {user&&<Route path='/dashboard' exact element={<Dashboard />}/>}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
