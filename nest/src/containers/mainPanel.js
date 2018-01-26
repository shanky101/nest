import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';


//Component Imports
import DropDown from './dropDown';

//Helper Functions
import * as appContent from '../util/appContent';

//Styling Imports
import 'react-select/dist/react-select.css';


class MainPanel extends React.Component {
    constructor(props) {
        super(props);

        this.onButtonClickSubmit = this.onButtonClickSubmit.bind(this);
    }

    onButtonClickSubmit() {
        this.props.fetchData();
    }


    render() {

        const style = {
            textAlign: 'center',
            backgroundColor: '#E0F2F1',
            width: '100vw',
            height: '100vh',
          };
 
        
        return(
            <Card style={style}>
                <CardText>
                <h3 style={{ fontSize: '1.5rem' }}> {appContent.heading} </h3>
                </CardText>
                <DropDown />
                <RaisedButton label="Fetch" primary={true}  onClick={this.onButtonClickSubmit} style={{ width: '2vw', marginRight: '10vw', marginTop: '40vh'}} />
            </Card>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData }, dispatch);
}


export default connect(null, mapDispatchToProps)(MainPanel);
