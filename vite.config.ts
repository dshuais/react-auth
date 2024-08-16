/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:04:46
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 21:21:55
 * @description: 心平气和
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
