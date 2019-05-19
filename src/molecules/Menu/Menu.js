import React from "react"

import { AppBar, Toolbar, IconButton, Grid }  from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import styled from "styled-components"

import './Menu.scss'
import rem from '../../atoms/Functions.js'

const Logo = styled.img`
  display: block;
  height: ${rem(48)};
  margin-left: ${rem(24)};
  width: ${rem(48)};
`

const Button = styled.button`
  display: none;
  @media (min-width: 768px) { 
      background-color: #00a583;
      border-color: transparent;
      border-radius: ${rem(20)};
      color: #fff;
      cursor: pointer;
      display: block;
      font-size: ${rem(14)};
      font-weight: 600;
      padding: ${rem(12)} ${rem(30)};
  }
`

class Menu extends React.Component {

  state = { 
      left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  }

  render() {
    return (
      <AppBar position="static" className="menu">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Grid container spacing={8}>
          <Grid item sm={10}>
            <Logo src="/../assets/img/logo-branco.png" />
          </Grid>
          <Grid item sm={2}>
            <Button>NinjaHackerSpace</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    );
  }
}

export default Menu
