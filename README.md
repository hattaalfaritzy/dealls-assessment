# react-w-redux

Create an admin dashboard and displaying data from a public API.

## Deploy

https://dealls-assessment.vercel.app/products

## Getting Started

1. Clone this repo.
2. Run `yarn install` to install dependencies.
3. Go to the project directory.
4. Configure environment variables
5. Run `yarn start`.

## Setup .env file

Create `.env` file on code editor similar to `.env.example` or copy the code below : (see [official docs](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables))
```
NEXT_PUBLIC_API_BASE_URL=https://dummyjson.com
NEXT_PUBLIC_API_TIMEOUT=15000
```

## Scripts

- `yarn dev` - Run development mode
- `yarn build` - Build the application for production
- `yarn start` - Start a Next.js production server (require yarn build first)
- `yarn lint` - Run [ESLint](https://eslint.org/)
- `yarn lint:fix` - Fix codes from ESLint errors

## File Structure

```raw
.
├── 📂 public/                   Public files (e.g. favicon).
├── 📂 src/
│   ├── 📂 api/                  API-related functions.
│   ├── ⚛️ app/                   Next.js page components.
│   ├── ⚛️ components/
│   │   ├── ⚛️ commons/           Common components.
│   │   ├── ⚛️ forms/             Common components which is used specifically for user input.
│   │   └── ⚛️ layouts/           Components which has specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer).
│   ├── 📂 config/               The configuration for the application.
│   ├── 📂 constant/
│   ├── ⚛️ hooks/                 Custom hooks.
│   ├── 📂 store/                Zustand's stores.
│   ├── 📂 styles/
│   │   ├── 📂 components/       SCSS files for components (e.g. button, table, n input form).
│   │   ├── 📂 layouts/          SCSS files for specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer).
│   │   ├── _base.scss           Base styles.
│   │   ├── _utilities.scss      Contains utility classes.
│   │   └── index.scss           Contains @import statements to merge all SCSS files.
│   ├── 📂 types/                Types for data.
│   ├── 📂 utils/                Utility functions.
│   └── ⚛️ views/                 React Vite page components.
├── .env.example                 Specify which environment variables are server-only and which should be exposed to the browser.
├── .eslintrc.json               ESLint configuration.
├── .gitignore
├── next.config.js               Prettier configuration.
├── package.json
├── postcss.config.js
├── README.md                    Information about the application.
├── tailwind.config.js           The configuration TailwindCss for the application.
└── tsconfig.json                The configuration Typescript for the application.

Notes:
📂: Folder
⚛️: React-related folder
```

## Tools

- **@hookform/resolvers** : **^3.1.1** [https://github.com/react-hook-form/resolvers](https://github.com/react-hook-form/resolvers)
- **@types/lodash** : **^4.14.195** [https://yarnpkg.com/package/@types/lodash](https://yarnpkg.com/package/@types/lodash)
- **@types/node** : **20.4.2** [https://yarnpkg.com/package/@types/node](https://yarnpkg.com/package/@types/node)
- **@types/react** : **18.2.15** [https://yarnpkg.com/package/@types/react](https://yarnpkg.com/package/@types/react)
- **@types/react-dom** : **18.2.7** [https://yarnpkg.com/package/@types/react-dom](https://yarnpkg.com/package/@types/react-dom)
- **axios** : **^1.4.0** [https://axios-http.com/docs](https://axios-http.com/docs)
- **eslint** : **8.45.0** [https://eslint.org/](https://eslint.org/)
- **eslint-config-next** : **13.4.10** [https://yarnpkg.com/package/@next/eslint-plugin-next](https://yarnpkg.com/package/@next/eslint-plugin-next)
- **lodash** : **^4.17.21** [https://lodash.com/](https://lodash.com/)
- **next** : **13.4.10** [https://nextjs.org/](https://nextjs.org/)
- **react** : **18.2.0** [https://react.dev/](https://react.dev/)
- **react-dom** : **18.2.0** [https://react.dev/](https://react.dev/)
- **react-hook-form** : **^7.45.2** [https://react-hook-form.com/](https://react-hook-form.com/)
- **react-icons** : **^4.10.1** [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)
- **react-loader-spinner** : **^5.3.4** [https://www.npmjs.com/package/react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- **sass** : **^1.63.6** [https://sass-lang.com/](https://sass-lang.com/)
- **typescript** : **^5.1.6** [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **yup** : **^1.2.0** [https://github.com/jquense/yup](https://github.com/jquense/yup)
- **zustand** : **^4.3.9** [https://docs.pmnd.rs/zustand/getting-started/introduction](https://docs.pmnd.rs/zustand/getting-started/introduction)

- **tailwindcss** : **^3.3.2** [https://tailwindcss.com/](https://tailwindcss.com/)
