import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
          <div className="mb-3">
            <h3>Shop Name</h3>
            <div id="mySidenav" className="border rounded">
              <a className="d-block border-bottom pl-3 pb-2 my-2" href="#">Category1</a>
              <a className="d-block border-bottom pl-3 pb-2 my-2" href="#">Category2</a>
              <a className="d-block pl-3 mb-2" href="#">Category3</a>
            </div>
          </div>
        );
    }
}
