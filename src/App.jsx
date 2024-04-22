import React, { useEffect, useState } from 'react';
import { getLyrics, search } from './api/service';
import { truncate } from './utils/truncate';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Lyric from "./lyric/Lyric.jsx";
import MainPage from './MainPage.jsx';

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<MainPage />}/>
                <Route path={'/:track/lyrics/:id'} element={<Lyric />}/>
            </Routes>
        </Router>
    );
}