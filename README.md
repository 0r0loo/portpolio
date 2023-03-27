trpc 를 해보려고 했는데 모노레포를 구현하라고 써있어서
모노레포 구현 해보는 김에 내 포트폴리용 레포로 만들면 괜찮을 꺼같아서 만듬


# 명령어
```bash
yarn common  공용 함수 
yarn components  공용 컴포넌트
yarn nextapp  테스트용 넥스트 
yarn nestapp  테스트용 네스트
```

# 폴더구조
backend : 백엔드 프로젝트 관리
frontend : 프론트엔드 프로젝트 관리
lib : 공용으로 쓸 것들

# 앞으로 추가 될 것
- 블로그 프로젝트
  - Next js -v 13
  - Notion API
  - TailwindCSS
  - 찾는중
- 디자인시스템 프로젝트
  - Storybook -v 7
  - Node -v 18.12
  - 찾는중
- Remix Toy Project
- trpc or T3 Stack

# 보완 해야할 것
- 커밋 관리는 어떻게?
- 배포는 따로따로 하면되나? 걍?
    - 배포 파이프라인에 빌드 넣어야함
- eslint 맞춤
- prettier 맞춤
- git action


# 모노 레포 비교
| MonoRepo | Yarn berry (v3) | TurboReop | Nx | Lerna |
| --- | --- | --- | --- | --- |
| 공식문서 상태 |  |  |  |  |
| 속도 |  |  |  |  |
| 모듈사용 |  |  |  |  |
| 사용하는 회사 |  |  |  |  |

[https://www.surfit.io/tag/Monorepo](https://www.surfit.io/tag/Monorepo)
