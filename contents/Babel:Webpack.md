---
date: '2022-07-16'
title: 'Babel&Webpack'
categories: ['JS']
summary: 'Babel과 Webpack에 대해'
thumbnail: './DeepDive.png'
---
> JavaScrpitDeepDive를 읽고 정리한 글입니다.

# Babel과 Webpack을 이용한 ES6+/ES.NEXT 개발 환경 구축
크롬, 사파리, 파이어폭스, 엣지 같은 에버그린 브라우저의 ES6 지원율은 약 98%로 대부분의 ES6 사양을 지원한다.

하지만 매년 도입되는 ES6 이상의 버전(ES6+)과 제안 단계에 있는 ES 제안 사양(ES.NEXT)은 브라우저에 따라 지원율이 제각각이다.

따라서 ES6+와 ES.NEXT의 최신 ECMAScript 사양을 사용하여 프로젝트를 진행하려면 최신 사양으로 작성된 코드를 경우에 따라 IE를 포함한 구형 브라우저에서 문제 없이 동작시키기 위한 개발 환경을 구축하는 것이 필요하다.

또한 대부분의 프로젝트가 모듈을 사용하므로 모듈 로더도 필요하다. ES6 모듈(ESM)은 대부분의 모던 브라우저에서 사용할 수 있지만 다음과 같은 이유로 아직까지는 ESM보다는 별도의 모듈 로더를 사용하는 것이 일반적이다.
- 구형 부라우저는 ESM을 지원하지 않는다.
- ESM을 사용하더라도 트랜스파일링이나 번들링이 필요한 것은 변함이 없다.
- ESM이 아직 지원하지 않는 기능(bare import 등)이 있고 점차 해결되고는 있지만 아직 몇 가지 이슈가 존재한다.

## Babel
다음 예제에서는 ES6의 화살표 함수와 ES7의 지수 연산자를 사용하고 있다.
```js
[1,2,3].map(n => n ** n);
```
Babel을 사용하면 위 코드를 다음과 같이 ES5 사양으로 변환할 수 있다.

```js
"use strict";

[1,2,3].map(function (n) {
  return Math.pow(n, n);
});
```

이처럼 Babel은 ES6+/ES.NEXT로 구현된 최신 사양의 소스코드를 구형 브라우저에서도 동작하는 ES5 사양의 소스코드로 변환(트랜스파일링)할 수 있다. Babel을 사용하기 위한 개발 환경을 구축해 보자.

### Babel 설치
npm을 사용하여 Babel을 설치해 보자. 터미널에서 다음과 같이 명령어를 입력하여 Babel을 설치한다.

```shell
# 프로젝트 폴더 생성
$ mkdir esnext-project && cd esnext-project
# package.json 생성
$ npm init -y
# babel-core, babel-cli 설치
$ npm install --save-dev @babel/core @babel/cli
```

설치가 완료된 이후 package.json 파일은 다음과 같다. 불필요한 설정은 삭제했다.

```json
{
  "name": "esnext-project",
  "version": "1.0.0",
  "devDependencies": {
    "@babel/cli": "^7.10.3",
    "@babel/core": "^7.10.3"
  }
}
```

참고로 Babel, Webpack, 플러그인의 버전은 빈번하게 업그레이드된다. npm.install은 언제나 최신 버전의 패키지를 설치하므로 만약 위 버전 그대로 설치하고 싶다면 다음과 같이 패키지 이름 뒤에 @과 설치하고 싶은 버전을 지정한다.

```shell
# 버전 지정 설치
npm install --save-dev @babel/core@7.10.3 @babel/cli@7.10.3
```

### Babel 프리셋 설치와 babel.config.json 설정 파일 작성
Babel을 사용하려면 @babel/preset-env를 설치해야 한다. @babel/preset-env는 함께 사용되어야 하는 Babel 플러그인을 모아 둔 것으로 Babel 프리셋이라고 부른다. Babel이 제공하는 공식 Babel 프리셋은 다음과 같다.

