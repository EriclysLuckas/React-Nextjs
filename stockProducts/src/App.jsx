import './App.css'
import DashContent from './Components/DashContente/DashContent';
import HeaderPage from './Components/HeaderPage/HeaderPage';
import TableContent from './Components/TableContent/TableContent';
import TableFaltantes from "./Components/TableContent/TableContentFaltantes"


function App() {

  return (
      <>
      <HeaderPage/>
      <DashContent/>
      <div className = "tables">
      <div className = "TableRec">
      <TableContent/>
      </div>
      <div className = "TableFaltantes">
      <TableFaltantes/>
      </div>

      
      
      </div>

      </>
  )
  
}

export default App
