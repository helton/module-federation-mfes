import React from 'react';
import { createRoot } from 'react-dom/client';
import { Remote2 } from './Remote2';
import './Remote2.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Remote2 />);
