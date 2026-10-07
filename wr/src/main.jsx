import React from 'react';
import {createRoot} from 'react-dom/client';
import Home from './Home';
import {Header} from './shared';
import './base.css';
import './brand.css';
document.title='StyleIQ — Digital Wardrobe & AI Styling App';
createRoot(document.getElementById('root')).render(<><Header/><Home/></>);
