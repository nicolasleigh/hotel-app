import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRowVertical from '../../ui/FormRowVertical';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';
import ButtonLink from '../../ui/ButtonLink';
import ButtonGroup from '../../ui/ButtonGroup';

function LoginForm() {
  const [email, setEmail] = useState('jonas@example.com');
  const [password, setPassword] = useState('112233');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        // onSettled: () => {
        //   setEmail('');
        //   setPassword('');
        // },
      }
    );
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label='Email address'>
          <Input
            type='email'
            id='email'
            // This makes this form better for password managers
            autoComplete='username'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical label='Password'>
          <Input
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size='large' disabled={isLoading}>
            {!isLoading ? 'Login' : <SpinnerMini />}
          </Button>
        </FormRowVertical>
        <ButtonGroup between>
          <ButtonLink to='/admin/signup' state={{ email }}>
            sign up
          </ButtonLink>
          <ButtonLink to='/admin/forget-password' state={{ email }}>
            forget password?
          </ButtonLink>
        </ButtonGroup>
      </Form>
    </>
  );
}

export default LoginForm;
