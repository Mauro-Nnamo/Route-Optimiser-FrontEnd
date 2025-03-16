// src/components/RouteResults.js
function RouteResults({ results }) {
    if (!results || !results.schedule) {
      return null;
    }
    
    return (
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5>Optimized Route Schedule</h5>
          <span className="badge bg-primary">Total Time: {Math.round(results.totalTime)} mins</span>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Stop</th>
                  <th>Type</th>
                  <th>Customer</th>
                  <th>Arrival</th>
                  <th>Return</th>
                  <th>Travel Time</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                {results.schedule.map((stop, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{stop.type}</td>
                    <td>
                      {stop.type === 'customer' ? (
                        <div>
                          <div>{stop.customer.name}</div>
                          <small className="text-muted">{stop.customer.vehicleReg}</small>
                        </div>
                      ) : '-'}
                    </td>
                    <td>{stop.arrivalTime}</td>
                    <td>{stop.returnTime || '-'}</td>
                    <td>
                      {stop.type === 'customer' ? (
                        <div>
                          <div>To: {stop.travelTimeWithBuffer} mins</div>
                          <div>From: {stop.returnTimeWithBuffer} mins</div>
                        </div>
                      ) : '-'}
                    </td>
                    <td>
                      {stop.type === 'customer' ? (
                        <span className={`badge ${getPriorityClass(stop.customer.priority)}`}>
                          {stop.customer.priority}
                        </span>
                      ) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
    
    function getPriorityClass(priority) {
      if (priority <= 3) return 'bg-danger';
      if (priority <= 6) return 'bg-warning';
      return 'bg-secondary';
    }
  }