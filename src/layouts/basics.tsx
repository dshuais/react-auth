/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:09:54
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 23:02:58
 * @description: BasicsLayouts
 */

import { Link, Outlet, useFetcher, useRouteLoaderData } from 'react-router-dom';

export type AuthStatus = {
  token: string | void;
}

export default function BasicsLayouts() {

  const fetcher = useFetcher();

  function loginout() {
    fetcher.submit(null, { action: '/logout', method: 'post' });
  }

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

      {/* <AuthStatus /> */}
      <button onClick={loginout}>sign out</button>
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

  function loginout() {
    fetcher.submit(null, { action: '/logout', method: 'post' });
  }

  return (
    // <fetcher.Form method="post" action="/logout">
    //   <button type="submit" disabled={isLoggingOut}>{isLoggingOut ? 'Signing out...' : 'Sign out'}</button>
    // </fetcher.Form>
    <button onClick={loginout}>sign out</button>
  );
}
