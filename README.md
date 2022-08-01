# Hydragen

Convenient scaffolding for frequently used tooling.

## Introspection

This command will introspect the working repository and make sure it uses all the best tooling practices from here. All the generators listed below will be installed.

To run the introspection:

- Install globally with `npm i -g hydragen` and run it with `hy`
- Use with npx: `npx hydragen`

## Install generators individually

Run individual setups powered by [Hygen](http://www.hygen.io/) generators:

- `hy generate <generator> <action>`
- `hy generate setup prettier` install and configure prettier
- `hy generate setup lint-staged` install and configure lint-staged with husky

## Ideas for new generators

- GitHub Actions
- Testing Library
- Cypress/Playwright
