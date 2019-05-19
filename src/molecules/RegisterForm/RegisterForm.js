import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chip: {
    margin: theme.spacing.unit*0.6,
  }, 
  bigAvatar: {
    marginBottom: 20,
    marginTop: 20,
    width: 150,
    height: 150,
  },
});

const RegisterForm = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <form noValidate autoComplete="off">
            <Grid container justify="center">
                <Avatar src="http://lorempixel.com/500/500/people/" className={classes.bigAvatar} />
            </Grid>
            <TextField
                id="standard-email"
                label="Email"
                margin="normal"
                className={classes.textField}
                defaultValue="ninjahackerspace@gmail.com"
                InputProps={{
                readOnly: true,
                }}
                fullWidth
            />

            <TextField
                id="standard-password-input"
                label="Senha"
                type="password"
                className={classes.textField}
                autoComplete="current-password"
                margin="normal"
                fullWidth
            />

            <TextField
                required
                id="standard-job"
                label="Profissão"
                defaultValue="CEO"
                className={classes.textField}
                margin="normal"
                fullWidth
            />

            <TextField
                required
                id="standard-nationality"
                label="Nacionalidade"
                defaultValue="Brasileira"
                className={classes.textField}
                margin="normal"
                fullWidth
            />

            <TextField
                required
                id="standard-address"
                label="Endereço"
                defaultValue="Carlos Brant, 8 - Largo dos Guimarães"
                className={classes.textField}
                margin="normal"
                fullWidth
            />

            <TextField
                id="date"
                label="Data de nascimento"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                fullWidth
            />
        </form>
      </CardContent>
    </Card>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterForm);