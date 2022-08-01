# Hydragen

Convenient scaffolding for frequently used tooling.

## Introspection

Make sure a repository is using all the best tooling practices from here.

Introspect the repository to install and configure all best practices:

- Install globally with `npm i -g hydragen` and run it with `hy`
- Use with npx: `npx hydragen`

## Run setups individually

Run individual setups powered by [Hygen](http://www.hygen.io/) generators:

- `f generate <generator> <action>`
- `f generate setup prettier` install and configure prettier
- `f generate setup lint-staged` install and configure lint-staged with husky

## Ideas for new generators

- GitHub Actions
- Testing Library
- Cypress/Playwright
