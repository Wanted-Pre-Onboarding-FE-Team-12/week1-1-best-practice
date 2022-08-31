import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from 'store/authStore';
import { ModalContextProvider } from 'store/modalStore';
import { TodoContextProvider } from 'store/todoStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TodoContextProvider>
        <ModalContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalContextProvider>
      </TodoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
