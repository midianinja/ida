import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import Form from '../../molecules/Form/Form'


class Confidential extends React.Component { 
    state = { 
        userInfos: []
    }
  
    getUserData() { 
        fetch('https://randomuser.me/api/?nat=br')
        .then(res => res.json())
        .then((data) => {
            this.setState({ userInfos: data.results })
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
            <Grid item xs={12} sm={6} className="confidential">
               <Typography gutterBottom variant="h5">
                Informações Confidenciais
                </Typography>
                <Form userInfos={this.state.userInfos} />
            </Grid>
        ) 
    }
} 

export default Confidential