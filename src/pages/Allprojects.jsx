import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Allprojects() {
  return (
    <>
    <div className='projects-page' style={{ minHeight: "60vh", backgroundColor: "#e3e5e8" }}>
      <div className="container pt-5 pb-5 align-items-center">
        <div className='text-center pb-5 '> 
          <h2 className='text-warning'>All Projects</h2>
          </div>
        <div className="row g-5 d-flex align-items-center">
          <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div>
          {/* <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div>
          <div className="col-md-4">
            <ProjectCard />
          </div> */}
        </div>

        <div className="d-flex flex-column align-items-center text-center">
  <img className="img-fluid w-50 h-50 mb-3 mt-5" 
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fanimation%2F2023%2F06%2F13%2F15%2F12%2F15-12-30-710_512.gif&f=1&nofb=1&ipt=7bc7533e99279bc33abdab9dc63ce7c1adba42683b288631e6140363772568fd"
    alt=""
  />

  <div className="d-flex align-items-center gap-2">
    <button type="submit" className="btn btn-secondary">
      Log In
    </button>
    <h5 className="mb-0">To view all projects</h5>
  </div>
</div>


      </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Allprojects
