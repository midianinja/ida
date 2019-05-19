import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import Form from '../../molecules/Form/Form'


class Confidential extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = { 
        }
    }

    render() { 
        return(
            <Grid item xs={12} sm={6} className="confidential">
               <Typography gutterBottom variant="h5">
                Informações Confidenciais
                </Typography>
                <Form />
            </Grid>
        ) 
    }
} 

export default Confidential