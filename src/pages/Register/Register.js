import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import RegisterForm from '../../molecules/RegisterForm/RegisterForm'
import styled from "styled-components"
import rem from '../../utils/remConverter/remConverter.js'
import { withStyles } from '@material-ui/styles'

const styles = {
    item: {
      background: '#222222',
      padding: `${rem(30)} ${rem(20)}`
   },
   title: { 
       fontSize: `${rem(20)}`
   }

}

const Logo = styled.img`
  display: block;
  height: ${rem(35)};
  width: ${rem(35)};
  margin-bottom: ${rem(20)};
`

function Register(props) { 

    document.title = 'IDa | Cadastre-se'

    const { classes } = props;

    return( 
        <React.Fragment>
            <Grid>
                <Grid item xs={12} className={classes.item}>
                    <div className="container">
                        <Logo src="/../assets/img/logo-branco.png" />
                        <Typography gutterBottom variant="h4" align="left" className={classes.title}>
                            Criando seu IDa
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" align="left">
                            Preencha o formulário para finalizar seu cadastro                        
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <RegisterForm />
        </React.Fragment>
    )
}

export default withStyles(styles)(Register);