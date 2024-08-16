/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:04:46
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 21:32:33
 * @description: 心平气和
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

createRoot(document.getElementById('root')!).render(<StrictMode>
  <App />
</StrictMode>);
