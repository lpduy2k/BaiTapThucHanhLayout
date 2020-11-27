import React, { Component } from 'react'
import Carousel from './Carousel'
import ProductList from './ProductList'
import SideBar from './SideBar'

export default class Body extends Component {
    render() {
        return (
            <div className="container-fluid" style={{marginTop: 80}}>
                <div className="row">
                    <div className="col-12 col-lg-2">
                        <SideBar />
                    </div>
                    <div className="col-12 col-lg-9">
                        <Carousel />
                        <ProductList />
                    </div>
                    <div className="d-lg-none">
                    </div>                
                </div>
            </div>
        )
    }
}
