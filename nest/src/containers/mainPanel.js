import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';

//Helper Functions
import * as appContent from '../util/appContent';


class MainPanel extends React.Component {
    constructor(props) {
        super(props);

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
            </Card>
        );
    }
}

export default MainPanel;