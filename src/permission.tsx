import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { useAppStore } from '@/store';

/**
 * 登录的action 登陆后自动跳转到之前想要访问的页面
 */
export async function LoginAction({ request }: LoaderFunctionArgs) {
  const app = useAppStore.getState();
  const formData = await request.formData();
  const token = formData.get('token') as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if(!token) {
    return {
      error: 'You must provide a token to log in'
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    app.SET_TOKEN(token);
  } catch(error) {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: 'Invalid login attempt'
    };
  }

  const redirectTo = formData.get('redirectTo') as string | null;
  return redirect(redirectTo || '/');
}

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
