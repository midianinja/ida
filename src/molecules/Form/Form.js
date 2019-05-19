import React from 'react'
import TextField from '@material-ui/core/TextField'

const Form = ({userInfos}) => {
  return (
    <form noValidate autoComplete="off">
      {userInfos.map((userInfo, key) => (
        <React.Fragment key={key}>
          <TextField
            id="standard-email"
            label="Email"
            margin="normal"
            defaultValue={userInfo.email}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />

          <TextField
            id="standard-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            margin="normal"
            defaultValue={userInfo.login.password}
            fullWidth
          />

          <TextField
            required
            id="standard-job"
            label="Profissão"
            defaultValue="CEO"
            margin="normal"
            fullWidth
          />

          <TextField
            required
            id="standard-nationality"
            label="Nacionalidade"
            defaultValue="Brasileira"
            margin="normal"
            fullWidth
          />

          <TextField
            required
            id="standard-address"
            label="Endereço"
            defaultValue={ userInfo.location.street } 
            margin="normal"
            fullWidth
          />

          <TextField
            id="date"
            label="Data de nascimento"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </React.Fragment>
      ))}
    </form>
  )
}

export default Form