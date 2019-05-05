import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const PublicForm = (props) => {
  const { classes } = props;
  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.value });
  // };

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
      />

      <TextField
        id="standard-password-input"
        label="Senha"
        type="password"
        className={classes.textField}
        autoComplete="current-password"
        margin="normal"
      />

      <Divider />

      <TextField
        required
        id="standard-job"
        label="Profissão"
        defaultValue="CEO"
        className={classes.textField}
        margin="normal"
      />

      <TextField
        required
        id="standard-nationality"
        label="Nacionalidade"
        defaultValue="Brasileira"
        className={classes.textField}
        margin="normal"
      />

      <TextField
        required
        id="standard-address"
        label="Endereço"
        defaultValue="Carlos Brant, 8 - Largo dos Guimarães"
        className={classes.textField}
        margin="normal"
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
      />
    </form>
  )
}

PublicForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PublicForm);