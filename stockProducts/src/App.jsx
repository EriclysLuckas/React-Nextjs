import './App.css'
import DashContent from './Components/DashContente/DashContent';
import HeaderPage from './Components/HeaderPage/HeaderPage';
import TableContent from './Components/TableContent/TableContent';
import TableContentF from './Components/TableContent/TableContentFaltantes';

function App() {

  return (
      <>
      <HeaderPage/>
      <DashContent/>
      <div className = "Tables">
      <TableContent/>
      <TableContentF/>

      </div>
      </>
  )
}

export default App
