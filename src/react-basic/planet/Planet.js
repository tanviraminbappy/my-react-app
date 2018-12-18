import React from 'react';

class Planet extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        let planets = this.props.state.planets;
        let optionItems = planets.map((planet) =>
            <option key={planet.name}>{planet.name}</option>
        );

        return (
            <div>
                <select>
                    {optionItems}
                </select>
            </div>
        )
    }
}

export default Planet;