import React from 'react';
import Select from 'react-select';
import { Creatable } from 'react-select';

//Styling Imports
import '../styles/dropDownContainer.css';


class DropDown extends React.Component {

    constructor(props) {
        super(props);

        this.state = { selectedOption: ''}
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });

        // const { multi } = this.state;
        // if(multi) {
        //     this.setState({ multiValue: value});
        // } else {
        //     this.setState({value});
        // }
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
                options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'Three' },
                ]}
            />
        </div>

        );
    }
    
}

export default DropDown;

value={multi ? multiValue : value}
                multi={true}


//                 import React from 'react';
// import Select from 'react-select';
// import { Creatable } from 'react-select';

// //Styling Imports
// import '../styles/dropDownContainer.css';


// class DropDown extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = { 
//             selectedOption: '',
//             multi: true,
//             multiValue: [],
//             options: [
//                 { value: 'one', label: 'One' },
//                 { value: 'two', label: 'Two' },
//                 { value: 'three', label: 'Three' },
//             ],
//             value: '',
//         }
//     }

//     handleChange = (selectedOption) => {
//         this.setState({ selectedOption });

//         const { multi } = this.state;
//         if(multi) {
//             this.setState({ multiValue: value});
//         } else {
//             this.setState({value});
//         }
//     }

//     render() {
//         const { selectedOption } = this.state;
//         const value = selectedOption && selectedOption.value;
//         const { multi, multiValue, options, value } = this.state;
//         return(
//         <div className="drop-down-style">
//             <Select.Creatable
//                 name="select-field"
//                 onChange={this.handleChange}
//                 options={this.state.options}
//                 value={multi && multiValue}
//             />
//         </div>

//         );
//     }
    
// }

// export default DropDown;

