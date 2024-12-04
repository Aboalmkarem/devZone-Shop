import React, { Component } from "react";
import Card from "./card";

export default class home extends Component {
    state = {
        products: this.props.products
    };
    render() {
        return (
            <div className="row gap-5 justify-content-center align-items-center h-100 w-100 py-5 flex-wrap">
                {this.state.products.map((product) => {
                    return <Card key={product.id} product={product} addProduct={this.props.addProduct}/>;
                })}
            </div>
        );
    }
}
