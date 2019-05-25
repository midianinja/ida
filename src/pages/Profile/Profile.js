import React from 'react'
import Grid from '@material-ui/core/Grid'
import User from '../../organisms/User/User'
import styled from "styled-components"
import Confidential from '../../organisms/Confidential/Confidential'

import '../../templates/Main.scss'
import rem from '../../utils/remConverter/remConverter.js'


const ProfileContainer = styled.div`
    margin: ${rem(32)} auto;
`

class Profile extends React.Component { 

    componentDidMount() { 
        document.title = 'IDa | Perfil'
    }

    render() { 
        return( 
            <ProfileContainer className="container">
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={6} className="confidential">
                        <User />
                    </Grid>
                    <Grid item xs={12} sm={6} className="confidential">
                        <Confidential />
                    </Grid>
                </Grid>
            </ProfileContainer>
        )
    }
}

export default Profile