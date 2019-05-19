import React from 'react'
import Grid from '@material-ui/core/Grid'
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
        document.title = 'IDa | Login'
    }

    render() { 
        return( 
            <ProfileContainer>
                <Grid container spacing={16}>
            
                </Grid>
            </ProfileContainer>
        )
    }
}

export default Profile