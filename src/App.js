import { Component } from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";

export default class App extends Component {
    state = {
        products: [
            { id: 1, name: "Product 1", price: 10, quantity: 1 },
            { id: 2, name: "Product 2", price: 109, quantity: 1 },
            { id: 3, name: "Product 3", price: 1, quantity: 1 },
            { id: 4, name: "Product 4", price: 200, quantity: 1 },
            { id: 5, name: "Product 5", price: 2000, quantity: 1 },
        ], isDark: false
    };

    quantityIncrement = (product) => {
        const newState = {...this.state,
            products: this.state.products.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ),
        };
        this.setState(newState);
    };
    quantityDecrement = (product) => {
        if (product.quantity === 1) {
            this.deleteProduct(product);
            return;
        }
        const newState = {...this.state,
            products: this.state.products.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity:
                            item.quantity > 1
                                ? item.quantity - 1
                                : item.quantity,
                    };
                } else {
                    return item;
                }
            }),
        };
        this.setState(newState);
    };
    deleteProduct = (product) => {
        const newState = {...this.state,
            products: this.state.products.filter(
                (item) => item.id !== product.id
            ),
        };
        this.setState(newState);
    };
    addProduct = (product) => {
        const isExist = this.state.products.some(
            (item) => item.id === product.id
        );
        if (!isExist) {
            const newState = {...this.state,
                products: [...this.state.products, product],
            };
            this.setState(newState);
        } else if (isExist) {
            this.quantityIncrement(product);
        }
    };
    emptyList = () => {
        this.setState({...this.state, products: [] });
    };
    quantityReset = () => {
        const newState = {...this.state,
            products: this.state.products.map((item) => ({
                ...item,
                quantity: 1,
            })),
        };
        this.setState(newState);
    };
    
    changeTheme = () => {
      this.setState({...this.state, isDark: !this.state.isDark})
    }
    render() {
        return (
            <div className="App" data-bs-theme={this.state.isDark? 'dark': 'light'}>
                <Nav
                    products={this.state.products}
                    quantityIncrement={this.quantityIncrement}
                    quantityDecrement={this.quantityDecrement}
                    deleteProduct={this.deleteProduct}
                    emptyList={this.emptyList}
                    quantityReset={this.quantityReset}
                    changeTheme={this.changeTheme}
                    isDark={this.state.isDark}
                ></Nav>
                <header className="bg-body-secondary d-flex flex-column justify-content-center align-items-center">
                  <h1 className="text-body-emphasis text-center pt-5">Welcome to Dev Zone Shop</h1>
                    <Home
                        products={this.state.products}
                        addProduct={this.addProduct}
                    ></Home>
                </header>
            </div>
        );
    }
}
