import React from 'react'
import PropTypes from 'prop-types'

const UserItems = (props) => {    
    return (
        <div className='card text-center'>
            <img src={props.details.avatar_url} alt="" className='round-img' style={{width:'60px'}}/>
            <h3>{props.details.login}</h3>
            <div>
                <a href={props.details.html_url} className="btn btn-dark btn-sm my-1">more</a>
            </div>
        </div>
    )
}



UserItems.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItems


