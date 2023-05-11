import React, { useState, useEffect, useRef } from 'react';
import './table.scss';
import AddNewTask from './addNewTask';

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

  const date = new Date();

  const [holidayIndexes, setHolidayIndexes] = useState([]);
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());
  const [searchValue, setSearchValue] = useState('');
  const cells = [];
  const fakeData = [];
  useEffect(() => {
    const tableThead = document.querySelectorAll('.table-right thead th');
    const tableTbody = document.querySelectorAll('.table-right tbody tr');
    const tableTbodyHoliday = document.querySelectorAll(
      '.table-right tbody tr td.table-body--holiday'
    );
    tableTbodyHoliday.forEach((tableTbodyHoliday) => {
      tableTbodyHoliday.classList.remove('table-body--holiday');
    });

    let holidayIndexes = [];

    for (let i = 0; i < tableThead.length; i++) {
      if (tableThead[i].classList.contains('holiday')) {
        holidayIndexes.push(i);
        setHolidayIndexes([...holidayIndexes, i]);
      }
    }

    holidayIndexes.forEach((holiday, index) => {
      tableTbody.forEach((item) => {
        item.querySelectorAll('td')[holiday].classList = 'table-body--holiday';
      });
    });
  }, [month, year]);
  const dataFake = [
    {
      id: 1,
      TaskID: 'Outward Return',
      totalTime: '12h',
      content: [
        {
          id: '1a',
          Title: 'Api List',
          Function: 'API',
          Issue: '',
          Status: 'Code base done',
          Priority: 'Hard',
          totalTime: '2h',
          realTime: '4h',
          time: [{ '5-11-2023': '1h' }, { '5-12-2023': '2h' }]
        },
        {
          id: '2a',
          Title: 'Api search theo từng cột sắp xếp va phân trang',
          Function: 'API',
          Issue: '',
          Status: 'Code base done',
          Priority: 'Medium',
          totalTime: '6h',
          realTime: '4h'
        },
        {
          id: '3a',
          Title:
            'Phân tích, tài liệu mô tả luồng xử lý của từng chức năng bằng diagram Phân tích, tài liệu mô tả luồng xử lý của từng chức năng bằng diagram',
          Function: 'API',
          Issue: '',
          Status: 'Code base done',
          Priority: 'Medium',
          totalTime: '4h',
          realTime: '3h'
        }
      ]
    },
    {
      id: 2,
      TaskID: 'Bug',
      totalTime: '12h',
      content: [
        {
          id: '1bb',
          Title: 'Bug ID 10',
          Function: 'Fix bug tester',
          Issue: '',
          Status: 'Dev finish',
          Priority: 'Hard',
          totalTime: '2h',
          realTime: '4h'
        },
        {
          id: '2bb',
          Title: 'Bug ID 1',
          Function: 'Fix bug tester',
          Issue: '',
          Status: 'Dev finish',
          Priority: 'Hard',
          totalTime: '6h',
          realTime: '4h'
        },
        {
          id: '3bb',
          Title: 'Bug ID 7',
          Function: 'Bug UI',
          Issue: '',
          Status: 'Dev finish',
          Priority: 'Hard',
          totalTime: '4h',
          realTime: '3h'
        }
      ]
    }
  ];

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  useEffect(() => {
    setData(dataFake);
  }, []);

  function getDayOfWeek(dateString) {
    let daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = new Date(dateString);
    let dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }

  for (let i = 1; i <= getDaysInMonth(year, month); i++) {
    cells.push(
      <th
        className={`table-cell ${
          getDayOfWeek(`${month}-${i}-${year}`) === 'Sun' ||
          getDayOfWeek(`${month}-${i}-${year}`) === 'Sat'
            ? 'holiday'
            : ''
        }`}
        data-content={i}
        key={i}
      >
        <div className='d-flex flex-column justify-content-center align-align-items-center'>
          <div className='text-center'>{i}</div>
          <div className='text-center'>
            {getDayOfWeek(`${month}-${i}-${year}`)}
          </div>
        </div>
      </th>
    );
  }
  for (let i = 0; i < getDaysInMonth(year, month); i++) {
    fakeData.push(
      <td className={`table-cell `} key={i}>
        data{i + 1}
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
  const [scrollIsAtBottom, setScrollIsAtBottom] = useState(false);
  const [scrollIsAtRight, setScrollIsAtRight] = useState(false);
  const handleScroll = (event) => {
    const isAtBottom =
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight;
    const isAtRight =
      event.target.scrollLeft ===
      event.target.scrollWidth - event.target.clientWidth;
    if (isAtBottom) {
      setScrollIsAtBottom(true);
    } else {
      setScrollIsAtBottom(false);
    }
    if (isAtRight) {
      setScrollIsAtRight(true);
    } else {
      setScrollIsAtRight(false);
    }
    setScrollPosition(event.target.scrollTop);
  };

  const titleRef = useRef(null);
  const inputTitleRef = useRef(null);

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
      Priority: 'Medium'
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
    if (e.type === 'dblclick') {
      setSelectedColumn(contentId);
      return;
    }
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
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedColumn, setSelectedColumn] = useState('');
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setSelectedColumn('');
      setSelectedTask('');
    }
  };

  const handleBlur = () => {
    setSelectedColumn('');
    setSelectedTask('');
  };
  useEffect(() => {
    setTimeout(() => {
      const table1Rows = document.querySelectorAll('.table-left tbody tr');
      const table2Rows = document.querySelectorAll('.table-right tbody tr');
      table1Rows.forEach((row, index) => {
        const height = row.offsetHeight;
        table2Rows[index].style.height = height + 'px';
      });
    }, 0);
  }, [selectedColumn]);

  const handleChangeTask = (key, taskId, e) => {
    setData((prevState) => {
      const taskIndex = prevState.findIndex((task) => task.id === taskId);
      const updatedTask = { ...prevState[taskIndex], [key]: e.target.value };
      console.log(updatedTask);
      const newData = [...prevState];
      newData[taskIndex] = updatedTask;
      return newData;
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
          <button
            type='button'
            className='button-add-task btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#staticBackdrop'
          >
            ADD NEW TASK
          </button>
          <AddNewTask />
        </div>
      </div>
      <div
        className={`${scrollIsAtBottom ? 'border-bottom-none' : ''} ${
          scrollIsAtRight ? 'border-right-none' : ''
        } content d-flex`}
      >
        <div className='content-left'>
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
                <th className='table-cell'>Total time</th>
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
                          onDoubleClick={(e) => {
                            setSelectedTask(item.id);
                          }}
                        >
                          {selectedTask === item.id ? (
                            <textarea
                              ref={(ref) => ref && ref.focus()}
                              type='text'
                              className='form-control'
                              value={item.TaskID}
                              onChange={(e) =>
                                handleChangeTask('TaskID', item.id, e)
                              }
                              onKeyPress={handleKeyPress}
                              onBlur={handleBlur}
                              onFocus={(e) =>
                                e.currentTarget.setSelectionRange(
                                  e.currentTarget.value.length,
                                  e.currentTarget.value.length
                                )
                              }
                            />
                          ) : (
                            item.TaskID
                          )}
                        </td>
                        <td className='table-cell'></td>
                        <td className='table-cell'></td>
                        <td className='table-cell'></td>
                        <td className='table-cell'></td>
                        <td className='table-cell'></td>
                        <td className='table-cell'>{item.totalTime}</td>
                      </tr>
                      {item.content.map((itemContent) => {
                        return (
                          <tr key={itemContent.id}>
                            <td className='table-cell'></td>
                            <td
                              ref={titleRef}
                              className={`table-cell table-cell--title ${
                                selectedColumn === 'Title' ? 'selected' : ''
                              }`}
                              onDoubleClick={(e) => {
                                handleChangeTable(
                                  'Title',
                                  item.id,
                                  itemContent.id,
                                  e
                                );
                              }}
                            >
                              {selectedColumn === itemContent.id ? (
                                <textarea
                                  // autoFocus
                                  ref={(ref) => ref && ref.focus()}
                                  type='text'
                                  className='form-control'
                                  value={itemContent.Title}
                                  onChange={(e) =>
                                    handleChangeTable(
                                      'Title',
                                      item.id,
                                      itemContent.id,
                                      e
                                    )
                                  }
                                  onKeyPress={handleKeyPress}
                                  onBlur={handleBlur}
                                  onFocus={(e) =>
                                    e.currentTarget.setSelectionRange(
                                      e.currentTarget.value.length,
                                      e.currentTarget.value.length
                                    )
                                  }
                                />
                              ) : (
                                itemContent.Title
                              )}
                            </td>
                            <td className='table-cell'>
                              <select
                                className='new-task--status form-select'
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
                            <td className='table-cell'>
                              {itemContent.totalTime}
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
        <div
          className='content-right wrapper table-responsive'
          onScroll={handleScroll}
        >
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
