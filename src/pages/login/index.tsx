import { useLocation, useSubmit } from 'react-router-dom';

export default function Login() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/';
  const submit = useSubmit();

  function login() {
    submit({ token: 'ds_newtoken', redirectTo: from }, { method: 'post', replace: true });
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
