import React, { useState, useEffect, useRef } from 'react';
import './table.css';

function Table() {
  const table1Ref = useRef(null);
  const table2Ref = useRef(null);
  const [data, setData] = useState();

  // useEffect(() => {
  //   if (table1Ref && table2Ref) {
  //     const table1Rows = table1Ref.current.querySelectorAll('tbody tr');
  //     const table2Rows = table1Ref.current.querySelectorAll('tbody tr');
  //     console.log(table1Rows);
  //     table1Rows.forEach((row, index) => {
  //       const height = row.offsetHeight;
  //       table2Rows[index].style.height = height + 'px';
  //     });
  //   }
  // }, []);

  setTimeout(() => {
    const table1Rows = document.querySelectorAll('.table-left tbody tr');
    const table2Rows = document.querySelectorAll('.table-right tbody tr');
    table1Rows.forEach((row, index) => {
      const height = row.offsetHeight;
      table2Rows[index].style.height = height + 'px';
    });
  }, 0);

  const dataFake = [
    {
      id: 1,
      TaskID: 'Outward Return',
      content: [
        {
          id: '1a',
          Title: 'Api List',
          Function: 'API',
          Issue: '',
          Status: 'Code base done',
          Priority: 'Meidum'
        },
        {
          id: '2a',
          Title: 'Api search theo từng cột sắp xếp va phân trang',
          Function: 'API',
          Issue: '',
          Status: 'Code base done',
          Priority: 'Meidum'
        },
        {
          id: '3a',
          Title:
            'Phân tích, tài liệu mô tả luồng xử lý của từng chức năng bằng diagramPhân tích, tài liệu mô tả luồng xử lý của từng chức năng bằng diagram',
          Function: 'API',
          Issue: '',
          Status: 'Code base done',
          Priority: 'Meidum'
        }
      ]
    },
    {
      id: 2,
      TaskID: 'Bug',
      content: [
        {
          id: '1bb',
          Title: 'Bug ID 10',
          Function: 'Fix bug tester',
          Issue: '',
          Status: 'Dev finish',
          Priority: 'Hard'
        },
        {
          id: '2bb',
          Title: 'Bug ID 1',
          Function: 'Fix bug tester',
          Issue: '',
          Status: 'Dev finish',
          Priority: 'Hard'
        },
        {
          id: '3bb',
          Title: 'Bug ID 7',
          Function: 'Bug UI',
          Issue: '',
          Status: 'Dev finish',
          Priority: 'Hard'
        }
      ]
    }
  ];
  const date = new Date();

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  const [searchValue, setSearchValue] = useState('');
  const cells = [];
  const fakeData = [];

  useEffect(() => {
    setData(dataFake);
  }, []);
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

  const titleRef = useRef(null);

  const tableCellStatus = [
    {
      status: 'Dev finish'
    },
    {
      status: 'Code base done'
    }
  ];

  const tableCellPriority = [
    {
      Priority: 'Meidum'
    },
    {
      Priority: 'Hard'
    }
  ];
  const tableCellFunction = [
    {
      Function: 'API'
    },
    {
      Function: 'Fixbug'
    }
  ];

  const handleChangeTable = (key, taskId, contentId, e) => {
    setData((prevState) => {
      const taskIndex = prevState.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const contentIndex = prevState[taskIndex].content.findIndex(
          (content) => content.id === contentId
        );
        if (contentIndex !== -1) {
          const updatedContent = {
            ...prevState[taskIndex].content[contentIndex],
            [key]: e.target.value
          };
          const updatedTask = { ...prevState[taskIndex] };
          updatedTask.content[contentIndex] = updatedContent;
          const newData = [...prevState];
          newData[taskIndex] = updatedTask;
          return newData;
        }
      }
      return prevState;
    });
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
                return (
                  <option value={month} key={month}>
                    {month}
                  </option>
                );
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
                return (
                  <option value={years} key={years}>
                    {years}
                  </option>
                );
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
            ref={table1Ref}
          >
            <thead>
              <tr className='table-header position-sticky'>
                <th className='table-cell'>Task ID</th>
                <th className='table-cell'>Title</th>
                <th className='table-cell'>Function</th>
                <th className='table-cell'>Issue</th>
                <th className='table-cell'>Priority</th>
                <th className='table-cell'>Status</th>
              </tr>
            </thead>
            <tbody className='table-body'>
              {data &&
                data.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <tr>
                        <td
                          id='table-cell--task'
                          className='table-cell table-cell--task'
                        >
                          {item.TaskID}
                        </td>
                        <td className='table-cell'></td>
                        <td className='table-cell'></td>
                        <td className='table-cell'></td>
                        <td className='table-cell'></td>
                        <td className='table-cell'></td>
                      </tr>
                      {item.content.map((itemContent) => {
                        return (
                          <tr key={itemContent.id}>
                            <td className='table-cell'></td>
                            <td
                              ref={titleRef}
                              className='table-cell table-cell--title'
                            >
                              {itemContent.Title}
                            </td>
                            <td className='table-cell'>
                              <select
                                className='table-cell--status form-select'
                                aria-label='Default select example'
                                onChange={(e) =>
                                  handleChangeTable(
                                    'Function',
                                    item.id,
                                    itemContent.id,
                                    e
                                  )
                                }
                                value={itemContent.Function}
                              >
                                {tableCellFunction.map((Function) => {
                                  return (
                                    <option
                                      value={Function.Function}
                                      key={Function.Function}
                                    >
                                      {Function.Function}
                                    </option>
                                  );
                                })}
                              </select>
                            </td>
                            <td className='table-cell'>{itemContent.Issue}</td>
                            <td className='table-cell'>
                              <select
                                className='table-cell--priority form-select'
                                aria-label='Default select example'
                                onChange={(e) =>
                                  handleChangeTable(
                                    'Priority',
                                    item.id,
                                    itemContent.id,
                                    e
                                  )
                                }
                                value={itemContent.Priority}
                              >
                                {tableCellPriority.map((priority) => {
                                  return (
                                    <option
                                      value={priority.Priority}
                                      key={priority.Priority}
                                    >
                                      {priority.Priority}
                                    </option>
                                  );
                                })}
                              </select>
                            </td>
                            <td className='table-cell'>
                              <select
                                className='table-cell--status form-select'
                                aria-label='Default select example'
                                onChange={(e) =>
                                  handleChangeTable(
                                    'Status',
                                    item.id,
                                    itemContent.id,
                                    e
                                  )
                                }
                                value={itemContent.Status}
                              >
                                {tableCellStatus.map((status) => {
                                  return (
                                    <option
                                      value={status.status}
                                      key={status.status}
                                    >
                                      {status.status}
                                    </option>
                                  );
                                })}
                              </select>
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className='wrapper table-responsive' onScroll={handleScroll}>
          <table
            className={`table table-right table-bordered ${
              scrollPosition > 0 ? 'table-scroll' : ''
            }`}
            ref={table2Ref}
          >
            <thead>
              <tr className='table-header position-sticky'>{cells}</tr>
            </thead>

            <tbody className='table-body'>
              <tr id='row1'>{fakeData}</tr>
              <tr>{fakeData}</tr>
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
