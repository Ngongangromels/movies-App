import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
 
interface Props {}

function NavBar() {
    

    return (
        <nav>
             <ul>
                <li><Link to=''>Program TV</Link></li>
                <li><Link to=''>Genre</Link></li>
                <li><Link to=''>Discover</Link></li>
             </ul>
            <div>
                <button>Log in</button>
                <button>Create count</button>
            </div>

        </nav>
    )
}

export default NavBar
