import React from 'react';
import { createRoot } from 'react-dom/client';
import { Remote1 } from './Remote1';
import './Remote1.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Remote1 />);
