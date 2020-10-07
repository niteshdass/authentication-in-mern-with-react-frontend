import React from 'react'
import { isAuthenticate } from '../auth.js'
import Layout from '../core/Layout'

const UserDashboard = ()=> {

const {user:{_id,name,email,role}} = isAuthenticate()
      return (
            <Layout title="User Dashboard" description="User Dashboard Node react E-comerce App"
            className="container"
            >
                  <div className="card mb-5">
                        <h3 className="card-header">User Information</h3>
                        <ul className="list-group">
      <li className="list-group-item">{name}</li>
      <li className="list-group-item">{email}</li>
      <li className="list-group-item">{ role===1 ? 'Admin':'Subscribar'}</li>
                        </ul>
                  </div>

                  <div className="card mb-5">
                        <h3 className="card-header">User History</h3>
                        <ul className="list-group">
                              <li className="list-group-item">Name</li>
                             
                        </ul>
                  </div>
            </Layout>
      )
}

export default UserDashboard