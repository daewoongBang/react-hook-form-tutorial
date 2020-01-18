# React Hook Form

React Hook Form을 이용해서 간단한 회원가입 폼 만들어보기.

**eslint + prettier**  
<https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project>  
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin —dev  
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev  
.eslintrc.js 추가  
.prettierrc.js 추가

**React-Hook-Form**
yarn add react-hook-form

**emotion 적용**
yarn add @emotion/core  
`create react app`을 이용한 프로젝트는 그냥 import 해서 쓰면 css 적용이 안되서  
아래와 같이 import 상단에 `/** @jsx jsx */` 주석을 넣어준다.

```
/** @jsx jsx */
import { jsx } from '@emotion/core';
```