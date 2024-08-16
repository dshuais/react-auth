/*
 * @Author: dushuai
 * @Date: 2024-08-16 21:04:46
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-16 22:22:45
 * @description: 心平气和
 */
import { useAppStore } from '@/store';
import { LoaderFunctionArgs, redirect } from 'react-router-dom';

function protectedLoader({ request }: LoaderFunctionArgs) {
  // If the user is not logged in and tries to access `/protected`, we redirect
  // them to `/login` with a `from` parameter that allows login to redirect back
  // to this page upon successful authentication
  const { token } = useAppStore.getState();
  if(!token) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }
  return null;
}

export default function Protected() {
  return (
    <div>
      Protected
    </div>
  );
}

Protected.loader = protectedLoader;
