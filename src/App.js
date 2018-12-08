import React, {Component} from 'react';
import Table from './Table';

class App extends Component {

    state = {
        employess: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ]
    };

    removeEmployee = index => {
        const { employess } = this.state;
    
        this.setState({
            employees: employess.filter((employee, i) => { 
                return i !== index;
            })
        });
    }
    
 
    render(){
     
     return(
         <div className="App">
            <h1>Employee Details</h1>
            <Table employeeInfo={this.employess} removeEmployee={this.removeEmployee}/>
         </div>
     );
     
 }

}

export default App;