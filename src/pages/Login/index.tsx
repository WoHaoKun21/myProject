import { UserType } from '@/components/Icon';
import { UnlockFilled } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-form';
import { history, useDispatch } from '@umijs/max';
import { message } from 'antd';
import React from 'react';
import styles from './index.less';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch({ type: 'shop/addLogin', payload: { login: true } });
    message.success('登陆成功');
    history.push('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.box_style}>
        <LoginForm
          title="游客登陆"
          initialValues={{ username: 'admin', password: 'admin123' }}
          onFinish={() => handleSubmit()}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserType />,
            }}
            placeholder="输入你的手机号或用户名"
            rules={[{ required: true, message: '　　请输入账号' }]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <UnlockFilled />,
            }}
            placeholder="输入你的密码"
            rules={[{ required: true, message: '　　请输入密码' }]}
          />
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
