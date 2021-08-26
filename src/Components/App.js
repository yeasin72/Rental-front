import './App.css';
import Navigation from './Navigation/Navigation'
// import Login from './Login/Login';
// import Units from './Units/Units';
import Unit from './Unit/Unit'
// import Apertments from './Apertments/Apertments'
// import AddApt from './AddApt/AddApt'
import AddUnit from './AddUnit/AddUnit'
import Dashboard from './Dashboard/Dashboard'
import Topbar from './Topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navigation />
      <Dashboard />
      {/* <Login /> */}
      {/* <Units /> */}
      <Unit />
      {/* <Apertments /> */}
      {/* <AddApt /> */}
      <AddUnit />
    </div>
  );
}

export default App;
