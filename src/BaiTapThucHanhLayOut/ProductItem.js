import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
          <div className="card" style={{ width: "100%" }}>
            <img src="./img/700x400.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-primary">Item ...</h5>
              <h5>$24.99</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half" />
            </div>
          </div>
        );
    }
}
