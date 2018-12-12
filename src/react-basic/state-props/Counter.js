import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {counter: 0,}
    }

    increment = () => {
        this.setState(
            {counter: this.state.counter + 1}
        );
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Like: {this.state.counter} </button>
            </div>

        );
    }
}

export default Counter;

