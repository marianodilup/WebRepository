import { useContext } from "react"
import { TranslationContext } from "../context/intl.context" // importas contexto 
import Header from "./Header/Header";


function App() {
  // quiero usar la función changelocale del contexto translationContext
  const {changelocale} = useContext(TranslationContext);

  const handleSelect =(ev)=>{
    changelocale(ev.target.value);
  }
  return (

   
    <div>
      <h1>Multilenguaje</h1>
      <select name="" id="" onChange={handleSelect}>
      
      <option value="es">Español</option>
      <option value="en">Inglés</option>
      </select>
      <Header/>
    </div>
 
  )
}

export default App
