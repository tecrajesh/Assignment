import React from 'react';

const CustomerBasicInfo = (props) => {
  const th = props.info;
  return (
    <>
      <td>{th._id}</td>
      <td>{th.index}</td>
      <td>{th.name}</td>
      <td>{th.age}</td>
    </>
  );
};
export default CustomerBasicInfo;
