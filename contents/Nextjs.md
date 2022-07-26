---
date: '2022-08-03'
title: 'Next.js'
categories: ['Next']
summary: 'What is Next.js? Next.js의 작동 방식'
thumbnail: './Next.jpeg'
---
> Next.js 공식문서 (nextjs.org) 읽어보기

Next.js는 빠른 웹 앱을 만들기 위한 빌딩 블록을 제공하는 React프레임워크.
React에 필요한 도구 및 구성을 처리하고 애플리케이션에 대한 추가 구조, 기능 및 최적화 제공.
React를 사용하여 UI를 구축하고 Next.js의 기능을 점진적으로 채택하여 라우팅, 데이터 가져오기, 통합과 같은 일반적인 앱 요구 사항을 해결하며 동시에 개발자와 최종 사용자 경험을 개선할 수 있다.
#### 웹 앱의 빌딩 블록
최신 애플리케이션을 구축할 때 고려해야할 몇 가지 사항
- 사용자 인터페이스 - 사용자가 애플리케이션을 사용하고 상호 작용하는 방법입니다.
- 라우팅 - 사용자가 애플리케이션의 다른 부분 사이를 탐색하는 방법입니다.
- 데이터 가져오기 - 데이터가 있는 위치와 가져오는 방법.
- 렌더링 - 정적 또는 동적 콘텐츠를 렌더링하는 시기와 위치입니다.
- 통합 - 사용하는 타사 서비스(CMS, 인증, 결제 등) 및 연결 방법.
- 인프라 - 애플리케이션 코드(서버리스, CDN, Edge 등)를 배포, 저장 및 실행하는 곳입니다.
- 성능 - 최종 사용자를 위해 애플리케이션을 최적화하는 방법.
- 확장성 - 팀, 데이터 및 트래픽이 증가함에 따라 애플리케이션이 조정되는 방식입니다.
- 개발자 경험 - 팀의 애플리케이션 구축 및 유지 관리 경험.

Next.js는 애플리케이션 개발 및 생산 단계 모두를 위한 기능을 제공한다. 예를 들어
- 개발 단계에서 Next.js는 개발자와 애플리케이션 구축 경험을 최적화한다. TypeScript 및 ESLint 통합, 빠른 새로 고침 등과 같은 개발자 경험 향상을 목표로하는 기능이 제공된다.
- 생산 단계에서 Next.js는 최종 사용자와 애플리케이션 사용 경험을 최적화한다. 코드를 변환하여 성능과 접근성을 높이는 것을 목표로한다.

