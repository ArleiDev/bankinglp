import Main from "./components/Main"
import Navbar from "./components/Navbar"
import CartaoCorporativoGlobal from "./components/CartaoCorporativoGlobal"
import EncontreoCartaoPerfeitoParaVoce from "./components/EncontreoCartaoPerfeitoParaVoce"
import SegurancaeConfianca from "./components/SegurancaeConfianca"
function App() {

  return (
   <div className="">
   
    <Navbar></Navbar>
    <div className="py-10">
    <Main></Main>
    <SegurancaeConfianca></SegurancaeConfianca>
    <EncontreoCartaoPerfeitoParaVoce/>
    <CartaoCorporativoGlobal></CartaoCorporativoGlobal>
    </div>

   </div>
   
    
  )
}

export default App
