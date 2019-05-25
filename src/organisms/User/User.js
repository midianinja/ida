import React from 'react'
import PublicCard from '../../molecules/PublicCard/PublicCard'

class User extends React.Component { 
    state = { 
      users: []
    }

    getUserData() { 
        fetch('https://randomuser.me/api/?nat=br')
        .then(res => res.json())
        .then((data) => {
          this.setState({ users: data.results })
        })
        .catch((error) => { 
            console.error(error)
        })
    }

    componentDidMount() { 
        this.getUserData()
    }

    render() { 
        return(
            <React.Fragment>
                <PublicCard users={this.state.users}/>
            </React.Fragment>
        ) 
    }
} 

export default User