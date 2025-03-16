// src/App.js
function App() {
    const [date, setDate] = React.useState('');
    const [garageLocation, setGarageLocation] = React.useState('');
    const [startTime, setStartTime] = React.useState('09:00');
    const [loadingTime, setLoadingTime] = React.useState(15);
    const [keyExchangeTime, setKeyExchangeTime] = React.useState(5);
    const [unloadingTime, setUnloadingTime] = React.useState(10);
    const [bufferPercentage, setBufferPercentage] = React.useState(15);
    const [results, setResults] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [debugInfo, setDebugInfo] = React.useState({});
  
    const apiBaseUrl = 'https://generateschedule-995539324847.europe-west2.run.app';
  
    const handleOptimizeRoute = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Log the request for debugging
        const requestData = {
          date,
          garageLocation,
          startTime,
          loadingTime,
          keyExchangeTime,
          unloadingTime,
          bufferPercentage
        };
        
        setDebugInfo({
          request: requestData,
          response: null
        });
        
        const response = await axios.post(`${apiBaseUrl}/testEnhancedRouteOptimization`, requestData);
        
        setResults(response.data);
        setDebugInfo({
          request: requestData,
          response: response.data
        });
      } catch (err) {
        setError(err.message || 'An error occurred');
        setDebugInfo({
          request: requestData,
          error: err.message,
          response: err.response?.data
        });
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="app-container">
        <div className="header">
          <h1>Route Optimizer Dashboard</h1>
          <p>Optimize vehicle collection routes with precision</p>
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <DatePicker date={date} setDate={setDate} />
          </div>
          <div className="col-md-6">
            <RouteSettings 
              garageLocation={garageLocation}
              setGarageLocation={setGarageLocation}
              startTime={startTime}
              setStartTime={setStartTime}
              loadingTime={loadingTime}
              setLoadingTime={setLoadingTime}
              keyExchangeTime={keyExchangeTime}
              setKeyExchangeTime={setKeyExchangeTime}
              unloadingTime={unloadingTime}
              setUnloadingTime={setUnloadingTime}
              bufferPercentage={bufferPercentage}
              setBufferPercentage={setBufferPercentage}
              onOptimize={handleOptimizeRoute}
              loading={loading}
            />
          </div>
        </div>
        
        {results && (
          <div className="row mt-4">
            <div className="col-12">
              <RouteResults results={results} />
            </div>
          </div>
        )}
        
        <div className="row mt-4">
          <div className="col-12">
            <DebugSection debugInfo={debugInfo} error={error} />
          </div>
        </div>
      </div>
    );
  }