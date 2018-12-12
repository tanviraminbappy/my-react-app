import React, {Component} from 'react';
import Topic from "./Topic";
import Counter from "./Counter";

class Welcome extends Component {
    render(){
        return(
            <div>
                <p>Today You will learn</p>
                <Topic name="props"/>
                <Topic name="State"/>
                <Counter/>
            </div>
        );
    }
}

export default Welcome;