# React-Native

## 환경설정 (Setting up)
[> React-Native-Cli 기반 환경설정](https://github.com/yi5oyu/Study/blob/main/React%20Native/%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95/React-Native-Cli)        

> 최상위 폴더(root)

### 프로젝트 생성 
    npx react-native init projectName --version 0.70

 react-native를 하위 폴더에 관리 할 경우    
 프로젝트 폴더 > 프로젝트 생성 (react-native/frontend)    
 react-native가 생성된 frontend 폴더에 .git 폴더 생성됨   
 상위 폴더(react-native)를 git repository에 등록하려면 하위폴더(frontend)에 생성된 .git 폴더 삭제해야함    

VCS

### Git hub
    Repository 생성 > git init > git add . > git commit -m "프로젝트 생성" > git remote add origin https://github.com/<github_ID>/<reposotory_name>.git > git push -u origin master

.git 폴더가 없는 경우 git init으로 생성

### Web 개발을 위한 패키지 설치
    npm install react-native-web@^0.19.12 react-dom@18.1.0
    npm install webpack webpack-cli webpack-dev-server babel-loader babel-plugin-transform-flow-strip-types file-loader html-webpack-plugin --save-dev

> package.json 파일을 보고 react 와 같은 react-dom 버전 설치해야함

[> 의존성 충돌](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/error/%EC%9D%98%EC%A1%B4%EC%84%B1%20%EC%B6%A9%EB%8F%8C)   
[> 설치된 패키지](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/%ED%8C%A8%ED%82%A4%EC%A7%80)

### 설정 파일 수정
**package.json**

    "web": "webpack serve --config webpack.config.js"

[> package.json 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/package.json)
<hr>

**babel.config.js**   

.babelrc(JSON 형태의 파일)로 대체 될 수 있음   

[> babel.config.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/babel.config.js)
<hr>

**webpack.config.js**

[> webpack.config.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/webpack.config.js)

### Cross-Platform Web 추가
리액트 애플리케이션의 진입점 index.js 수정   

> Web에서만 사용할 경우 index.web.js 와 App.web.js로 분리해서 사용할 수 있음

[> index.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/index.js)  
[> index.web.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/index.web.js)  
[> 진입점(entry) 오류](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/error/%EC%A7%84%EC%9E%85%EC%A0%90)

### 프로젝트 실행
    npm run web

package.json에 명시된 "web"에~~

## React.js
React-native에 앞서 react ~~~

### import, export
> root/components/A.jsx

    App.web.js 파일

    import React from 'react';
    import ImportExport from './components/A';

    const App = () => {
      return (
        <ImportExport />
      );
    };
    
    export default App;

[> Import Export](https://github.com/yi5oyu/Study/blob/main/React.js/Components/A.jsx)  
[> jsx 확장자 오류](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/error/jsx%20%ED%99%95%EC%9E%A5%EC%9E%90)

###