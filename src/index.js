import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TrackProvider from './context/TrackContext';
import ThemeProvider from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TrackProvider>
        <App />
      </TrackProvider>
    </ThemeProvider>
  </React.StrictMode>
);