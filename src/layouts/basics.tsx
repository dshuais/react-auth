/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:09:54
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 22:24:18
 * @description: BasicsLayouts
 */

import { Link, Outlet } from 'react-router-dom';

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
    </div>
  );
}
