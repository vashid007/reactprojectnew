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
import UserProfile from './components/UserProfile'
import AddProject from './components/AddProject'
import EditProject from './components/EditProject'
import UserProjects from './components/UserProjects'


function App() {
  return (
    <>
      <Header />


      
      {/* <ProjectCard /> */}

      

      {/* <PageNotFound /> */}
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Allprojects" element={<Allprojects />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Auth />} />
        <Route path="/Register" element={<Auth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
      {/* <UserProfile /> */}

      {/* < AddProject /> */}

      {/* <EditProject /> */}

      < UserProjects />
      <Footer />

    </>
  )
}

export default App
