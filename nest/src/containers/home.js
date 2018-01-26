import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

//Material UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

//Icon Imports
import ActionHome from 'material-ui/svg-icons/action/home';
import Dashboard from 'material-ui/svg-icons/action/dashboard';

//Component Imports 
import MainPanel from './mainPanel';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => {
        this.setState({open: false}); 
      }
    
    
  render() {
    const linkStyle = {'textDecoration': 'none'}
    return (
        <div>
          <MuiThemeProvider>

          <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <AppBar 
                  title="Nestaway Demo" 
                  showMenuIconButton={true}
                  onLeftIconButtonClick= {() => {
                    this.setState({open: true});
                  }}    
                  style={{ 
                      backgroundColor: '#2196F3',
                  }}
                /> 
                <Drawer
                  docked={false}
                  width={200}
                  open={this.state.open}
                  onRequestChange={(open) => this.setState({open})}
                >
                  <MenuItem onClick={this.handleClose} leftIcon={<ActionHome />} >Home</MenuItem>
                </Drawer>  
              </Col>
          </Row>

          <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <MainPanel />
              </Col>
          </Row>

          </MuiThemeProvider>
        </div>
    );
  }
}

export default Home;

