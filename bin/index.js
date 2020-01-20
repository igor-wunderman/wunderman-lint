const fs = require('fs');
const colors = require('colors');

exports.generateFiles = function () {
  // Eslint generator
  const eslintDestination = process.cwd() + '/.eslintrc.js';
  const eslintLocation = __dirname + '/files/.eslintrc.js';
  fs.copyFileSync(eslintLocation, eslintDestination);
  console.log(
    colors.green('.eslintrc generated successfuly! :D')
  );

  // EditorConfig generator
  const editorConfigDestination = process.cwd() + '/.editorconfig';
  const editorConfigLocation = __dirname + '/files/.editorconfig';
  fs.copyFileSync(editorConfigLocation, editorConfigDestination);
  console.log(
    colors.green('.editorconfig generated successfuly! :D')
  );

  // Commit-helper generator
  const commitHelperDestination = process.cwd() + '/commit-helper.js';
  const commitHelperLocation = __dirname + '/files/commit-helper.js';
  fs.copyFileSync(commitHelperLocation, commitHelperDestination);
  console.log(
    colors.green('commit-helper generated successfuly! :D')
  );
}
