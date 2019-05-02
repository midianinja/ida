import React from 'react';
import { Typography, Grid } from '@material-ui/core'
import HeadBar from '../Shared/HeadBar'
import PublicCard from './PublicCard'
import PublicForm from './PublicForm'

const Page = () => {
  return (
    <>
      <HeadBar></HeadBar>
      <Grid container spacing={32} justify="center">
        <Grid item xs={3}>
          <Typography gutterBottom variant="h5" component="h2">
            Perfil Público
          </Typography>
          
          <PublicCard></PublicCard>
        </Grid>

        <Grid item xs={3}>
          <Typography gutterBottom variant="h5" component="h2">
            Informações Confidenciais
          </Typography>

          <PublicForm></PublicForm>
        </Grid>
      </Grid>
    </>
  )
}

export default Page