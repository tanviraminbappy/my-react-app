import React, {Component} from 'react';
import './drop-down.css';


class Dropdown extends Component {
    constructor(props){
        super(props);

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <div  className="dropdown">
                <div className="button" onClick={this.showDropdownMenu}> My Setting </div>

                { this.state.displayMenu ? (
                        <ul>
                            <li><a className="active" href="#Create Page">Create Page</a></li>
                            <li><a href="#Manage Pages">Manage Pages</a></li>
                            <li><a href="#Create Ads">Create Ads</a></li>
                            <li><a href="#Manage Ads">Manage Ads</a></li>
                            <li><a href="#Activity Logs">Activity Logs</a></li>
                            <li><a href="#Setting">Setting</a></li>
                            <li><a href="#Log Out">Log Out</a></li>
                        </ul>
                    ):
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default Dropdown;


// import React from "react";
// import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
// import superagent from "superagent";
//
// class BootstrapSelect extends React.Component {
//
//     constructor(props) {
//         super(props);
//
//         this.toggle = this.toggle.bind(this);
//         this.changeValue = this.changeValue.bind(this);
//         this.state = {
//             actions: [],
//             dropDownValue: 'Select action',
//             dropdownOpen: false
//         };
//     }
//
//     toggle(event) {
//
//         this.setState({
//             dropdownOpen: !this.state.dropdownOpen
//         });
//     }
//
//     changeValue(e) {
//         this.setState({dropDownValue: e.currentTarget.textContent});
//         let id = e.currentTarget.getAttribute("id");
//         console.log(id);
//     }
//
//
//     componentDidMount() {
//         superagent
//             .get('/getActions')
//             .type('application/json; charset=utf-8')
//             .end(function (err, res) {
//                 console.log(res.body);
//                 this.setState({actions: res.body});
//             }.bind(this));
//
//     }
//
//     render() {
//         return (
//             <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                 <DropdownToggle caret>
//                     {this.state.dropDownValue}
//                 </DropdownToggle>
//                 <DropdownMenu>
//                     {this.state.actions.map(e => {
//                         return <DropdownItem id={e.id} key={e.id} onClick={this.changeValue}>{e.name}</DropdownItem>
//                     })}
//                 </DropdownMenu>
//
//             </ButtonDropdown>
//         );
//     }
//
// }
//
// export default BootstrapSelect;



// getNavs = () => {
//     const listContent = this.state.navItems.map((item, index) => {
//         // const children = <ListGroup>
//         //     {item.annotations.map((child, childIndex) => <ListGroupItem key={childIndex}>{child.name}</ListGroupItem>)}
//         // </ListGroup>;
//
//         return <ListGroupItem key={index}>
//             {item.type}
//             {/*<br/>*/}
//             {/*{children}*/}
//         </ListGroupItem>
//     });
//     return (
//         <ListGroup>
//             {listContent}
//         </ListGroup>
//     )
// }
