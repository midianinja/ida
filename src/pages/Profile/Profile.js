import React from 'react'
import Grid from '@material-ui/core/Grid'
import User from '../../organisms/User/User';
import Confidential from '../../organisms/Confidential/Confidential';
import styled from "styled-components";

import rem from '../../atoms/Functions.js'

const ProfileContainer = styled.div`
    margin: ${rem(32)} auto;
`

class Profile extends React.Component { 

    constructor(props) { 
        super(props)
        this.state = { 
        }
    }

    componentDidMount() { 
        document.title = 'IDa | Perfil'
    }

    render() { 
        return( 
            <ProfileContainer>
                <Grid container spacing={16}>
                    <User />
                    <Confidential />
                </Grid>
            </ProfileContainer>
        )
    }
}

export default Profile