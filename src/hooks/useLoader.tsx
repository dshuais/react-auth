import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { useAppStore } from '@/store';

/**
 * 受保护页面的Loader
 */
export function ProtectedLoader({ request }: LoaderFunctionArgs) {
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

/**
 * login页面的Loader 主要用来频闭登陆后再次进入/login
 * 所有有该需求的页面都可以使用
 */
export async function LoginLoader() {
  const { token } = useAppStore.getState();
  if(token) {
    return redirect('/');
  }
  return null;
}
