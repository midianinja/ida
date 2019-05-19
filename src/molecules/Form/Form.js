import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
});

const Form = (props) => {
  const { classes } = props;

  return (
    <form noValidate autoComplete="off">
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
  )
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);