import React, {Component} from 'react';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginContro from './LoginControl';
import Comments from './Comments';
import Page from './Page';
import ReactList from './ReactList';
import ReactForm from './ReactForm';
import TemperatureCalculator from "./TemperatureCalculator";

import IncorporationForm from './IncorporationForm';


class App extends Component {


    render() {


        return <div>
            <Comments/>
            <Clock/>
            <Toggle/>
            <LoginContro/>
            <Page/>
            <ReactList/>
            <ReactForm/>
            <TemperatureCalculator/>
            {/*<IncorporationForm/>*/}


        </div>;
    }

}

export default App;

