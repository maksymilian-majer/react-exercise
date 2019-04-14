# Quick Start Guide

## Prerequisities:

1. After cloning the repository enter the exercise directory:
```
cd exercise
```
2. Make sure you have node, npm and yarn. I recommend installing [nvm](https://github.com/creationix/nvm) and running:
```
nvm install
nvm use
npm i -g yarn
```
3. Run `yarn`

## Running the app:

```
yarn start
```

### When no internet connection:

If you don't have an internet connection you can run the app with two separat commands.

To run the mock back-end:

```
yarn server
```

To run the app that will connect with mock back-end:
```
yarn dev
```

## Testing the app:

```
yarn test
```