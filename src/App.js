import React, {Component} from 'react';
import Clock from './react-basic/Clock';
import Toggle from './react-basic/Toggle';
import LoginContro from './react-basic/LoginControl';
import Comments from './react-basic/Comments';
import Page from './react-basic/Page';
import ReactList from './react-basic/ReactList';
import ReactForm from './react-basic/ReactForm';
import TemperatureCalculator from "./react-basic/TemperatureCalculator";

import IncorporationForm from './react-basic/IncorporationForm';


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