- @babel/preset-env
- @babel/preset-flow
- @babel/preset-react
- @babel/preset-typescript

@babel/preset-env는 필요한 플러그인들을 프로젝트 지원 환경에 맞춰 동적으로 결정해 준다. 프로젝트 지원 환경은 Browserlist 형식으로 .browserlistrc 파일에 상세히 설정할 수 있다. 생략하면 기본값으로 설정된다. 기본 설정은 모든 ES6+/ES.NEXT 사양의 소스코드를 변환한다.

```shell
# @babel/preset-env 설치
$ npm install --save-dev @babel/preset-env
```

설치 완료된 이후 package.json 파일은 다음과 같다.

```json
{
  "name": "esnext-project",
  "version": "1.0.0",
  "devDependencies": {
    "@babel/cli": "^7.10.3",
    "@babel/core": "^7.10.3",
	"@babel/preset-env"- "^7.10.3"
  }
}
```

설치가 완료되면 프로젝트 루트 폴더에 babel.config.json 설정 파일을 생성하고 다음과 같이 작성한다. 지금 설치한 @babel/preset-env를 사용하겠다는 의미다.
```json
{
  "preset": ["@babel/preset-env"]
}
```
### 트랜스파일링

Babel을 사용하여 ES6+/ES.NEXT 사양의 ES5 사양의 소스코드로 트랜스파일링해보자.
Babel CLI 명령어를 사용할 수도 있지만 npm scripts에 Babel CLI 명령어를 등록해 사용하다

package.json 파일에 scripts를 추가한다.

```json
{
  "name": "esnext-project",
  "scripts": {
	"build": "babel src/js -w dist/js"
  }
  "version": "1.0.0",
  "devDependencies": {
    "@babel/cli": "^7.10.3",
    "@babel/core": "^7.10.3",
	"@babel/preset-env"- "^7.10.3"
  }
}
```

위 npm scripts의 buid는 src/js 폴더(타깃 폴더)에 있는 모든 자바스크립트 파일들을 트랜스파일링한 결과물을 dist/js 폴더에 저장한다. 사용한 옵션의 의미는 다음과 같다.
- -w: 타깃 폴더에 있는 모든 자바스크립트 파일들의 변경을 감지하여 자동으로 트랜스파일한다.(--watch)
- -d: 트랜스파일링된 결과물이 저장될 폴더를 지정한다. 지정된 폴더가 존재하지 않으면 자동 생성한다.(--out-dir)

트랜스파일링을 테스트 하기 위해 ES6+/ES.NEXT 사양의 자바스크립트 파일을 작성해 보자. 프로젝트 루트 폴더에 src/js 폴더를 생성한 후 lib.js와 main.js를 추가한다.

```js
// src/js/lib.js
export const pi = Math.PI; // ES6 모듈

export function power(x,y) {
  return x ** y; // ES7 지수 연산자
}

// ES6 클래스
export class Foo {
  #private = 10; // stage 3: 클래스 필드 정의 제안

  foo() {
    // stage 4: 객체 Rest/Spread 프로퍼티 제안
    const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4};
    return {a, b, x};
  }

  bar() {
    return this.#private;
  }
}
```

```js
// src/js/main.js
import { pi, power, Foo} from './lib';

console.log(pi);
console.log(power(pi, pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());
```

터미널에서 다음과 같이 명령어를 입력하여 트랜스파일링을 실행한다.
```shell
$ npm run build
```
### Babel 플러그인 설치

설치가 필요한 Babel 플러그인은 Babel 홈페이지에서 검색할 수 있다. 

## Webpack
Webpack은 의존 관계에 있는 자바스크립트, CSS, 이미지 등의 리소스들을 하나(또는 여러 개)의 파일로 번들링하는 모듈 번들러다. Webpack을 사용하면 의존 모듈이 하나의 파일로 번들링되므로 별도의 모듈 로더가 필요 없다. 그리고 여러 개의 자바스크립트 파일을 하나로 번들링하므로 HTML 파일에서 script 태그로 여러 개의 자바스크립트 파일을 로드해야 하는 번거로움도 사라진다.

