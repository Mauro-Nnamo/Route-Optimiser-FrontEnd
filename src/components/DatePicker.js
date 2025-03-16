// src/components/DatePicker.js
function DatePicker({ date, setDate }) {
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    return (
      <div className="card">
        <div className="card-header">
          <h5>Select Date</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Booking Date</label>
            <input 
              type="date" 
              className="form-control" 
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="form-text">
            Select the date to find available bookings for route optimization.
          </div>
        </div>
      </div>
    );
  }