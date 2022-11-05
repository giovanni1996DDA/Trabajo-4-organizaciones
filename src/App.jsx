import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLayout from './Layouts/NavLayout'
import Integrantes from './Pages/Integrantes';
import Punto1 from './Pages/Punto1';
import Punto2 from './Pages/Punto2';
import Punto3 from './Pages/Punto3';
import Punto4 from './Pages/Punto4';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout/>}>
            <Route index element={<Integrantes/>}/>
            <Route path="Punto1/" element={<Punto1/>}/>
            <Route path="Punto2/" element={<Punto2/>}/>
            <Route path="Punto3/" element={<Punto3/>}/>
            <Route path="Punto4/" element={<Punto4/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
