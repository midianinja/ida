import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import RegisterForm from '../../molecules/RegisterForm/RegisterForm'

class Register extends React.Component { 

    constructor(props) { 
        super(props)
        this.state = {}
    }

    componentDidMount() {
        document.title = 'IDa | Cadastre-se'
    }

    render() { 
        return( 
            <div className="register">
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5">
                            Cadastre-se
                        </Typography>
                        <RegisterForm />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Register