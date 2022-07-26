---
date: '2022-07-14'
title: 'Ajax / JSON'
categories: ['JS']
summary: 'AJAX와 JSON에 대해'
thumbnail: './DeepDive.png'
---
> JavaScrpitDeepDive를 읽고 다른 래퍼런스를 참고하여 추가한 글입니다.

## Ajax 란?
Ajax(Asynchronous JavaScript and XML)란 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고, 서버가 응답한 데이터를 수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 말한다. (여기 XML이 있는 이유는 예전엔 데이터 포맷으로 XML을 많이 사용했기 때문)
Ajax는 브라우저에서 제공하는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다. XMLHttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공한다.
Ajax의 등장으로 서버로부터 웹페이지의 변경에 필요한 데이터만 비동기 방식으로 전송받아 웹페이지를 변경할 필요가 없는 부분은 다시 렌더링하지 않고, 변경할 필요가 있는 부분만 한정적으로 렌더링하는 방식이 가능해졌다. 이를 통해 브라우저에서도 데스크톱 애플리케이션과 유사한 빠른 퍼포먼스와 부드러운 화면 전환이 가능해졌다.
Ajax는 전통적인 방식과 비교했을 때 다음과 같은 장점이 있다.
1. 변경할 부분을 갱신하는 데 필요한 데이터만 서버로 전송받기 때문에 불필요한 데이터 통신이 발생하지 않는다.
2. 변경할 필요가 없는 부분은 다시 렌더링하지 않는다. 따라서 화면이 순간적으로 깜박이는 현상이 발생하지 않는다.
3. 클라이언트와 서버와의 통신이 비동기 방식으로 동작하기 때문에 서버에게 요청을 보낸 이후 블로킹이 발생하지 않는다.
### 어떻게 동작?
사용자가 AJAX가 적용된 UI와 상효작용하면, 서버에 AJAX 요청을 보내게 된다. 서버는 DB에서 데이터를 가져와서 JS파일에 정의되어 있는 대로 HTML/CSS와 데이터를 융합하여 만든 DOM 객체를 UI에 업데이트 시킨다. 비동기로 이루어지며, 기존의 페이지를 전부 로딩하는 방식이 아닌 일부만 업데이트 하는 방식이다.
### 어떻게 사용?
XMLHttpRequest
일반적으로 XMLHttpRequest 객체를 사용하여 인스턴스를 만들어 인스턴스의 open(), send() 등의 메소드를 이용.
```js
var ourRequest = new XMLHttpRequest();
ourRequest.open(
  "GET",
  "https://learnwebcode.github.io/json-example/animals-1.json"
);
ourRequest.onload = () => {
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData[0]);
};
ourRequest.send();
```
open()으로 요청할 메소드와 URL을 설정한 뒤, 모두 로드되었을 경우의 콜백함수를 초기화한다.
Fetch API
XMLHttpRequest 보다 훨씬 직관적이고 Promise를 리턴한다.
```js
fetch("https://learnwebcode.github.io/json-example/animals-1.json")
  .then(res => res.json())
  .then(resJson => console.log(resJson));
```
응답객체는 json(), blob() 과 같은 내장 메서드로 body를 추출해내고 다시 Promise를 리턴한다.
## JSON
JSON(JavaScript Object Notation)은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷이다.
자바스크립트에 종속되지 않은 언어 독립형 데이터 포맷으로, 대부분의 프로그래밍 언어에서 사용할 수 있다.

JSON은 자바스크립트의 객체 리터럴과 유사하게 키와 값으로 구성된 순수한 텍스트다.

```js
{
  "name": "Lee",
  "age": 20,
  "alive": true,
  "hobby": ["traveling", "tennis"]
}
```
JSON의 키는 반드시 큰따옴표로 묶어야 한다. 값은 객체 리터럴과 같은 표기법을 그대로 사용할 수 있다. 하지만 문자열은 반드시 큰따옴표로 묶어야한다.

JSON.stringfy 메서드는 객체를 JSON 포맷의 문자열로 변환한다. 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화해야 하는데 이를 직렬화(serializing)라 한다.

