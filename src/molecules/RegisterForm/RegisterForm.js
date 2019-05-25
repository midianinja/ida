import React from 'react'
import TextField from '@material-ui/core/TextField'
import styled from "styled-components"

import '../../templates/Main.scss'

const Container = styled.div`
`
const Form = styled.form`
`

function RegisterForm() { 
  const [values, setValues] = React.useState({
    country: 'Brasil',
    city: 'Rio de Janeiro',
    uf: 'RJ'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

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
          id="country"
          select
          label="País"
          value={values.country}
          onChange={handleChange('country')}
          SelectProps={{
            native: true,
          }}
          margin="normal"
          fullWidth
        >
        {/* {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
        </TextField>

        <TextField
          id="uf"
          select
          label="Estado"
          value={values.uf}
          onChange={handleChange('uf')}
          SelectProps={{
            native: true,
          }}
          margin="normal"
          fullWidth
        >
        {/* {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
        </TextField>

        <TextField
          id="city"
          select
          label="Cidade"
          value={values.city}
          onChange={handleChange('city')}
          SelectProps={{
            native: true,
          }}
          margin="normal"
          fullWidth
        >
        {/* {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))} */}
        </TextField>
      </Form>
    </Container>
  );

}


export default RegisterForm;