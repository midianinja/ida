import React from 'react'
import { Typography } from '@material-ui/core'
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
            <React.Fragment>
                <Typography gutterBottom variant="h5">
                    Informações Confidenciais
                </Typography>
                <Form userInfos={this.state.userInfos} />
            </React.Fragment>
        ) 
    }
} 

export default Confidential