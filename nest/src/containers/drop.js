import React from 'react';
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import IconMenu from 'material-ui/IconMenu';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Popover from 'material-ui/Popover';




class Drop extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      show: false,
      popOverOpen: false,
      menuContent: [],
    };

  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ 
        value: event.target.value, 
        show: true,
        popOverOpen: true,
        anchorEl: event.currentTarget,
    })
  };


  handleRequestClose = () => {
    this.setState({
        popOverOpen: false,
    });
  };

  handleKeypress = (ev) => {
        let enteredValue = this.state.value;
        console.log(enteredValue);
        console.log(`Pressed keyCode ${ev.key}`);
        if (ev.key === 'Enter') {
            //this.setState({ menuContent: [...this.state.myArray, enteredValue] })
            ev.preventDefault();
            //console.log(this.state.menuContent);
        }
    };

  render() {
    const style = {
        display: 'inline-block',
        margin: '0 0 0 0',
      };

    return (
      <div>
      
        <TextField
          id="text-field-controlled"
          value={this.state.value.bind}
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress.bind(this)}
          style={{ width: '12vw'}}
        >
        </TextField>
        <Popover
      open={this.state.popOverOpen}
      anchorEl={this.state.anchorEl}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onRequestClose={this.handleRequestClose}
      maxHeight={20}
      useLayerForClickAway={true}
    >
      <Menu>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help &amp; feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Sign out" />
      </Menu>
    </Popover>

    
      </div>
    );
  }
}

export default Drop;