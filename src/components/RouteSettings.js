// src/components/RouteSettings.js
function RouteSettings({ 
    garageLocation, setGarageLocation,
    startTime, setStartTime,
    loadingTime, setLoadingTime,
    keyExchangeTime, setKeyExchangeTime,
    unloadingTime, setUnloadingTime,
    bufferPercentage, setBufferPercentage,
    onOptimize, loading
  }) {
    return (
      <div className="card">
        <div className="card-header">
          <h5>Route Settings</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="garageLocation" className="form-label">Garage Location</label>
            <input 
              type="text" 
              className="form-control" 
              id="garageLocation"
              placeholder="Enter full address or postcode"
              value={garageLocation}
              onChange={(e) => setGarageLocation(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="startTime" className="form-label">Start Time</label>
            <input 
              type="time" 
              className="form-control" 
              id="startTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="loadingTime" className="form-label">Loading Time (mins)</label>
              <input 
                type="number" 
                className="form-control" 
                id="loadingTime"
                min="1"
                max="60"
                value={loadingTime}
                onChange={(e) => setLoadingTime(parseInt(e.target.value))}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="keyExchangeTime" className="form-label">Key Exchange (mins)</label>
              <input 
                type="number" 
                className="form-control" 
                id="keyExchangeTime"
                min="1"
                max="30"
                value={keyExchangeTime}
                onChange={(e) => setKeyExchangeTime(parseInt(e.target.value))}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="unloadingTime" className="form-label">Unloading (mins)</label>
              <input 
                type="number" 
                className="form-control" 
                id="unloadingTime"
                min="1"
                max="60"
                value={unloadingTime}
                onChange={(e) => setUnloadingTime(parseInt(e.target.value))}
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="bufferPercentage" className="form-label">
              Buffer Percentage: {bufferPercentage}%
            </label>
            <input 
              type="range" 
              className="form-range" 
              id="bufferPercentage"
              min="0"
              max="50"
              value={bufferPercentage}
              onChange={(e) => setBufferPercentage(parseInt(e.target.value))}
            />
            <div className="form-text">
              Additional time added to travel estimates to account for traffic and delays.
            </div>
          </div>
          
          <button 
            className="btn btn-primary" 
            onClick={onOptimize}
            disabled={loading || !date || !garageLocation}
          >
            {loading ? 'Optimizing...' : 'Optimize Route'}
          </button>
        </div>
      </div>
    );
  }