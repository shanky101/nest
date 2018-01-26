import React from 'react';
import Select from 'react-select';
import { Creatable } from 'react-select';

//Redux
import { connect } from 'react-redux';

//Styling Imports
import '../styles/dropDownContainer.css';


class DropDown extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            selectedOption: '', 
            list: [],
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
                { value: 'three', label: 'Three' },
            ],
        }
    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.setState({ list: this.props.data })
        //console.log(this.state.list);

        
    }

    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        return(
        <div className="drop-down-style">
            <Select.Creatable
                name="select-field"
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={this.state.options}
            />
        </div>

        );
    }
    
}

function mapStateToProps( {data}) {
    return { data };
}

export default connect(mapStateToProps)(DropDown);