import { LoaderFunctionArgs, redirect, useLocation, useSubmit } from 'react-router-dom';

import { useAppStore } from '@/store';

async function loginAction({ request }: LoaderFunctionArgs) {
  const app = useAppStore.getState();
  const formData = await request.formData();
  const username = formData.get('username') as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if(!username) {
    return {
      error: 'You must provide a username to log in'
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    app.SET_TOKEN('new_token');
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

async function loginLoader() {
  const { token } = useAppStore.getState();
  if(token) {
    return redirect('/');
  }
  return null;
}

export default function Login() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/';
  const submit = useSubmit();

  function login() {
    submit({ username: 'ds', redirectTo: from }, { method: 'post', replace: true });
  }

  return (
    <div>
      Login
      <div>
        <p>You must log in to view the page at {from}</p>

        <button onClick={login}>login</button>
      </div>
    </div>
  );
}

Login.action = loginAction;
Login.loader = loginLoader;
