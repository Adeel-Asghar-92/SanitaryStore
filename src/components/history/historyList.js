export const HistoryList = ({
  history,
  ViewHistoryById,
  DeleteHistoryById,
}) => {
  debugger;
  return (
    <div className="container">
      <h1>History</h1>
      <table className="table table-dark table-hovered text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile #</th>
            <th> Total BIll</th>
            <th>Actions</th>
          </tr>
        </thead>

        {history.map((h) => (
          <tbody className="table-secondary text-dark">
            <tr>
              <td>{h.customerName}</td>
              <td>{h.mobileNo}</td>
              <td>{h.totalBill}</td>
              <td>
                <button
                  className="btn btn-info "
                  onClick={() => ViewHistoryById(h.id)}
                >
                  View
                </button>
                {"  "}
                <button
                  className="btn btn-danger "
                  onClick={() => DeleteHistoryById(h.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