환경마다 고려 사항과 목표가 다르기 때문에 애플리케이션을 개발에서 프로덕션으로 이동하려면 해야 할 일이 많다. 예를 들어, 애플리케이션 코드는 컴파일, 번들링, 축소 및 코드 분할이 필요하다.
#### Next.js Compiler
Next.js는 이러한 코드 변환의 대부분과 기본 인프라를 처리하여 애플리케이션이 프로덕션으로 더 쉽게 이동 할 수 있도록 한다.
이것은 Next.js에 Rust로 작성된 컴파일러와 컴파일, 축소, 번들링 등에 사용할 수 있는 플랫폼인 SWC가 있기 때문에 가능하다.
Next.js에서 컴파일은 코드를 편집할 때 개발 단계에서 발생하며 프로덕션을 위해 애플리케이션을 준비하기 위한 빌드 단계의 일부로 발생한다.
#### What is Minifying?
코드의 기능을 변경하지 않고 불필요한 코드 서식 및 주석을 제거하는 프로세스다. 파일 크기를 줄여 응용 프로그램의 성능을 향상시키는 것이 목표다.
Next.js에서 JS 및 CSS 파일은 프로덕션을 위해 자동으로 축소된다.
#### What is Bundling?
번들링은 사용자가 웹 페이지를 방문할 떄 파일에 대한 요청 수를 줄이는 것을 목표로 웹 종속성을 해결하고 파일(또는 모듈)을 브라우저에 최적화된 번들로 병합(또는 패키징)하는 프로세스.
#### What is Code Splitting?
일반적으로 애플리케이션을 다른 URL에서 액세스할 수 있는 여러 페이지로 분할한다.
이러한 각 페이지는 애플리케이션에 대한 교유한 진입점이 된다.
코드 분할은 애플리케이션 번들을 각 진입점에 필요한 더 작은 덩어리로 분할하는 프로세스이다. 해당 페이지를 실행하는 데 필요한 코드만 로드하여 애플리케이션의 초기 로드 시간을 개선하는 것이 목표다.
Next.js는 코드 분할을 기본적으로 지원한다. 디렉토리 내의 각 파일 `pages/`는 빌드 단계에서 자체 JavaScript 번들로 자동으로 코드 분할된다.
더나아가서
- 페이지 간에 공유되는 모든 코드는 추가 탐색 시 동일한 코드를 다시 다운로드하지 않도록 다른 번들로 분할된다.
- 초기 페이지 로드 후 Next.js는 사용자가 탐색할 가능성이 있는 다른 페이지의 코드를 미리 로드 할 수있다.
- Dynamic imports (동적 가져오기)는 처음에 로드되는 코드를 수동으로 분할하는 또 다른 방법이다.
#### Build Time and Runtime
빌드 시간(또는 빌드 단계)은 프로덕션용 애플리케이션 코드를 준비하는 일련의 단계에 지정된 이름이다.
애플리케이션을 빌드하면 Next.js가 코드를 프로덕션에 최적화된 파일로 변환하여 서버에 배포하고 사용자가 사용할 수 있다. 이러한 파일에는 다음이 포함된다.
- 정적으로 생성된 페이지용 HTML 파일
- 서버에 페이지를 렌더링 하기 위한 JS 코드
- 클라이언트에서 페이지를 대화형으로 만들기 위한 JS 코드
- CSS 파일
런타임(또는 요청 시간)은 애플리케이션이 빌드 및 배포된 후 사용자의 요청에 대한 응답으로 애플리케이션이 실행되는 기간을 나타낸다.
#### Client and Server
웹 어플리케이션 프로그램의 맥락에서 클라이언트는 어플리케이션 코드에 대한 요청을 서버에 보내는 사용자 장치의 브라우저를 나타낸다. 그런 다음 서버에서 받은 응답을 사용자가 상호 작용할 수 있는 인터페이스로 바꾼다.
서버는 애플리케이션 코드를 저장하고, 클라이언트로부터 요청을 수신하고, 일부 계산을 수행하고, 적절한 응답을 다시 보내는 데이터 센터의 컴퓨터를 나타낸다.
#### What is Rendering?
React에서 작성한 코드를 UI의 HTML 표현으로 변환하기 위한 불가피한 작업 단위가 있다. 이 프로세스를 렌더링이라 한다.
렌더링은 서버 또는 클라이언트에서 수행될 수 있다. 빌드 시 미리 발생하거나 런타임 시 모든 요청에서 발생할 수 있다.
Next.js에서는 서버 측 렌더링, 정적 사이트 생성 및 클라이언트 측 렌더링의 세 가지 유형의 렌더링 방법을 사용할 수 있다.
##### 사전 렌더링(Pre-Rendering)
표준 React 애플리케이션에서 브라우저는 UI를 구성하기 위한 JavaScript 지침과 함께 서버로부터 빈 HTML 셸을 받는다. 초기 렌더링 작업이 사용자의 장치에서 발생하기 때문에 클라이언트 측 렌더링(Client-Side Rendering) 이라한다.
> React useEffect() 같은 데이터 가져오기 후크로 데이터를 가져오도록 선택하여 Next.js 애플리케이션의 특정 컴포넌트에 대해 클라이언트 측 렌더링을 사용하도록 선택할 수 있다.
대조적으로 Next.js는 기본적으로 모든 페이지를 미리 렌더링한다. 사전 렌더링은 HTML이 사용자 장치의 JavaScript로 모두 수행되는 대신 서버에서 미리 생성됨을 의미한다.
실제로 이것은 완전히 클라이언트 측 렌더링된 앱의 경우 렌더링 작업이 완료되는 동안 사용자에게 빈 페이지가 표시됨을 의미한다.
다음은 두 가지 유형의 사전 렌더링이다.
##### 서버 측 렌더링(Server-Side Rendering)
서버 측 렌더링을 사용하면 페이지의 HTML이 각 요청에 대해 서버에서 생성된다. 페이지를 대화형으로 만들기 위해 생성된 HTML,JSON 데이터 및 JavaScript 지침이 클라이언트로 전송된다.
클라이언트에서 HTML은 빠른 비대화형 페이지를 표시하는데 사용되는 반면 React는 JSON 데이터와 JavaScript 명령을 사용하여 컴포넌트를 대화형으로 만든다. 이 과정을 수화(hydration)라 한다.
Next.js에서 getServerSideProps를 사용하여 서버 측 렌더링 페이지를 선택할 수 있다.
> React 18 및 Next 12에는 React 서버 구성 요소의 알파 버전이 도입되었습니다. 서버 컴포넌트는 서버에서 완전히 렌더링되며 렌더링하는 데 클라이언트 측 JavaScript가 필요하지 않다. 또한 서버 컴포넌트를 사용하면 개발자가 일부 논리를 서버에 유지하고 해당 논리의 결과만 클라이언트에 보낼 수 있다. 이렇게 하면 클라이언트로 전송되는 번들 크기가 줄어들고 클라이언트 측 렌더링 성능이 향상된다.
##### 정적 사이트 생성
정적 사이트 생성을 사용하면 HTML이 서버에서 생성되지만 서버 측 렌더링과 달리 런타임에 서버가 없다. 대신 애플리케이션이 배포될 때 빌드시 콘텐츠가 한번 생성되고 HTML이 CDN(Content Delivery Network)에 저장되고 각 요청에 대해 재사용된다.
Next.js에서는 getStaticProps를 사용하여 페이지를 정적으로 생성하도록 할 수 있다.
Next.js의 장점은 정적 사이트 생성, 서버 측 렌더링 또는 클라이언트 측 렌더링 여부에 관계없이 페이지별로 사용 사례에 가장 적합한 렌더링 방법을 선택할 수 있다는 것이다.
#### What is the Network?
애플리케이션 코드가 저장되고 네트워크에 배포되면 실행되는 위치를 아는 것이 도움이 된다. 네트워크를 리소스를 공유할 수 있는 연결된 컴퓨터(또는 서버)로 생각할 수 있다. Next.js 애플리케이션의 경우 애플리케이션 코드를 원본 서버, CDN, 및 Edge에 배포할 수 있다.
##### Origin Servers (원본 서버)
서버는 애플리케이션 코드의 원본 버전을 저장하고 실행하는 주 컴퓨터를 나타낸다.
우리는 이 서버를 CDN 서버 및 Edge 서버와 같이 애플리케이션 코드가 배포될 수 있는 다른 장소와 구별하기 위해 origin이라는 용어를 사용 한다. origin server는 요청을 받으면 응답을 보내기 전에 몇 가지 계산을 한다. 이 계산의 작업 결과는 CDN으로 이동할 수 있다.
##### CDN (콘텐츠 전송 네트워크)
CDN은 전 세계 여러 위치에 정적 콘텐츠를 저장하고 클라이언트와 origin 서버 사이에 배치된다. 새 요청이 들어오면 사용자와 가장 가까운 CDN 위치가 캐시된 결과로 응답할 수 있다.
이렇게 하면 각 요청에 대해 계산을 수행할 필요가 없기 때문에 origin의 부하가 줄어든다. Next.js에서는 사전 렌더링이 미리 수행될 수 있기 때문에 CDN은 작업의 정적 결과를 저장하는 데 매우 적합하여 콘텐츠 전달을 더 빠르게 만든다.
##### Edge
Edge는 사용자에게 가장 가까운 네트워크의 프린지 (또는 엣지)에 대한 일반화된 개념이다. CDN은 네트워크의 가장자리(엣지)에 정적 콘텐츠를 저장하기 때문에 엣지의 일부로 간주될 수 있다.
CDN과 마찬가지로 Edge 서버는 전 세계 여러 위치에 배포된다. 그러나 정적 콘텐츠를 저장하는 CDN과 달리 일부 Edge 서버는 코드를 실행할 수 있다. 즉, 사용자에게 더 가까운 Edge에서 캐싱과 코드실행을 모두 수행할 수 있다.
Edge에서 코드를 실행하면 전통적으로 클라이언트 측 또는 서버 측에서 수행되었던 작업 중 일부를 Edge로 이동할 수 있다. 이렇게 하면 클라이언트로 전송되는 코드의 양이 줄어들고 사용자 요청의 일부가 원본 서버로 다시 돌아갈 필요가 없으므로 애플리케이션의 성능이 향상되어 대기 시간이 줄어든다.


