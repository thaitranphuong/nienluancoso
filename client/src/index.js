import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import Provider from './components/Povider';
<<<<<<< HEAD
import ContextProviderTest from './Pages/Test/Component/ContextProviderTest';
=======
>>>>>>> bd7b51679267eed8194a715d21a79e652c27b18e

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider>
<<<<<<< HEAD
            <ContextProviderTest>
                <GlobalStyles>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </GlobalStyles>
            </ContextProviderTest>
=======
            <GlobalStyles>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GlobalStyles>
>>>>>>> bd7b51679267eed8194a715d21a79e652c27b18e
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
