import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartShopping, FaMoon } from "react-icons/fa6";
import OffCanvas from "./offcanvas";

export default class nav extends Component {
    state = {
        show: false,
    };

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <OffCanvas
                        products={this.props.products}
                        show={this.state.show}
                        handleClose={this.handleClose}
                        quantityIncrement={this.props.quantityIncrement}
                        quantityDecrement={this.props.quantityDecrement}
                        deleteProduct={this.props.deleteProduct}
                        emptyList={this.props.emptyList}
                        quantityReset={this.props.quantityReset}
                    ></OffCanvas>
                    <Navbar.Brand href="#home">SHOP</Navbar.Brand>
                    <Nav className="ms-auto">
                        <div className="d-flex">
                            <button
                                onClick={this.props.changeTheme}
                                className="btn"
                            >
                                <FaMoon
                                    color={
                                        this.props.isDark ? "white" : "black"
                                    }
                                ></FaMoon>
                            </button>
                            <Nav.Link onClick={this.handleShow} href="#cart">
                                <FaCartShopping></FaCartShopping>{" "}
                                <span>{this.props.products.length}</span>
                            </Nav.Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
