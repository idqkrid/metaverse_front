import React, {useEffect} from 'react';
import LoginForm from '../../../components/MemberScrean/Login';

// redux
import { useSelector } from 'react-redux';

// router
import Router from 'next/router';

const MemberLogin = () => {
  const { logInDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (logInDone) {
      Router.push('/');
    } else {
      Router.push('/Member/Login');
    }
  }, [logInDone]);

  return (
    <div>
      <LoginForm />
      {console.log(logInDone)}
      {logInDone ? null : '로그인 실패'}
    </div>
  )
}

export default MemberLogin;