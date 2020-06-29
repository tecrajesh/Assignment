import React, { Component } from 'react';
import CustomerAddressComponent from '../components/CustomerAddressComponent';

export class CustomerAddressContainer extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <CustomerAddressComponent info={data} />
      </div>
    );
  }
}

export default CustomerAddressContainer;
