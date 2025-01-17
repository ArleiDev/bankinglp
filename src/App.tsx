import Main from "./components/Main"
import Navbar from "./components/Navbar"
import CartaoCorporativoGlobal from "./components/CartaoCorporativoGlobal"
import EncontreoCartaoPerfeitoParaVoce from "./components/EncontreoCartaoPerfeitoParaVoce"
import SegurancaeConfianca from "./components/SegurancaeConfianca"
import   ImageCarousel   from "./components/ui/SwipeCarousel"
import Footer from "./components/Footer"
function App() {

  return (
   <div className="bg-black">
   
    <Navbar></Navbar>
    <div className="pt-10">
    <Main></Main>
    <SegurancaeConfianca></SegurancaeConfianca>
    <EncontreoCartaoPerfeitoParaVoce/>
    <CartaoCorporativoGlobal></CartaoCorporativoGlobal>
<div className="py-10 bg-black">
<ImageCarousel /> 
</div>
      <div className="mt-20">
      <Footer></Footer>
      </div>
    </div>

   </div>
   
    
  )
}

export default App
