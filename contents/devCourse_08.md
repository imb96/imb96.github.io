---
date: '2023-08-31'
title: '프론트엔드 데브코스 8월 회고'
categories: ['REMEMBRANCE']
summary: '프론트엔드 데브코스 08.01 ~ 08.31 회고'
thumbnail: './til.jpg'
---
<img src="https://i.pinimg.com/originals/87/01/c8/8701c80b90e4eaa78c374a46b09230eb.png" width="700px" height="400px" />
<br>

`국비지원 교육 추천` `코딩 부트캠프 추천`
>프로그래머스 데브코스 과정 중 8월 한달간의 회고

8월에는 Vue 과정을 마무리하고 React가 시작되었다.<br>
Vue과정에서는 Vue프레임워크를 사용해보고 TypeScript의 기본문법과 Vue의 문법,<br>
그리고 라우팅과 상태관리 라이브러리, 프로젝트 세팅(vercel, webpack, vite, tsconfig, ESLint, Prettier) 등을 배웠다.<br>
Vue과제로는 영화를 검색할 수 있는 사이트를 만드는 과제가 있었다. <br>
[Vue로 만든 영화 검색 사이트](https://fedc-4-11-vue-rho.vercel.app/)<br>
Vue와 TypeScript를 사용했고 스타일은 SCSS를 사용했고 상태관리 라이브러리는 pinia를 사용했다. <br><br>
과제의 요구사항은 아래와 같다.

### 📝 회고
Vue를 처음 접해보았는데 Vue는 두가지 방식으로 사용할 수 있었다.<br>
OptionsAPI와 Composition API 방식이다.<br>
OptionsAPI는 Vue2에서 사용하던 방식이고 Composition API는 Vue3에서 사용하는 방식이다.<br>
나는 이번 과제에서 Composition API를 사용해보았는데 개인적으로는 OptionsAPI보다 Composition API가 더 직관적이고 가독성이 좋고 코드를 자유롭게 작성할 수 있어서 좋았다.<br>
상태관리 라이브러리도 처음 사용해보았고 pinia를 사용해보았는데 Vuex보다 훨씬 간단하고 가볍고 사용하기 편하다고 느껴저서 pinia를 채택했다.<br>
규모가 큰 프로젝트는 아니었지만 상태관리 라이브러리를 사용해보면서 컴포넌트끼리 데이터를 전달하는 것이 아니라 상태관리 라이브러리를 사용해 데이터를 저장해두고 필요한 컴포넌트에서 꺼내서 사용하는 것이 정말 편하다고 느껴졌다.<br>
타입스크립트도 조금씩 학습하긴 했지만 프로젝트로는 처음 사용해보았는데 타입스크립트를 사용하면서 타입에 대한 고민을 많이 하게 되었고 타입스크립트를 사용하면서 코드를 작성할 때 더욱 신경을 많이 써야한다는 것을 느꼈다.<br>
타입스크립트 덕분에 코드를 작성할 때 더욱 신경을 많이 쓰게 되었던것 같다.<br>
<br>
Vue과정을 마무리하고 React과정이 시작되었다. React과정에서는 React의 기본문법과 Hooks, Redux, React-Router, Storybook등을 배우는 중이다.<br>