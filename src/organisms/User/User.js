import React from 'react'
import { Grid } from '@material-ui/core'
import PublicCard from '../../molecules/PublicCard/PublicCard'

class User extends React.Component { 
    constructor(props) {
        super(props)
        this.state = { 
            name: "Ninja Hackerspace", 
            username: "@NinjaHackerspace", 
            occupation: "CEO", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec convallis dui.", 
            tags: "Midia Ninja, Ninja Hackerspace, Xepa, Emergências"
        }
    }

    render() { 
        return(
            <Grid item xs={12} sm={6} className="user">
                <PublicCard />
            </Grid>
        ) 
    }
} 

export default User