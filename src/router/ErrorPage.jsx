import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className='flex flex-col w-screen h-screen
    items-center justify-center'>
      <h1 className='text-2xl text-red-900'>
        이런 주소는 존재하지 않아요...
      </h1>
      <Link to='/' className='text-sky-500'>홈페이로 돌아가기</Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
}

export default ErrorPage;