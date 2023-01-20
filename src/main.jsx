import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Auth0Provider domain='dev-thuxj39z.us.auth0.com' clientId='eJmyYyTbPQXL4QuuVJJ5GgRw7hKER0On' authorizationParams={{
          redirect_uri: window.location.origin
        }}>
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
