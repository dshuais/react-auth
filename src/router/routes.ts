/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:11:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 22:59:50
 * @description: 心平气和
 */
import { lazy } from 'react';
import { redirect, RouteObject } from 'react-router-dom';

import Login from '@/pages/login';
import Protected from '@/pages/protected';

import { type AuthStatus } from '@/layouts/basics';
import { useAppStore } from '@/store';

const BasicsLayout = lazy(() => import('@/layouts/basics'));

const root: RouteObject[] = [
  {
    index: true,
    Component: lazy(() => import('@/pages/home'))
  },
  {
    path: 'protected',
    loader: Protected.loader,
    Component: lazy(() => import('@/pages/protected'))
  }
];

const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    loader(): AuthStatus {
      // Our root route always provides the user, if logged in
      return { token: useAppStore.getState().token };
    },
    Component: BasicsLayout,
    children: root
  },
  {
    path: '/login',
    action: Login.action,
    loader: Login.loader,
    Component: lazy(() => import('@/pages/login'))
  },
  {
    path: '/logout',
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      useAppStore.getState().REMOVE_TOKEN();
      return redirect('/');
    }
  }
];

export default routes;
