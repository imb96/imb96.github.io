---
date: '2022-07-20'
title: 'Class'
categories: ['JS']
summary: '자바스크립트의 클래스에 대해'
thumbnail: './DeepDive.png'
---
> JavaScrpitDeepDive를 읽고 정리한 글입니다.

# Class
ES6에서 도입된 클래스는 클래스 기반 객체지향 프로그래밍 언어와 매우 흡사한 새로운 객체 생성 메커니즘을 제시한다.

클래스는 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 한다.

클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하고 매우 유사하게 동작하지만 몇 가지 차이가 있다.

클래스를 new 연산자 없이 호출하면 에러가 발생한다. 하지만 생성자 함수를 new 연산자 없이 호출하면 일반 함수로서 호출된다.
클래스는 상속을 지원하는 extends와 super 키워드를 제공한다.
클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 함수 선언문으로 정의된 생성자 함수는 함수 호이스팅, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다.
클래스 내의 모든 코드에는 strict mode가 지정된다.
클래스의 constructor, 프로토타입 메서드, 정적 메서드는 열거되지 않는다.
클래스는 생성자 함수 기반의 객체 생성 방식보다 견고하고 명료하다. 특히 클래스의 extends와 super 키워드는 상속 관계 구현을 더욱 간결하고 명료하게 한다.

클래스 정의
클래스는 class 키워드를 사용하여 정의한다.

일반적이지는 않지만 표현식으로 클래스를 정의할 수도 있다.

```js
// 클래스 선언문
class Person {};
// 익명 클래스 표현식
const Person = class {};
// 기명 클래스 표현식
const Person = class MyClass {};
```

클래스는 일급 객체로서 다음과 같은 특징을 갖는다.

무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
함수의 매개변수에게 전달할 수 있다.
함수의 반환값으로 사용할 수 있다.
클래스 몸체에서 정의할 수 있는 메서드는 constructor(생성자), 프로토타입 메서드, 정적 메서드의 세 가지가 있다.

```js
// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public 하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`I am ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log('Hello');
  }
}
// 인스턴스 생성
const me = new Person('Iron Man');

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Iron Man
// 프로토타입 메서드 호출
me.sayHi(); // I am Iron Man
// 정적 메서드 호출
Person.sayHello(); // Hello

```

클래스 호이스팅
클래스는 함수로 평가된다.

클래스 선언문으로 정의한 클래스는 함수 선언문과 같이 런타임 이전에 평가되어 함수 객체를 생성한다.

이때 클래스가 평가되어 생성된 함수 객체는 생성자 함수로서 호출할 수 있는 함수, 즉 constructor다

클래스는 클래스 정의 이전에 참조할 수 없다.

클래스 선언문은 마치 호이스팅이 발생하지 않는 것처럼 보이나 그렇지 않다.

클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다. 단, 클래스는 let, const 키워드로 선언한 변수처럼 호이스팅된다. 따라서 클래스 선언문 이전에 TDZ에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다.

var, let, const, function, function*, class 키워드를 사용하여 선언된 모든 식별자는 호이스팅된다. 모든 선언문은 런타임 이전에 먼저 실행되기 때문이다.

인스턴스 생성
클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다.

```js
class Person {}
// 인스턴스 생성
const me = new Person();
console.log(me); // Person {}

```

함수는 new 연산자의 사용 여부에 따라 일반 함수나 인스턴스 생성을 위한 생성자 함수로 호출 되지만

클래스는 인스턴스를 생성하는 것이 유일한 존재 이유이므로 반드시 new 연산자와 함께 호출해야 한다.

메서드
클래스 몸체에서 정의할 수 있는 메서드는 constructor, 프로토타입 메서드, 정적 메서드가 있다.

constructor
constructor는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다. constructor는 이름을 변경할 수 없다.

```js
class Person {
	//생성자
    constructor(name) {
		//인스턴스 생성 및 초기화
        this.name = name;
	}
}

