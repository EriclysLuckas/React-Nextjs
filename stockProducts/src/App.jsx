import './App.css'
import DashContent from './Components/DashContente/DashContent';
import HeaderPage from './Components/HeaderPage/HeaderPage';
import TableContent from './Components/TableContent/TableContent';

function App() {

  return (
      <>
      <HeaderPage/>
      <DashContent/>
      <div className = "Tables">
      <TableContent/></div>

      </>
  )
}

export default App
