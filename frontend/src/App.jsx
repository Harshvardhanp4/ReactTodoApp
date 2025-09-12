
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/SignIn'

function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/login' element = {<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
