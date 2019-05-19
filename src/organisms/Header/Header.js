import React from 'react';
import Grid from '@material-ui/core/Grid'
import Menu from '../../molecules/Menu/Menu';

class Header extends React.Component {

  render() {
    return(
      <div className="header">
        <Grid container spacing={0}>
            <Grid item xs={12}>
              <Menu />
            </Grid>
        </Grid>
      </div>
    )
  }
}

export default Header