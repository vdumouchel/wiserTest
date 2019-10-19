import React from 'react'
import { Link } from 'react-router-dom'


const Profile = () => {
    return(
        <div>
            <span>Profile</span>
            <nav>
                <ol>
                <li><Link to="home">Home</Link></li>
                <li><Link to="app">App</Link></li>
                </ol>
            </nav>  
        </div>
    )
}

export default Profile