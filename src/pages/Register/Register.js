import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import RegisterForm from '../../molecules/RegisterForm/RegisterForm'
import styled from "styled-components"
import rem from '../../utils/remConverter/remConverter.js'
import { withStyles } from '@material-ui/styles'

const styles = {
    item: {
      background: '#222222'
   },
}

const Logo = styled.img`
  display: block;
  height: ${rem(35)};
  width: ${rem(35)};
//   margin: ${rem(0)} 0;
//   @media (min-width: 992px) { 
//     margin: ${rem(45)} 0;
//   }
`

function Register(props) { 

    document.title = 'IDa | Cadastre-se'

    const { classes } = props;

    return( 
        <React.Fragment>
            <Grid>
                <Grid item xs={12} className={classes.item}>
                    <Logo src="/../assets/img/logo-branco.png" />
                    <Typography gutterBottom variant="h4" align="left">
                        Criando seu IDa
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" align="left">
                        Preencha o formulário para finalizar seu cadastro                        
                    </Typography>
                </Grid>
            </Grid>
            <RegisterForm />
        </React.Fragment>
    )
}

export default withStyles(styles)(Register);