import { Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Allprojects from './pages/Allprojects'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import ProjectCard from './components/ProjectCard'


function App() {
  return (
    <>
      <Header />


      
      {/* <ProjectCard /> */}

      




      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Allprojects" element={<Allprojects />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Auth />} />
        <Route path="/Register" element={<Auth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      

      <Footer />

    </>
  )
}

export default App
