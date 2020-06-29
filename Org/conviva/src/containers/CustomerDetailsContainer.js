import React, { Component } from 'react';
import CustomerDetailsComponent from '../components/CustomerDetailsComponent';

export default class CustomerDetailsContainer extends Component {
  render() {
    const { info, cols, onRowClick } = this.props;
    return (
      <div>
        <CustomerDetailsComponent
          onRowClick={onRowClick}
          info={info}
          cols={cols}
        />
      </div>
    );
  }
}