```js
const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);
console.log(typeof json, json);
// string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const preetyJson = JSON.stringify(obj, null, 2);
console.log(typeof preetyJson, preetyJson);
/**
 * string {
 *  "name": "Lee",
 *  "age": 20,
 *  "alive": true,
 *  "hobby": [
 *    "traveling",
 *    "tennis"
 *   ]
 * }
 */

// replacer 함수. 값의 타입의 Number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
  // undefined: 반환하지 않음
  return typeof value === 'number' ? undefined : value;
}
// JSON.stringfy 메서드에 두 번쨰 인수로 replacer 함수로 전달한다.
const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);
/**
 * string {
 *   "name": "Lee",
 *   "alive": true,
 *   "hobby": [
 *     "traveling",
 *     "tennis"
 *   ]
 * }
 */

// JSON.stringify 메서드는 객체뿐만 아니라 배열도 JSON 포맷의 문자열로 변환한다.

const todos = [
  {id: 1, content: 'HTML', completed: false},
  {id: 2, content: 'CSS', completed: true},
  {id: 3, content: 'JavaScript', completed: false},
];
// 배열로 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(todos, null, 2);
console.log(typeof json, json);
/**
 * string[
 *   {
 *     "id": 1,
 *     "content": "HTML",
 *     "completed": false
 *   },
 *   {
 *     "id": 2,
 *     "content": "CSS",
 *     "completed": true
 *   },
 *   {
 *     "id": 3,
 *     "content": "JavaScript",
 *     "completed": false
 *   },
 * ]
 */
```
JSON.parse 메서드는 JSON 포맷의 문자열을 객체로 변환한다. 서버로부터 클라이언트에게 전송된 JSON 데이터는 문자열이다. 이 문자열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데 이를 역질렬화(deserializing)라 한다.

```js
const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traveling', 'tennis']
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);
console.log(typeof json, json);
// JSON 포맷의 문자열을 객체로 변환한다.
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
```
배열이 JSON 포맷의 문자열로 변환되어 있는 경우 JSON.parse는 문자열을 배열 객체로 변환한다. 배열의 요소가 객체인 경우 배열의 요소까지 객체로 변환한다.

## XMLHttpRequest
브라우저는 주소창이나 HTML의 form 태그 또는 a 태그를 통해 HTTP 요청 전송 기능을 기본 제공한다. 자바스크립트를 사용하여 HTTP 요청을 전송하려면 XMLHttpRequest 객체를 사용한다. Web API인 XMLHttpRequest 객체는 HTTP 요청 전송과 HTTP 응답 수신을 위한 다양한 메서드와 프로퍼티를 제공한다.

XMLHttpRequest 객체는 XMLHttpRequest 생성자 함수를 호출하여 생성한다. XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이므로 브라우저 환경에서만 정상적으로 실행된다.
```js
// XMLHttpRequest 객체의 생성
const xhr = new XMLHttpRequest();
```
XMLHttpRequest 객체는 다양한 프로퍼티와 메서드를 제공한다.

HTTP 요청을 전송하는 경우 다음 순서를 따른다.
1. XMLHttpRequest.prototype.open 메서드로 HTTP 요청을 초기화한다.
2. 필요에 따라 XMLHttpRequest.prototype.setRequestHeader 메서드로 특정 HTTP 요청의 헤더 값을 설정한다.
3. XMLHttpRequest.prototype.send 메서드로 HTTP 요청을 전송한다.

```js
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open('GET', '/users');

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청 전송
xhr.send();
```
open 메서드는 서버에 전송할 HTTP 요청을 초기화한다. open 메서드를 호출하는 방법은 다음과 같다.
`xhr.open(method, url[, async])`

| 매개변수    |     설명    |
|:----------|:----------|
| method   |   HTTP 요청 메서드("GET", "POST", "PUT", "DELETE" 등)  |
| url      | HTTP 요청을 전송할 URL    |
| async    | 비동기 요청 여부, 옵션으로 기본값은 true이며, 비동기 방식으로 동작한다.    |

HTTP 요청 메서드는 클라이언트가 서버에게 요청의 종류와 목적(리소스에 대한 행위)을 알리는 방법이다. 주로 5가지 요청 메서드(GET, POST, PUT, PATCH, DELETE 등)을 사용하여 CRUD를 구현한다.

| HTTP 요청 메서드  | 종류  | 목적  | 페이로드  |
|:----------|:----------|:----------|:----------|
| GET    | index/retrieve    | 모든/특정 리소스 취득    | X |
| POST    | create    | 리소스 생성  | O |
| PUT    | replace    | 리소스의 전체 교체 | O |
| PATCH    | modify    | 리소스의 일부 수정 | O |
| DELETE    | delete    | 모든/특정 리소스 삭제 | X |

