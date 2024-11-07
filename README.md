# React-Native   
    JavaScript와 React를 이용해 네이티브 모바일 애플리케이션을 만들 수 있음    
    실제 네이티브 컴포넌트를 사용하여 UI를 렌더링

  
## 환경설정
[> React-Native-Cli 기반 환경설정](https://github.com/yi5oyu/Study/blob/main/React%20Native/%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95/React-Native-Cli)        

> 최상위 폴더(root)

### 프로젝트 생성 
    npx react-native init projectName --version 0.70

 react-native를 하위 폴더에 관리 할 경우    
 프로젝트 폴더 > 프로젝트 생성 (react-native/frontend)    
 react-native가 생성된 frontend 폴더에 .git 폴더 생성됨   
 상위 폴더(react-native)를 git repository에 등록하려면 하위폴더(frontend)에 생성된 .git 폴더 삭제해야함    

### Git hub
    Repository 생성 > git init > git add . > git commit -m "프로젝트 생성" > git remote add origin https://github.com/<github_ID>/<reposotory_name>.git > git push -u origin master

> .git 폴더가 없는 경우 git init으로 생성

## Cross-Platform 
    하나의 코드베이스로 iOS와 Android 플랫폼 모두에서 동작하는 애플리케이션을 개발할 수 있음

### **WEB**    
    React-native-web
[> React Native for Web](https://necolas.github.io/react-native-web/docs/)  

- **참고 사항**  
  webpack.config.js에 정의된 index.html 파일 생성  
  [> index.html 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/index.html)  
  Web에서 사용할 경우 index.web.js 와 App.web.js로 분리해서 사용할 수 있음  
  [> App.web.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/App.web.js)  
  리액트 애플리케이션의 진입점 index.js 수정  
  [> index.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/index.js)  
  [> index.web.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/index.web.js)  
  [> 진입점(entry) 오류](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/error/%EC%A7%84%EC%9E%85%EC%A0%90)


#### Web 개발을 위한 패키지 설치
    react-native 0.70 버전과 호환되는 패키지 추천
    npm install react-native-web@^0.19.12 react-dom@18.1.0
    npm install webpack webpack-cli webpack-dev-server babel-loader babel-plugin-transform-flow-strip-types file-loader html-webpack-plugin --save-dev
    npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-gesture-handler

> package.json 파일을 보고 react 와 같은 react-dom 버전 설치해야함

[> 의존성 충돌](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/error/%EC%9D%98%EC%A1%B4%EC%84%B1%20%EC%B6%A9%EB%8F%8C)   
[> 설치된 패키지](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/%ED%8C%A8%ED%82%A4%EC%A7%80)

#### 설정 파일 수정
 - **package.json**  
    "web": "webpack serve --config webpack.config.js"  
[> package.json 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/package.json)


- **babel.config.js**   
.babelrc(JSON 형태의 파일)로 대체 될 수 있음   
[> babel.config.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/babel.config.js)


- **webpack.config.js**   
[> webpack.config.js 파일](https://github.com/yi5oyu/Study/blob/main/React%20Native/Web/webpack.config.js)

## backend(spring boot) 연동

- **axios 패키지 설치**    
 npm install axios
- **package.json 프록시 설정 추가**   
 "proxy": "http://localhost:8080",
- **App.js import axios**   
 import axios from 'axios'    
axios.get('http://localhost:8080/hi')    
.then(response => { setData(response.data) })    

[> 자세히 보기](https://github.com/yi5oyu/Study/blob/main/React%20Native/Spring%20boot%20%EC%97%B0%EB%8F%99)  

## Components
    root/components/

### 네이티브 컴포넌트
    https://reactnative.dev/docs/0.70/components-and-apis

- **Basic Components**   
  
  **View**`(div)`    
  [> View.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/View.jsx)    
  **Text**`(p)`    
  [> Text.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/Text.jsx)    
  **Image**`(img)`    
  [> Image.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/Image.jsx)    
  **TextInput**`(input type="text")`   
  [> TextInput.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/TextInput.jsx)   
  **ScrollView**`(스크롤 가능한 div)`   
  [> ScrollView.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/ScrollView.jsx)    
  **StyleSheet**`(css)`  

- **User Interface**  
  
  Button`(button)`    
  Switch`(toggle)`   
  [> Switch](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/Switch.jsx)    
  CheckBox`(input type="checkbox")`   
  [> CheckBox.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/CheckBox.jsx)   
  ImageBackground`(background-image)`   
  [> ImageBackground.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/ImageBackground.jsx)    
  Picker`(select)`    
  [> Picker](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/Picker.jsx)    
  Pressable`(div onclick="handleClick()")`    
  [> Pressable](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/Pressable.jsx)    
  ProgressBar `(progress)`    
  [> ProgressBar ](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/ProgressBar.jsx)

- **List Views** `(ul, ol, li)`   
  
  FlatList, SectionList    
  [> Lists](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/Lists.jsx)

- **Android Components and APIs**   
  
  BackHandler`(뒤로가기 버튼 제어)`, DrawerLayouAndroid`(네비게이션 드로어)`, PermissionsAndroid`(앱의 권한 요청을 관리)`, ToastAndroid`(토스트 메시지)`

- **iOS Components and APIs**    
  
  ActionSheetIOS`(여러 옵션을 제공하는 메뉴)`

- **Others**    
  
  ActivityIndicator`(로딩 스피너)`   
  [> ActivityIndicator](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/ActivityIndicator.jsx)   
  Modal`(모달 다이얼로그)`    
  [> Modal.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/Modal.jsx)    
   Alert`(alert())`, Animated`(애니메이션 라이브러리)`, Dimensions, KeyboardAvoidingView`(키보드에 가려지는 문제를 해결)`, Linking`(외부 링크, 다른 앱 실행)`, PixelRatio, RefreshControl, StatusBar`(모바일 기기의 상태바)`

### Example

#### Login.jsx

[> Login.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/Login.jsx)

#### SignUp.jsx

[> SignUp.jsx](https://github.com/yi5oyu/Study/blob/main/React%20Native/Components/SignUp.jsx)

## 스크립트  

- `npm run android`   
  Android 앱 실행  

- `npm run ios`   
  iOS 앱 실행    

- `npm start`   
  개발 서버 시작    

- `npm test`   
  테스트 실행  

- `npm run lint`  
  lint 검사 시작

- `npm run web`      
   web 버전 실행