/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:09:54
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 22:55:55
 * @description: BasicsLayouts
 */

import { Link, Outlet, useFetcher, useRouteLoaderData } from 'react-router-dom';

export type AuthStatus = {
  token: string | void;
}

export default function BasicsLayouts() {
  return (
    <div>
      BasicsLayouts
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />

      <AuthStatus />
    </div>
  );
}

/**
 * 登录状态组件
 */
function AuthStatus() {
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
