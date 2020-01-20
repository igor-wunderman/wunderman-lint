# Wunderman-lint

Set the hard part of eslint and precommit configuration.

### Prerequisites

Install the package runing the command below:

```
npm install -g wunderman-lint
```

### Running

Run the command below in your project root to generate files
```
wund-generate
```

Add the following lines to your package.json file
```
"husky": {
  "hooks": {
    "pre-commit": "npm run lint",
    "commit-msg": "node ./commit-helper.js"
  }
},
```

And add one more object in scripts line:
```
"lint": "vue-cli-service lint"
```

### Package.json example

Your package.json stay like this:
```
{
  "name": "lp-pegada-de-carbono",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn run lint",
      "commit-msg": "node ./commit-helper.js"
    }
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}
```