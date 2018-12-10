import React, {Component} from 'react';
function WarningBanner(props){
    if(!props.warn){
        return null;
    }

    return (
        <div className="warning">
            <strong>Warning!!!</strong>
        </div>
    );
}

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));

    }

    render(){
        return(
            <div>
                <h1>Warning Page</h1>
            <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning? 'Hide' : 'Show'}
                </button>
            </div>

        );
    }

}

export default Page;