import React from 'react';
import { createRoot } from 'react-dom/client';
import GifApp from './Gifapp';
import './index.css';
const container=document.querySelector('#root');
const root = createRoot(container)
root.render(
  <GifApp/>
);

