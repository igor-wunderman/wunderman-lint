# Wunderman-lint

Set the hard part of eslint and precommit configuration.

### Prerequisites

Install the following packages:
```
npm install husky
npm install -D eslint
npm install -D eslint-plugin-vue
npm install -D babel-eslint
npm install -D @vue/eslint-config-airbnb
npm install -D @vue/cli-plugin-eslint
```

### Installing

Install the package running the command below:
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
  "name": "project-name",
  "version": "0.1.0",
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