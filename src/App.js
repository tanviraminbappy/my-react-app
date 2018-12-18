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

import Welcome from './react-basic/state-props/Welcome';
import WikiApi from './react-basic/WikiApi';
import PostList from './react-basic/posts/PostList';
import Dropdown from './react-basic/dropdown-menu/Dropdown';
import './App.css';
// import PlanetSearch from './react-basic/planet/PlanetSearch';

class App extends Component {


    render() {


        return <div>
            {/*<Comments/>*/}
            {/*<Clock/>*/}
            {/*<Toggle/>*/}
            {/*<LoginContro/>*/}
            {/*<Page/>*/}
            <ReactList/>
            {/*<ReactForm/>*/}
            {/*<TemperatureCalculator/>*/}
            {/*<IncorporationForm/>*/}
            {/*<PlanetSearch/>*/}

            {/*<Welcome/>*/}
            {/*<WikiApi/>*/}
            {/*<PostList/>*/}
            {/*<Dropdown/>*/}

        </div>;
    }

}

export default App;