```
constructor는 클래스 내에 최대 한 개만 존재할 수 있다. 2개 이상의 constructor를 포함하면 문법 에러가 발생한다.

constructor는 생략할 수 있는데 생략하면 클래스에 빈 constructor가 암묵적으로 정의된다.

constructor를 생략한 클래스는 빈 constructor에 의해 빈 객체를 생성한다.

프로토타입 메서드
클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 prototype 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.

```js
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
    }
    
    //프로토타입 메서드
    sayHi() {
      console.log(`Hi! My name is ${this.name}`);
    }
}
const me = new Person('Irom Man');
me.sayHi(); // Hi! My name is Iron Man

```

생성자 함수와 마찬가지로 클래스가 생성한 인스턴스는 프로토타입 체인의 일원이 된다.

정적 메서드
정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있는 메서드를 말한다.

클래스에서는 메서드에 static 키워드를 붙이면 정적 메서드(클래스 메서드)가 된다.

```js
class Person {
  // 생성자
  constructor(name) {
    //인스턴스 생성 및 초기화
    this.name = name;
  }
  // 정적 메서드
  static sayHi() {
    console.log('Hi');
  }
}

```

정적 메서드는 프로토타입 메서드처럼 인스턴스로 호출하지 않고 클래스로 호출한다.
```js
Person.sayHi(); // Hi
```
정적 메서드는 인스턴스로 호출할 수 없다.

```js
const me = new Person('Iron Man');
me.sayHi(); // TypeError: me.sayHi is not a function

```

정적 메서드와 프로토타입 메서드의 차이
정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다.
정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다.
클래스에서 정의한 메서드의 특징
function 키워드를 생략한 메서드 축약 표현을 사용한다.
객체 리터럴과는 다르게 클래스에 메서드를 정의할 때는 콤마가 필요없다.
암묵적으로 strict mode로 실행된다.
for ... in 문이나 Object.keys 메서드 등으로 열거 할 수없다.
new 연산자와 함께 호출할 수 없다.
클래스의 인스턴스 생성 과정

```js
class Person {
  // 생성자
  constructor(name) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Person{}
    console.log(Object.getPrototypeOf(this) === Person.prototype); // true
    
    //2. this에 바인딩 되어 있는 인스턴스를 초기화 한다.
    this.name = name;
    
    //3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 변환된다.
    }
}

```

프로퍼티
인스턴스 프로퍼티는 constructor 내부에서 정의해야 한다.

접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수 로 구성된 프로퍼티다.

클래스 필드
클래스 필드는 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어다.

클래스 몸체에서 클래스 필드를 정의하는 경우 this에 클래스 필드를 바인딩 해서는 안 된다. this는 클래스의 constructor와 메서드 내에서만 유효하다.

클래스 필드에 초기값을 할당하지 않으면 undefined를 갖는다.

인스턴스를 생성할 때 외부의 초기값으로 클래스 필드를 초기화해야 할 필요가 있다면 constructor에서 클래스 필드를 초기화해야 한다.

상속에 의한 클래스 확장
상속에 의한 클래스 확장은 프로토타입 기반 상속과는 다른 개념이다.

프로토타입 기반 상속은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념 이지만

상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의하는 것이다.

상속을 통해 클래스를 확장하려면 extends 키워드를 사용하여 상속받을 클래스를 정의한다.

```js
// 수퍼(베이스/부모) 클래스
class Base {}
// 서브(파생/자식) 클래스
class Derived extends Base {}

```

extends 키워드
extends 키워드의 역할은 수퍼클래스와 서브클래스 간의 상속 관계를 설정하는 것이다.

클래스도 프로토타입을 통해 상속 관계를 구현한다.

수퍼클래스와 서브클래스는 인스턴스의 프로토타입 체인뿐 아니라 클래스 간의 프로토타입 체인도 생성한다.

이를 통해 프로토타입 메서드, 정적 메서드 모두 상속이 가능하다.

super 키워드
super 키워드는 함수처럼 호출할 수도 있고 this와 같이 식별자 처럼 참조할 수 있는 특수한 키워드다.

super를 호출하면 수퍼클래스의 constructor를 호출한다.

super를 참조하면 수퍼클래스의 메서드를 호출할 수 있다.
