import React from 'react'
import { Grid } from '@material-ui/core'
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
            <Grid item xs={12} sm={6} className="user">
                <PublicCard users={this.state.users}/>
            </Grid>
        ) 
    }
} 

export default User