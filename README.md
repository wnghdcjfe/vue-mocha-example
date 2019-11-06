# mocha-test
모카 X vue.js 테스트 코드들을 쌓아 놓는 공간입니다.  

## 명령어
 - Project setup : `npm install`
 - Project testing : `npm run test`
 - Project unit testing : `npm run test:unit`
 - Project Lints and fixes files : `npm run lint` 

## 폴더
 - `tests/*` : 테스트소스들을 관리합니다. <>.spec.js로 명칭을 붙여 생성해야 합니다. 
 - `src/*` : 실제 소스들이 들어갑니다. 

### 테스팅 파일 설명
 - `UI.spec.js` : UI테스팅
 - `example.spec.js`, `Props.spec.js` : 부모 컴포넌트로 받은 props 관련 테스팅 
 - `route.spec.js` : 라우팅매핑에 관해 테스팅

### Jest
jest는 스냅샷테스트, 모킹의 유리합니다. 모킹이란 가짜함수라는 뜻으로 가짜 함수를 만들어 mockReturnValue을 통해 return값을 정하던가 mockResolvedValue를 통해 가짜 비동기 함수를 만들 수 있습니다. 이를 통해 실제Production의 객체나 DB를 사용하는 부담을 덜수가 있습니다. 예를 들어 테스트를 위해 DB 트랜젝션, 쿼리, 가짜 객체를 생성하는 것보다 훨씬 낫죠. 그리고 외부환경에 의존하지 않고도 독립적인 실행가능한 테스트를 작성할 수 있습니다. 또한 spyOn을 통해 해당 함수의 호출여부와 어떻게 호출되었는지를 알 수 있습니다.

### Mocha
반면에 모카는 유연하고 빠른 테스트 프레임워크이며 테스트 러너만을 지원합니다. 즉, jest처럼 바로 실행되지는 않고 expect, chai와 같은 테스트 라이브러리를 같이 사용해야 합니다. 또한 unexpected, assert, chai 등을 지원하고 jest보다 더 유연합니다.

### Chai 간략한 설명
 - `expect(2).to.equal(2);` : 동일
 - `expect({a: 1}).to.deep.equal({a: 1});` : === 동일
 - `expect('foo').to.be.a('string'); / expect({a: 1}).to.be.an ('object');` : type 비교
 

### BDD 와 TDD 
 - BDD(Behaviour-Driven Development) 비즈니스 요구사항 시나리오를 기반, 특정 기능에 초점을 맞춤(TDD에 이어서 나옴), describe - it - should 인터페이스
 - TDD(Test-Driven Development) 테스트 자체에 집중, low-level (단위테스트), suit - test 인터페이스

꼭 테스트 코드를 먼저짜는 것이 TDD의 기본 철학은 아니며 BDD와 TDD 별다른 차이는 없고 인터페이스가 다르고 BDD는 자연어와 가깝게 테스트 스펙을 정의한다는 게 포인트입니다. 

TDD나 BDD 모두 red - green - refactor 사이클(Make it work. Make it right. Make it fast.)을 따릅니다. 

#### BDD의 기초
 - Feature : 테스트에 대상의 기능/책임을 명시한다.
 - Scenario : 테스트 목적에 대한 상황을 설명한다.
 - Given : 시나리오 진행에 필요한 값을 설정한다.(어떠한 조건)
 - When : 시나리오를 진행하는데 필요한 조건을 명시한다. (어떠한 변화)
 - Then : 시나리오를 완료했을 때 보장해야 하는 결과를 명시한다.(예상되는 결과값) 