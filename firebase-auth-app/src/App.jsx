import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './Components/Signup'
import SignIn from './Components/Signin'
import Main from './Components/Main'
import './index.css'
import EmergencyAssistance from "./components/EmergencyAssistance";

function App() {

  return (
    <div>
      <EmergencyAssistance />
    </div>
  )
}

export default App
