import React from 'react';
import { useForm } from 'react-hook-form';
import PrettyPrintJson from '../utils/PrettyPrintJson';
import Input from './common/input';
import Select from './common/select';

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
          <Input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            label="이메일"
            register={register({ required: '이메일은 필수 항목 입니다.' })}
            errors={errors}
          />
          <Input
            type="password"
            name="userPassword"
            placeholder="비밀번호를 입력해주세요."
            label="비밀번호"
            register={register({
              required: '비밀번호는 필수 항목입니다.',
              minLength: { value: 8, message: '최소 입력 수는 8자리 입니다.' },
            })}
            errors={errors}
          />
          <Input
            type="password"
            name="userPasswordConfirm"
            placeholder="비밀번호 확인"
            register={register({
              validate: async value => {
                const { userPassword } = getValues({ nest: true });
                return Object.is(value, userPassword) ? undefined : '비밀번호가 동일하지 않습니다.';
              },
            })}
            errors={errors}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="성을 입력해 주세요."
            label="이름"
            register={register({ required: '필수 항목 입니다.' })}
            errors={errors}
          />
          <Input
            type="text"
            name="firstName"
            placeholder="이름을 입력해 주세요."
            register={register({ required: '필수 항목 입니다.' })}
            errors={errors}
          />
          <Select
            name="gender"
            label="성별"
            options={[{ value: 'male', label: '남' }]}
            register={register({ required: '필수 항목 입니다.' })}
            errors={errors}
          />
          <Input
            type="text"
            name="phoneNumber"
            placeholder="-없이 입력해 주세요."
            label="핸드폰"
            register={register({
              required: '필수 항목 입니다.',
              pattern: { value: /^\d{3}\d{3,4}\d{4}$/, message: '정확한 형식으로 숫자만 입력해주세요.' },
            })}
            errors={errors}
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
