import React from 'react'
import './shopping-cart-table.css'

const ShoppingCartTable = () => {
    return(
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                <td>1</td>
                <td>Motorola</td>
                <td>2</td>
                <td>40$</td>
                <td>Action</td>
                <td>
                    <button className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
                </tbody>
            </table>
            <div className="total">
                Total: 1$
            </div>
        </div>
    )
}
export default ShoppingCartTable