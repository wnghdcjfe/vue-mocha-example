# mocha-test
모카 - vue.js 테스트 코드들을 쌓아 놓는 공간입니다.  

## 명령어
 - Project setup : `npm install`
 - Project testing : `npm run test`
 - Project unit testing : `npm run test:unit`
 - Project Lints and fixes files : `npm run lint` 

## 폴더
 - `tests/*` : 테스트소스들을 관리합니다. <>.spec.js로 명칭을 붙여 생성해야 합니다. 
 - `src/*` : 실제 소스들이 들어갑니다. 

### 테스팅 파일 설명
 - `Ui.spec.js` : UI테스트, 버튼클릭, 스크롤 등을 테스팅합니다.
 - `Data.spec.js` : vue 로컬에 있는 data를 중점적으로 테스팅합니다. 
 - `Props.spec.js` : 부모 컴포넌트로 받은 props를 중점적으로 테스팅합니다. 
 - `Vuex.spec.js` : Vuex의 mutation, actions를 위주로 테스팅합니다. 

### 왜 모카일까? 

### Chail 간략한 설명
 - `expect(2).to.equal(2);` : 동일
 - `expect({a: 1}).to.deep.equal({a: 1});` : === 동일
 - `expect('foo').to.be.a('string'); / expect({a: 1}).to.be.an ('object');` : type 비교
 

### BDD 와 TDD
**kt BDD가 아닙니다.**
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