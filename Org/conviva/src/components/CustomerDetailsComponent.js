import React from 'react';
import CustomerBasicInfo from './CustomerBasicInfo';
import { Table } from 'react-bootstrap';

const CustomerDetailsComponent = (props) => {
  const { info, cols, onRowClick } = props;
  const handleRowClick = (evt) => {
    onRowClick(evt.currentTarget.id);
  };
  const renderBody = () => {
    if (!info || info.length === 0) {
      return <tr> No data available</tr>;
    } else
      return info.map((th, idx) => (
        <tr key={idx} id={th.index} onClick={handleRowClick}>
          <CustomerBasicInfo info={th} />
        </tr>
      ));
  };
  const renderHead = () => {
    if (!cols || cols.length === 0) {
      return <div> No data available</div>;
    } else if (cols) {
      const header = cols.map((col, idx) => <th key={idx}>{col}</th>);
      return <tr>{header}</tr>;
    }
  };
  return (
    <div>
      {info && cols && info.length > 0 ? (
        <Table striped bordered hover size="sm">
          <thead>{renderHead()}</thead>
          <tbody>{renderBody()}</tbody>
        </Table>
      ) : (
        <div> No Data Available</div>
      )}
    </div>
  );
};

export default CustomerDetailsComponent;
