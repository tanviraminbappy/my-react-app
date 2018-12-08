import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
 render(){
     const employees = [
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
    ];
     return(
         <div className="App">
            <h1>Employee Details</h1>
            <Table employeeInfo={employees}/>
         </div>
     );
     
 }

}

export default App;