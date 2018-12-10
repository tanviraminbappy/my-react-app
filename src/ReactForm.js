import React, {Component}  from 'react';
class ReactForm extends Component{
    constructor(props) {
        super(props);
        this.state = {name: '',
        clinicalText: ''};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClinicalTextChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange = event => {
        this.setState({name: event.target.name.toUpperCase()});
    }
    handleClinicalTextChange = event => {
        this.setState({clinicalText: event.target.clinicalText});
    }

    handleSubmit = event => {
        alert('A name was submitted: ' + this.state.name + 'with text:' +this.state.clinicalText);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <hr/>
                <h1> React From</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" placeholder="Tanvir" value={this.state.name} onChange={this.handleNameChange} maxLength="30"/>
                    </label>
                    <label>
                        Cinical Text:
                        <input type="textarea" placeholder="Clinical Text" value={this.state.clinicalText} onChange={this.handleClinicalTextChange} maxLength="2000"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        );
    }
}

export default ReactForm;