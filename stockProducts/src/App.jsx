import LayoutRoot from "./pages/LayoutRoot"
import { BaseProvider } from "./context/baseContext";
function App() {

  return (
    <BaseProvider>
      <LayoutRoot />

    </BaseProvider>


  )

}

export default App
