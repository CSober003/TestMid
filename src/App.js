import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';

function App() {

    return (
        <div className="app">
            <AppHeader />
            {/* <TattooItem /> */}

            <img class="w3-image" src="/images/architect.jpg" alt="Architecture" width="1500" height="800"></img>

        </div>
    );
}

export default App;
