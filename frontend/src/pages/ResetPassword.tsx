import styled from "styled-components";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import ResetPassForm from "../features/authentication/ResetPassForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

export default function ResetPassword() {
  return (
    <div className='max-w-[400px] mx-auto mt-40'>
      <Logo />
      <h2 className='text-2xl font-semibold mb-5 text-center'>Enter your new password</h2>
      <ResetPassForm />
    </div>
  );
}
