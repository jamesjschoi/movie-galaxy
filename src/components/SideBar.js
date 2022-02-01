import { bubble as Menu } from 'react-burger-menu'
import React from "react";
import MobileNavMain from './MobileNavMain';

class Burger extends React.Component {
 constructor (props) {
   super(props)
   this.state = {
     menuOpen: false
   }
 }
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  showSettings (event) {
    event.preventDefault();
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu  right width = { "80%" } disableAutoFocus>
        <MobileNavMain onClick = {() => this.closeMenu()} />
      </Menu>
    );
  }
}

export default Burger;