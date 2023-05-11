const AddNewTask = () => {
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
  return (
    <div
      className='modal fade'
      id='staticBackdrop'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      tabIndex='-1'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='staticBackdropLabel'>
              NEW TASK
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form className='row'>
              <div className='col-6 mb-3'>
                <label htmlFor='recipient-name' className='col-form-label'>
                  Task ID:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipient-name'
                  placeholder='1096'
                />
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Page:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipient-name'
                  placeholder='10'
                />
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Ticket ID:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipient-name'
                  placeholder='100'
                />
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Screen:
                </label>
                <textarea className='form-control' id='message-text'></textarea>
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Link ticket:
                </label>
                <textarea className='form-control' id='message-text'></textarea>
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Pull Request:
                </label>
                <textarea className='form-control' id='message-text'></textarea>
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Total Time (h):
                </label>
                <input
                  type='text'
                  className='form-control disabled'
                  id='recipient-name'
                  placeholder='2'
                />
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Create:
                </label>
                <input
                  type='text'
                  className='form-control'
                  disabled={true}
                  id='recipient-name'
                  placeholder={new Date()}
                />
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Function:
                </label>
                <select
                  className='new-task--status form-select'
                  aria-label='Default select example'
                  // onChange={(e) =>
                  //   handleChangeTable(
                  //     'Function',
                  //     item.id,
                  //     itemContent.id,
                  //     e
                  //   )
                  // }
                  // value={itemContent.Function}
                >
                  {tableCellFunction.map((Function) => {
                    return (
                      <option value={Function.Function} key={Function.Function}>
                        {Function.Function}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Priority:
                </label>
                <select
                  className='new-task--status form-select'
                  aria-label='Default select example'
                  // onChange={(e) =>
                  //   handleChangeTable(
                  //     'Priority',
                  //     item.id,
                  //     itemContent.id,
                  //     e
                  //   )
                  // }
                  // value={itemContent.Priority}
                >
                  {tableCellPriority.map((priority) => {
                    return (
                      <option value={priority.Priority} key={priority.Priority}>
                        {priority.Priority}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Status:
                </label>
                <select
                  className='new-task--status form-select'
                  aria-label='Default select example'
                  // onChange={(e) =>
                  //   handleChangeTable(
                  //     'Status',
                  //     item.id,
                  //     itemContent.id,
                  //     e
                  //   )
                  // }
                  // value={itemContent.Status}
                >
                  {tableCellStatus.map((status) => {
                    return (
                      <option value={status.status} key={status.status}>
                        {status.status}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className='col-6 mb-3'>
                <label htmlFor='message-text' className='col-form-label'>
                  Assign:
                </label>
                <select
                  className='new-task--status form-select'
                  aria-label='Default select example'
                  // onChange={(e) =>
                  //   handleChangeTable(
                  //     'Status',
                  //     item.id,
                  //     itemContent.id,
                  //     e
                  //   )
                  // }
                  // value={itemContent.Status}
                >
                  <option value='1'>NamPink</option>
                  <option value='2'>Tungdv</option>
                  <option value='3'>Lang</option>
                </select>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' className='btn btn-primary'>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNewTask;
