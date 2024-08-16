/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:11:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 21:36:41
 * @description: 心平气和
 */
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BasicsLayout = lazy(() => import('@/layouts/basics'));

const root: RouteObject[] = [
  {
    index: true,
    Component: lazy(() => import('@/pages/home'))
  }
];

const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    loader() {
      // Our root route always provides the user, if logged in
      console.log('root loading');
      return { user: 'ds' };
    },
    Component: BasicsLayout,
    children: root
  }
];

export default routes;