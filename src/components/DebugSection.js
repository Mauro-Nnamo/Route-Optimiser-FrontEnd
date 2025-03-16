// src/components/DebugSection.js
function DebugSection({ debugInfo, error }) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    
    return (
      <div className="debug-section">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="m-0">Debug Information</h5>
          <button 
            className="btn btn-sm btn-outline-secondary" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
        
        {error && (
          <div className="alert alert-danger">
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {isExpanded && (
          <div>
            <h6>Request:</h6>
            <pre className="bg-dark text-light p-3 rounded">
              {JSON.stringify(debugInfo.request || {}, null, 2)}
            </pre>
            
            {debugInfo.response && (
              <>
                <h6>Response:</h6>
                <pre className="bg-dark text-light p-3 rounded">
                  {JSON.stringify(debugInfo.response, null, 2)}
                </pre>
              </>
            )}
          </div>
        )}
      </div>
    );
  }