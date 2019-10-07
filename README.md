# mocha-test
모카 - vue.js 테스트 코드들을 쌓아 놓는 공간입니다. 
 - [vue-cli-unit가이드링크](https://vue-test-utils.vuejs.org/guides/#getting-started)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### BDD & TDD
 - BDD(Behaviour-Driven Development) 비즈니스 요구사항 시나리오를 기반, 특정 기능에 초점을 맞춤(TDD에 이어서 나옴), describe - it - should 인터페이스
 - TDD(Test-Driven Development) 테스트 자체에 집중, low-level (단위테스트), suit - test 인터페이스

테스트 코드를 먼저짜는 것이 TDD의 기본 철학은 아님. 
별다른 차이는 x, 인터페이스가 다르고 BDD는 자연어와 가깝게 테스트 스펙을 정의한다는 게 포인트
용어가 다를뿐. TDD나 BDD 모두 red - green - refactor 사이클(Make it work. Make it right. Make it fast.)을 따름. 

#### BDD
Feature : 테스트에 대상의 기능/책임을 명시한다.
Scenario : 테스트 목적에 대한 상황을 설명한다.
Given : 시나리오 진행에 필요한 값을 설정한다.(어떠한 조건)
When : 시나리오를 진행하는데 필요한 조건을 명시한다. (어떠한 변화)
Then : 시나리오를 완료했을 때 보장해야 하는 결과를 명시한다.(예상되는 결과값) 