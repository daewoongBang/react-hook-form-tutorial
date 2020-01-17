import React from 'react';
import { useForm } from 'react-hook-form';
import PrettyPrintJson from '../utils/PrettyPrintJson';

type FormData = {
  lastName: string;
  firstName: string;
  email: string;
  userPassword: string;
  userPasswordConfirm: string;
  phoneNumber: number;
};

const Join: React.FC = () => {
  const { register, watch, handleSubmit, getValues, errors } = useForm<FormData>();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const watchAllFields = watch();

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            ref={register({ required: '이메일은 필수 항목 입니다.' })}
          />
          <span className="err_msg">{errors.email && errors.email.message}</span>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="userPassword"
            placeholder="비밀번호"
            ref={register({
              required: '필수 항목입니다.',
              minLength: { value: 8, message: '최소 입력 수는 8자리 입니다.' },
            })}
          />
          <span className="err_msg">{errors.userPassword && errors.userPassword.message}</span>
          <input
            type="password"
            name="userPasswordConfirm"
            placeholder="비밀번호 확인"
            ref={register({
              validate: async value => {
                const { userPassword } = getValues({ nest: true });
                return Object.is(value, userPassword) ? undefined : '비밀번호가 동일하지 않습니다.';
              },
            })}
          />
          {errors.userPasswordConfirm && errors.userPasswordConfirm.message}
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="lastName"
            placeholder="성을 입력해 주세요."
            ref={register({ required: '필수 항목 입니다.' })}
          />
          {errors.lastName && errors.lastName.message}
          <input
            type="text"
            name="firstName"
            placeholder="이름을 입력해 주세요."
            ref={register({ required: '필수 항목 입니다.' })}
          />
          {errors.firstName && errors.firstName.message}
          <label htmlFor="gender">성별</label>
          <select name="gender" ref={register}>
            <option value="male">남</option>
            <option value="femail">여</option>
          </select>
          <label htmlFor="phoneNumber">핸드폰</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="-없이 입력해 주세요."
            ref={register({
              required: '필수 항목 입니다.',
              pattern: { value: /^\d{3}\d{3,4}\d{4}$/, message: '정확한 형식으로 숫자만 입력해주세요.' },
            })}
          />
          {errors.phoneNumber && errors.phoneNumber.message}
          <button type="submit">가입하기</button>
        </form>
      </div>
      결과(watch)
      <PrettyPrintJson data={watchAllFields} />
    </div>
  );
};

export default Join;
