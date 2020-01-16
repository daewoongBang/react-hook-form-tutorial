import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  userName: string;
};

const App: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userName">이름</label>
      <input name="userName" placeholder="이름" ref={register({ required: '이름은 필수 항목 입니다.' })} />
      {errors.userName && errors.userName.message}
      <input type="submit" />
    </form>
  );
};

export default App;
