import React from 'react';
const CustomerAddressComponent = (props) => {
  const customer = props.info;
  const renderAddress = (address) => {
    return customer.address && customer.address.length === 0 ? (
      <div className="address">No Address</div>
    ) : (
      customer.address.map((ad, idx) => (
        <div key={idx} className="address">
          {ad}
        </div>
      ))
    );
  };
  return (
    <div className="container">
      <div className="row b-g-1">
        <div className="col-lg-6"> Customer ID</div>
        <div className="col-lg-6"> {customer._id}</div>
      </div>
      <div className="row b-g-1">
        <div className="col-lg-6"> Customer Name</div>
        <div className="col-lg-6"> {customer.name}</div>
      </div>
      <div className="row b-g-1">
        <div className="col-lg-6"> Customer Age</div>
        <div className="col-lg-6"> {customer.age}</div>
      </div>
      <div className="row b-g-1">
        <div className="col-lg-6"> Customer Addresses</div>
        <div className="col-lg-6"> {renderAddress()}</div>
      </div>
    </div>
  );
};
export default CustomerAddressComponent;
