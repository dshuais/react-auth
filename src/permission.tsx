/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:42:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 22:12:42
 * @description: 心平气和
 */

import { useFetcher, useRouteLoaderData } from 'react-router-dom';

export type AuthStatus = {
  token: string | void;
}

/**
 * 登录状态组件
 */
export function AuthStatus() {
  // Get our logged in user, if they exist, from the root route loader data
  const { token } = useRouteLoaderData('root') as AuthStatus;
  const fetcher = useFetcher();

  if(!token) {
    return <p>You are not logged in.</p>;
  }

  const isLoggingOut = fetcher.formData != null;

  return (
    <fetcher.Form method="post" action="/logout">
      <button type="submit" disabled={isLoggingOut}>{isLoggingOut ? 'Signing out...' : 'Sign out'}</button>
    </fetcher.Form>
  );

}

