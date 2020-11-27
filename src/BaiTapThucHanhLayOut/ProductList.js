import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className="mt-3">
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-4 mb-4">
                        <ProductItem />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 mb-4">
                        <ProductItem />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 mb-4">
                        <ProductItem />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 mb-4">
                        <ProductItem />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 mb-4">
                        <ProductItem />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 mb-4">
                        <ProductItem />
                    </div>
                </div>
            </div>
        )
    }
}
