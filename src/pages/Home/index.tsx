import { IndexModelState } from '@/models';
import { Dispatch, connect } from '@umijs/max';
import { Button } from 'antd';

interface IHomeProps {
  home: IndexModelState;
  dispatch: Dispatch;
}

const HomePage: React.FC<IHomeProps> = ({ home, dispatch }) => {
  const { name } = home;
  // const { name } = useModel('global');
  const handleClick = async () => {
    dispatch({ type: 'home/query', payload: { name: '芯云实列demo' } });
  };
  return (
    <div>
      <h1>Home</h1>
      <p>{name}</p>
      <Button onClick={handleClick}>点击改变名字</Button>
    </div>
  );
};

export default connect(({ home }: { home: IndexModelState }) => ({ home }))(
  HomePage,
);
