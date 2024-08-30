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
> webpack.config.js에 정의된 index.html 파일 생성

[> index.html 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/index.html)  
[> App.web.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/App.web.js)  
[> index.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/index.js)  
[> index.web.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/index.web.js)  
[> 진입점(entry) 오류](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/error/%EC%A7%84%EC%9E%85%EC%A0%90)

### 프로젝트 실행
    npm run web

package.json에 명시된 "web"에~~

### backend(spring boot) 연동

- **axios 패키지 설치**
> npm install axios
- **package.json 프록시 설정 추가**
> "proxy": "http://localhost:8080",
- **App.js import axios**
> import axios from 'axios'  
> 
> axios.get('http://localhost:8080/hi')  
> .then(response => { setData(response.data) })  

[> 자세히 보기](https://github.com/yi5oyu/Study/blob/main/React%20Native/Spring%20boot%20%EC%97%B0%EB%8F%99)  

## React.js
React-native에 앞서 react ~~~

### import, export
> root/components/A.jsx

    default export or named export

    import React from 'react';
    // default export
    import ImportExport from './components/A';
    // named export
    import { A } from './components/A';

    const App = () => {
      return (
        <ImportExport />
        <A />
      );
    };
    
    export default App;

[> Import Export](https://github.com/yi5oyu/Study/blob/main/React.js/Components/A.jsx)  
[> jsx 확장자 오류](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/error/jsx%20%ED%99%95%EC%9E%A5%EC%9E%90)

### JSX
> root/components/B~C.jsx

[> 예제 B](https://github.com/yi5oyu/Study/blob/main/React.js/Components/B.jsx)  
[> 예제 C](https://github.com/yi5oyu/Study/blob/main/React.js/Components/C.jsx)

#### 규칙
    1. 하나의 엘리먼트만 반환되어야 함
    Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
    
    <div>1</div>
    <div>2</div>
    =>
    <>
      <div>1</div>
      <div>2</div>
    </>
    
    2. 모든 태그 닫아줘야함
    Unterminated JSX contents
    
    <div><div>
    <input>
    =>
    <div></div>
    <input/>

    3. 대부분의 속성은 캐멀케이스
    HTML: background-color
    JSX: backgroundColor
    <div className="box"></div>

#### 중괄호 { }
JSX에서 중괄호를 사용하여 JavaScript를 사용할 수 있음
     
    ""를 {}로 바꿔 사용
    객체전달은 {{ ... }}를 사용해야함(JSX 중괄호 안에 있는 JS객체)

    import pic from '/assets/reactLOGO.svg';

    <img className="box" style={{width:"200px", height:"200px"}} src={pic}/>

### props
> root/components/D.jsx

컴포넌트간 데이터(문자열, 숫자, 배열, 객체, 함수 등..)/기능(이벤트 핸들러 등..) 주고 받음   
읽기 전용(변경 할 수 없음)   
defaultProps로 디폴트 값 설정할 수 있음

    function Greeting(props) {
      return <h1>Hello {props.name}</h1>;
    }

    Greeting.defaultProps = {
      name: "World"
    };

    function App() {
      return <Greeting name="Young" />;
    }

[> 예제 D](https://github.com/yi5oyu/Study/blob/main/React.js/Components/D.jsx)

#### props-types
props 타입 설정   
버그를 예방할 수 있음   
개발 모드에서만 동작함(빌드 과정에서 제거됨)   
개발자 모드의 콘솔창에서 확인 가능

    import PropTypes from 'prop-types';

    Greeting.propTypes = {
      name: PropTypes.string
    }

[> props-types 라이브러리](https://github.com/yi5oyu/Study/edit/main/React.js/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/props-types)

### 랜더링
> root/components/E~F.jsx

#### 조건부 랜더링

if문, &&, ? :(삼항연산자) 등으로 조건을 만들어 랜더링할 수 있음  

    function E(props){
      const ok = <h3 style={{ color:"red" }}> PW: {props.pw} </h3>
      const no = <div> no </div>

      return(props.ck ? ok : no);
    }

#### 리스트 랜더링

filter(), map()을 사용해 배열을 필터링하거나 매핑함  
map()에 사용되는 엘리먼트에는 key가 반드시 필요함  
key는 고유한 값을 가져야고 변경되어선 안됨

    function F(){
      const fs = ["f","e","d","c","b","a"];
      const list = fs.map((f, index) => <div key={index}>{f}</div>);

      return(
        <div>{list}</div>
      )
    }

### React hook

> - useState()  
> root/components/H~O.jsx   

> - useEffect()  
> root/components/P~R.jsx

> - useContext()  
> root/components/S~S2.jsx

> - useRef()
> root/components/T~U.jsx

#### useState( )
상태가 변경될 때마다 다시 랜더링함

    import React, {useState} from 'react';
    
    정의
    const [count, setCount] = useState(0);
    const [현재값, 업데이트함수] = useState(초기값);

    - onClick
    const increment = () => {
      setName(c => c + 1);
    }

    <button onClick={increment}>클릭</button>

    const [count, setCount] = useState(() => {
      // 첫번째 랜더링에서만 호출됨
      return state();
    });

    - onChange
    function handleCountChange(event){
        setCount(event.target.value);
    }

    <input value={count} onChange={handleCountChange} type="number"/>
    <p>수: {count}</p>

#### useEffect( )
1. useEffect(() => { })  
   component가 랜더링될 때마다 발생하는 작업에 유용


2. useEffect(() => { }, [])  
   초기 렌더링 한 번만 실행 (API에서 데이터 가져오거나 이벤트 리스너 설정)


3. useEffect(() => { }, [value])  
   component가 랜더링될때와 값이 변경될 때마다 실행


    import React, {useState, useEffect} from 'react';

    const [count, setCount] = useState(0);
    
    // 랜더링될 때마다 실행
    useEffect(() => {
      document.title = `타이틀 : ${count}`;
    });

    // [] 초기 렌더링 후에 한 번만 실행
    useEffect(() => {
      document.title = `타이틀 : ${count}`;
    }, []);

    // count가 변경될 때만 실행
    useEffect(() => {
      document.title = `타이틀 : ${count}`;
    }, [count]);

마운트(component가 DOM에 처음 추가됨) <-> 마운트 해제(component가 DOM에서 제거)   
메모리 누수 방지, 성능 최적화

    useEffect(() => {
      // 초기 랜더링 후에 이벤트리스너 등록됨
      window.addEventListener("resize", handleResize);

      return () => {
        // 마운트 해제되면 이벤트리스너 삭제
        window.removeEventListener("resize", handleResize);
      }
    }, []);

#### useContext()
props를 대신해 createContext()와 useContext()를 사용해 값를 사용 수 있음

    - createContext() 컨텍스트 객체 생성
    import React, {useState, createContext} from 'react';

    export const AContext = createContext('a');

    const [name, setName] = useState('a');
    <AContext.Provider value={name}>
      <S1 />
    </AContext.Provider>

    - useContext() 컨텍스트 사용
    import React, { useContext } from 'react';
    import { AContext } from './S';

    const name = useContext(AContext);
    <div>{name}</div>

#### useRef()
useState()와 달리 랜더링없이 변경가능한 값을 생성하고 관리할 수 있음   
DOM 요소에 직접 접근할 수 있음

    import React, {useRef} from 'react';

    const ref = useRef(0);
    
    inputRef.current.focus();
    inputRef.current.style.background = "yellow";

## React-native

### React-native-web

[> ](https://necolas.github.io/react-native-web/docs/)  
