import React from 'react';
import { DashboardLayout } from './layouts/dashboard/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <DashboardLayout/>
      </Router>
    </div>
  );
}

export default App;
