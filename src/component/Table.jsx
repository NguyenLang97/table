import React, { useState, useEffect, useRef } from 'react';
import './table.css';

function Table() {
  const date = new Date();

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  const [searchValue, setSearchValue] = useState('');

  const cells = [];
  const fakeData = [];

  for (let i = 1; i <= getDaysInMonth(year, month); i++) {
    cells.push(
      <th className='table-cell' data-content={i} key={i}>
        {i}
      </th>
    );
  }
  for (let i = 0; i < getDaysInMonth(year, month); i++) {
    fakeData.push(
      <td className='table-cell' key={i}>
        data{i}
      </td>
    );
  }
  const monthOfYear = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12'
  ];

  const handleChangeMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };

  const arrayYears = function (startYear) {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollTop);
  };

  return (
    <div className='container'>
      <div className='header d-flex'>
        <div className='input-search input-group'>
          <input
            className='form-control border rounded-pill'
            type='search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            id='example-search-input'
            placeholder='Search'
          />
        </div>
        <div className='d-flex'>
          <div className='month-select'>
            <select
              className='month-select form-select'
              aria-label='Default select example'
              onChange={handleChangeMonth}
              value={month}
            >
              {monthOfYear.map((month) => {
                return <option value={month}>{month}</option>;
              })}
            </select>
          </div>
          <div className='year-select'>
            <select
              className='year-select form-select'
              aria-label='Default select example'
              onChange={handleChangeYear}
              value={year}
            >
              {arrayYears().map((years) => {
                return <option value={years}>{years}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <div className='content d-flex'>
        <div>
          <table
            id='table-left'
            className={`table table-left table-bordered position-relative ${
              scrollPosition > 0 ? 'table-scroll' : ''
            }`}
            style={{ top: `-${scrollPosition}px` }}
          >
            <thead>
              <tr className='table-header position-sticky'>
                <th className='table-cell'>STT</th>
              </tr>
            </thead>
            <tbody className='table-body'>
              <tr>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
              </tr>
              <tr>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='wrapper table-responsive' onScroll={handleScroll}>
          <table
            className={`table table-right table-bordered ${
              scrollPosition > 0 ? 'table-scroll' : ''
            }`}
          >
            <thead>
              <tr className='table-header position-sticky'>{cells}</tr>
            </thead>

            <tbody className='table-body'>
              <tr>{fakeData}</tr>
              <tr>{fakeData}</tr>
              <tr>{fakeData}</tr>
              <tr>{fakeData}</tr>
              <tr>{fakeData}</tr>
              <tr>{fakeData}</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
