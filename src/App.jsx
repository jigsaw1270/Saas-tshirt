import Canvas from "./Canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";



function App() {
 

  return (
  <main className="transition-all ease-in app">
  <Home></Home>
  <Canvas></Canvas>
  <Customizer></Customizer>
   </main>
  )
}

export default App