send 메서드는 open 메서드로 초기화된 HTTP 요청을 서버에 전송한다. 기본적으로 서버로 전송하는 데이터는 GET, POST 요청 메서드에 따라 전송 방식에 차이가 있다.
- GET 요청 메서드의 경우 데이터를 URL의 일부분인 쿼리 문자열 query string로 서버에 전송한다.
- POST 요청 메서드의 경우 데이터(페이로드)를 요청 몸체에 담아 전송한다.
send 메서드에는 요청 몸체에 담아 전송할 데이터(페이로드)를 인수로 전달할 수 있다. 페이로드가 객체인 경우 반드시 JSON.stringfy 메서드를 사용하여 직렬화한 다음 전달해야 한다.

`xhr.send(JSON.stringfy({id:1, content:'HTML', completed:false}));`

** HTTP 요청 메서드가 GET인 경우 send 메서드에 페이로드로 전달한 인수는 무시되고 요청 몸체는 null로 설정된다. **

setRequestHeader 메서드는 특정 HTTP 요청의 헤더 값을 설정한다. setRequestHeader 메서드는 반드시 open 메서드를 호출한 이후에 호출해야 한다. 자주 사용하는 HTTP 요청 헤더인 Content-type과 Accept에 대해 살펴보자.
Content-type은 요청 몸체에 담아 전송할 데이터의 MIME 타입의 정보를 표현한다. 자주 사용되는 MIME타입은 다음과 같다.
[MIME type](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

| MIME 타입  | 서브타입 |
|:----------|:----------|
| text    | text/plain, text/html, text/css, text/javascript |
| application    | application/json, application/x-www-form-urlencode   |
| multipart   | multipart/formed-data|

다음은 요청 몸체에 담아 서버로 전송할 페이로드의 MIME 타입을 지정하는 예다.

```js
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open('POST', '/users');

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청 전송
xhr.send(JSON.stringfy({id:1, content: 'HTML', completed: false}));
```

HTTP 클라이언트가 서버에 요청할 때 서버가 응답할 데이터의 MIME 타입을 Accept로 지정할 수 있다.

```js
// 서버가 응답할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader('accept', 'application/json');
```
만약 Accept 헤더를 설정하지 않으면 send 메서드가 호출될 때 Accept 헤더가 */* 으로 전송된다. 

서버가 전송한 응답을 처리하려면 XMLHttpRequest 객체가 발생시키는 이벤트를 캐치해야 한다. XMLHttpRequest 객체는 onreadystatechange, onload, onerror 같은 이벤트 핸들러 프로퍼티를 갖는다. 이 이벤트 핸들러 프로퍼티 중에서 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티 값이 변경된 경우 발생하는 readystatechange 이벤트를 캐치하여 다음과 같이 HTTP 응답을 처리할 수 있다. XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이므로 다음 예제는 반드시 브라우저 환경에서 실행해야 한다.

```js
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
// https://jsonplaceholder.typicode.com은 Fake REST API를 제공하는 서비스다.
xhr.open('GET', 'jsonplaceholder.typicode.com/todos/1');

// HTTP 요청 전송
xhr.send();

// readystatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티가
// 변경될 때마다 발생한다.
xhr.onreadystatechange = () => {
  // readyState 프로퍼티는 HTTP 요청의 현재 상태를 나타낸다.
  // readyState 프로퍼티 값이 4(XMLHttpRequest.DONE)가 아니면 서버 응답이 완료되지 않은 상태다.
  // 만약 서버 응답이 아직 완료되지 않았다면 아무런 처리를 하지 않는다.
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  // status 프로퍼티는 응답 상태 코드를 나타낸다.
  // status 프로퍼티 값이 200 이면 정상적으로 응답된 상태이고
  // status 프로퍼티 값이 200이 아니면 에러가 발생한 상태다.
  // 정상적으로 응답된 상태라면 response 프로퍼티에 서버의 응답 결과가 담겨 있다.
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
    // {userId: 1, id: 1, title: "delectus aut autem", completed: false}
  } else {
    console.error('Error', xhr.status, xhr.statusText);
  }
};
```
send 메서드를 통해 HTTP 요청을 서버에 전송하면 서버는 응답을 반환한다. 하지만 언제 응답이 클라이언트에 도달할지는 알 수 없기 때문에 readystatechange 이벤트를 통해 HTTP 요청의 현재 상태를 확인해야 한다. readystatechange 이벤트는 HTTP 요청의 현재 상태를 나타내는 readyState 프로퍼티가 변경될 때마다 발생한다.

readystatechange 이벤트 대신 load 이벤트를 캐치해도 좋다. load 이벤트는 HTTP 요청이 성공적으로 완료된 경우 발생한다. 따라서 xhr.readyState 가 XMLHttpRequest.DONE인지 확인할 필요가 없다.
