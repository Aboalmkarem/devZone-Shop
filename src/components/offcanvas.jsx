import { Component } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default class OffCanvas extends Component {
    render() {
        return (
            <>
                <Offcanvas show={this.props.show} onHide={this.props.handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {this.props.products.length > 0 ? (
                            <>
                            <div className="list-group mb-4">
                            <div className="list-group-item d-flex justify-content-start gap-2 align-items-center">
                                <p className="m-0">product name</p>
                                <p className="m-0">quantity</p>
                                <p className="m-0">price</p>
                                <p className="m-0">total</p>
                                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                    <button onClick={() => {this.props.quantityReset()}} type="button" className="btn btn-secondary">reset</button>
                                    <button onClick={() => {this.props.emptyList()}} type="button" className="btn btn-outline-danger">empty</button>
                                </div>
                            </div>
                        </div>
                        <div className="list-group list-group-numbered">
                            {this.props.products.map((product) => (
                                <div className="list-group-item d-flex flex-wrap align-items-center" key={product.id}>
                                    <div className="d-flex flex-grow-1 ">
                                        <h5 className="m-0">{product.name}</h5>
                                        <div className="d-flex justify-content-around flex-grow-1">
                                            <p className="m-0">{product.quantity}</p>
                                            <p className="m-0">{product.price} $</p>
                                            <p className="m-0">{product.price*product.quantity} $</p>
                                        </div>
                                    </div>
                                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                        <button onClick={() => {this.props.quantityIncrement(product)}} type="button" className="btn btn-primary">+</button>
                                        <button onClick={() => {this.props.quantityDecrement(product)}} type="button" className="btn btn-primary">-</button>
                                        <button onClick={() => {this.props.deleteProduct(product)}} type="button" className="btn btn-outline-danger">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="list-group mt-2">
                            <div className="list-group-item d-flex justify-content-between gap-2 align-items-center">
                                <h4 className="m-0">Total Price</h4>
                                <h4 className="m-0">{this.props.products.reduce((total, product) => total + product.price * product.quantity, 0)}</h4>
                                <button onClick={() => {this.props.emptyList()}} type="button" className="btn btn-success">buy</button>
                            </div>
                        </div>
                            </>
                        ) : (
                            <h3>No items in cart</h3>    
                        )}
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }
}
