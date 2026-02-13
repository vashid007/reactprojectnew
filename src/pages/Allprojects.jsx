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

        <div>
          
        </div>

      </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Allprojects
