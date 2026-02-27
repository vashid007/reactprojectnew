import React from 'react'
import UserProjects from '../components/UserProjects'
import UserProfile from '../components/UserProfile'
import AddProject from '../components/AddProject'


function Dashboard() {
  return (
    <>

    <div className="container py-5">
      <div className="">
        <h1>Welcome <span style={{ color: '#226e01' }}> Vashid</span></h1>
      </div>
      <div className="row py-3 ">
        <div className="col-md-7 shadow-lg border rounded-3 p-5 bg-white ">
          <div className="pb-4 d-flex justify-content-between">
            <h2>My projects</h2>
            <AddProject />
          </div>
          <UserProjects />
          <UserProjects />

        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 shadow-lg border rounded-3 p-3 bg-white">
          <UserProfile />
        </div>
      </div>
    </div>
    
    
    
    
    </>
  )
}

export default Dashboard
