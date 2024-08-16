/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:04:46
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 21:32:22
 * @description: 心平气和
 */
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
