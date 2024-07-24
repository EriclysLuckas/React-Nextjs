import './App.css'
import DashContent from './Components/DashContente/DashContent';
import HeaderPage from './Components/HeaderPage/HeaderPage';
import TableContent from './Components/TableContent/TableContent';
import Utils from './Utils/Utils';

function App() {

  return (
      <>
      <HeaderPage/>
      <DashContent/>
      <div className = "Tables">
      <TableContent/></div>
      <Utils/>

      </>
  )
}

export default App
