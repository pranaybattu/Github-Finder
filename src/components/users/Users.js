import React from 'react'
import UserItems from './UserItems'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'


const Users= (props) => {  
    
    if(props.loading) {
        return <Spinner />
    }
    else {
        const user = props.users.map(item => {
            return <UserItems key={item.id} details={item}/>
        })
        return (
            <div style={userStyle}>
                {user}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
