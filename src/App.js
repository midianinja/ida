import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import './App.css';
export default class App extends Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <Typography variant='display1' align='center' className='typo' gutterBottom>
          Exercises
        </Typography>
      </div>
    )
  }
}