Webpack과 Babel을 이용하여 ES6+/ES.NEXT 개발 환경을 구축하여 보자. 
Webpack이 자바스크립트 파일을 번들링하기 전에 Babel을 로드하여 ES6+/ES.NEXT 사양의 소스코드를 ES5 사양의 소스코드로 트랜스파일링하는 작업을 실행하도록 설정할 것이다.

### Webpack 설치
터미널에서 다음과 같이 명령어를 입력하여 Webpack을 설치한다.
```shell
$ npm install --save-dev webpack webpack-cli
```
### babel-loader 설치
Webpack이 모듈 번들링할 때 Babel을 사용하여 트랜스파일링하도록 babel-loader를 설치한다.
```shell
$ npm install -save-dev babel-loader
```
npm scripts를 변경하여 Babel 대신 Webpack을 실행하도록 수정하자.

```js
{
  "name": "esnext-project",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack -w"
  },
  "devDependencies": {
    "@babel/cli": "^7.10.3",
    "@babel/core": "^7.10.3",
    "@babel/plugin-proposal-class-properties": "^7.10.1",
    "@babel/preset-env": "^7.10.3",
    "babel-loader": "^8.1.0",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12"
  }
}
```

### webpack.config.js 설정 파일 작성
webpack.config.js는 Webpack이 실행될 때 참조하는 설정 파일이다. 프로젝트 루트 폴더에 webpack.config.js 파일을 생성하고 다음과 같이 작성한다.

```js
const path = require('path');

module.exports = {
  // entry file
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: './src/js/main.js',
  // 번들링돤 js 파일의 이름과 저장될 경로 지정
  // https://webpack.js.org/configuration/output/#outputpath
  // https://webpack.js.org/configuration/output/#outputfilename
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  // https://webpack.js.org/configuration/module
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            preset: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/configuration/mode
  mode: 'development'
};
```

Webpack을 실행하여 트랜스파일링 및 번들링을 실행해보자. 트랜스파일링은 Babel이 수행하고 번들링은 Webpack이 수행한다.
```shell
$ npm run build
```
### babel-polyfill 설치
Babel을 사용하여 ES6+/ES.NEXT 사양의 소스코드를 ES5 사양의 소스코드로 트랜스파일링해도 브라우저가 지원하지 않는 코드가 남아 있을 수 있다.
Promise, Object.assign, Array.from 등과 같이 ES5 사양으로 대체할 수 없는 기능은 트랜스파일링 되지 않는다. 따라서 이런 객체나 메서드를 사용하기 위해서는 @babel/polyfill을 설치해야 한다.
```shell
$ npm install @babel/polyfill
```
@babel-polyfill은 개발 환경에서만 사용하는 것이 아니라 실제 운영 환경에서도 사용해야 한다. 따라서 개발용 의존성으로 설치하는 --save-dev 옵션을 지정하지 않는다.

ES6의 import를 사용하는 경우에는 진입점의 선두에서 먼저 폴리필을 로드하도록 한다.

```js
// src/js/main.js
import "@babel/polyfill";
import { pi, power, Foo } from './lib';
...
```

Webpack을 사용하는 경우에는 위 방법 대신 webpack.config.js 파일의 entry 배열에 폴리필을 추가한다.

```js
const path = require('path');

module.exports = {
  // entry file
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: ['@babel/polyfill', './src/js/main.js'],
...
}
```

위와 같이 webpack.config.js 파일을 수정하여 폴리필을 반영해보자. 빌드 명령이 실행중이면 정지시키고 다음과 같이 명령어를 입력하여 Webpack을 실행한다.
```shell
$ npm run build
```
dist/js/bundle.js를 확인해보면 폴리필이 추가된 것을 확인할 수 있다.