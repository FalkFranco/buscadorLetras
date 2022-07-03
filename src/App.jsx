import AppLetras from "./components/AppLetras"
import { LetrasProvider } from './context/LetrasProvider'
function App() {

  return (
    <LetrasProvider > {/* EL PROVIDER SIEMPRE DEBE RODEAR NUESTRA APP PARA QUE TODOS LOS COMPONENTES TENGAN ACCESO */}
      <AppLetras />
    </LetrasProvider>
  ) 
}

export default App
