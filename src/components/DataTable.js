//src/components/DataTable.js

import React from 'react';
import Cell from './Cell';

import './DataTable.css';

import { headings, rows } from '../utilities/lists'

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

export default function DataTable() {

  const renderHeadingRow = (_cell, cellIndex) => {
    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header={true}
        fixed={cellIndex === 0}
      />
    )
  };
  
  const renderRow = (_row, rowIndex) => {
    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
              fixed={cellIndex === 0}
            />
          )
        })}
      </tr>
    )
  };

  const theadMarkup = (
    <tr key="heading">
      {headings.map(renderHeadingRow)}
    </tr>
  );

  const tbodyMarkup = rows.map(renderRow);
    
  return (
    <table className="Table">
      <thead>{theadMarkup}</thead>
      <tbody>{tbodyMarkup}</tbody>
    </table>
  );
}
