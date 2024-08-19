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
