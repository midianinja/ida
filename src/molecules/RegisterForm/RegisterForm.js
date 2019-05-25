import React from 'react'
import TextField from '@material-ui/core/TextField'
import styled from "styled-components"

import '../../templates/Main.scss'

const Container = styled.div`
`
const Form = styled.form`
`

export class RegisterForm extends React.Component { 
  render() { 
    return (
      <Container className="container">
        <Form validate autoComplete="off">
          <TextField
              id="name"
              label="Nome completo"
              defaultValue=""
              margin="normal"
              required
              fullWidth
          />

          <TextField
              id="email"
              label="E-mail"
              defaultValue=""
              type="email"
              margin="normal"
              required
              fullWidth
          />

          <TextField
              id="datebirth"
              label="Data de nascimento"
              type="date"
              margin="normal"
              defaultValue="1990-05-24"
              required
              fullWidth

          />

          <TextField
              id="phone"
              type="number"
              margin="normal"
              label="Telefone (Zap)"
              defaultValue=""
              required
              fullWidth
          />

          <TextField
              id="city"
              label="Cidade"
              defaultValue=""
              type="text"
              margin="normal"
              required
              fullWidth

          />  

          <TextField
              id="uf"
              label="Estado"
              defaultValue=""
              type="text"
              margin="normal"
              required
              fullWidth
          />  

          <TextField
              id="country"
              label="País"
              defaultValue=""
              type="text"
              margin="normal"
              required
              fullWidth
          /> 
        </Form>
      </Container>
    );
  }
}

export default RegisterForm;