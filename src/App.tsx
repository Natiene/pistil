import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import './css/tailwind.css';
import { Home } from './components/pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    );
}

export default App;
