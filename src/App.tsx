import React, { FunctionComponent } from 'react';
import './App.scss';

const GIT_USER = '';
const GIT_USER_URL = `https://api.github.com/users/${GIT_USER}/events`;

type AppProps = {};

const App: FunctionComponent<AppProps> = (props) => {
  return (
    <div className="app-container">
      <div className="score">n/a</div>
      <button type="button" className="primary-btn" aria-label="Get Score">
        Get Score
      </button>
    </div>
  );
};

export default App;
