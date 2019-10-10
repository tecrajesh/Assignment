
import React, { Component } from 'react'
import { isTodayInBetween, abbrNum } from "./util";
const TableHeader = props => {

  return (
    <thead>
      <tr>
        {props.headerData.map((row) => {
          return (
            <th key={row}>{row}</th>
          )
        })}
      </tr>
    </thead>
  )
}

const getValue = (row, column) => {
  switch (column) {
    case "active":
      var value = isTodayInBetween(row.startDate, row.endDate, new Date()) ? "Active" : "In-Active";
      var customClass = value === "Active" ? "fa fa-circle active" : "fa fa-circle inactive";
      return (<td key={column}><i className={customClass} />{value}</td>);
    case "Budget":
      return (<td key={column}>{abbrNum(row[column], 0)} USD</td>);
    default:
      return column;
  }
}

const TableBody = props => {
  const { columnData, characterData, dynamicData } = props;
  const rows = characterData.map((row, index) => {
    return (
      <tr key={index}>
        {columnData.map((column) => {
          if (dynamicData.indexOf(column) === - 1)
            return (<td key={column}>{row[column]}</td>);
          else
            return getValue(row, column);
        })}
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { characterData, headerData, columnData, dynamicData } = this.props

    return (
      <table>
        <TableHeader headerData={headerData} />
        <TableBody characterData={characterData} columnData={columnData} dynamicData={dynamicData} />
      </table>
    )
  }
}

export default Table