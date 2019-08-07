import React, { Component } from 'react';
import Status from './Status';
import Index from './Index';
import { BrowserRouter as Router, Route,  NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

class DoNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">do</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to="/status/" activeClassName="active">Status</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            
            <Route path="/" exact component={Index} />
            <Route path="/status/" component={Status} />
            </Router>
        );
    }
}

export default DoNavbar;