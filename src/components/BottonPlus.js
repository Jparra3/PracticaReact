import React from 'react'
import {Link} from 'react-router-dom'

function BottonPlus(props){
    return (
        <div className="card-body">
            <Link to="/my-page/page-new">
                <img className="Fitness-Add" alt="" src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" />
            </Link>  
        </div>        
    )
}

export default BottonPlus