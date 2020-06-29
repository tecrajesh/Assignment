import React, { Component } from 'react';
import CustomerDetailsContainer from './CustomerDetailsContainer';
import CustomerAddressContainer from './CustomerAddressContainer';

import { data, cols } from '../mockdata/customerData';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customInfo: {},
      selectedInfo: data.info[0],
    };
  }
  rowClick = (idx) => {
    this.setState({ selectedInfo: data.info[idx] });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 ">
            <CustomerDetailsContainer
              cols={cols}
              info={data.info}
              onRowClick={this.rowClick}
            />
          </div>
          <div className="col-lg-4">
            <CustomerAddressContainer data={this.state.selectedInfo} />
          </div>
        </div>
      </div>
    );
  }
}
