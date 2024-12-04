import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../Assets/1.jpg"
export default class card extends Component {
    render() {
        return (
            <div className="p-2 col-12 col-sm-6 col-md-4 col-lg-3">
                <Card style={{height: 'max-content'}}>
                    <Card.Img variant="top" src={img} style={{height: '18rem', objectFit: 'cover'}}/>
                    <Card.Body>
                        <Card.Title>{this.props.product.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button onClick={() => {this.props.addProduct(this.props.product)}} variant="primary">Add To Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
