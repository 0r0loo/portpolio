trpc 를 해보려고 했는데 모노레포를 구현하라고 써있어서
모노레포 구현 해보는 김에 내 포트폴리용 레포로 만들면 괜찮을 꺼같아서 만듬
yarn workspace 에서 turborepo 로 변경

# 명령어
```bash
수정중

```

# 폴더구조
수정중

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
[https://www.surfit.io/tag/Monorepo](https://www.surfit.io/tag/Monorepo)



# Turborepo starter

This is an official Yarn (Berry) starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
yarn dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
yarn dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
