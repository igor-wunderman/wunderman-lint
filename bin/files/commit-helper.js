const myRegex = new RegExp(/\[[0-9]+] \b(feature|release|bugfix|hotfix*)\b - (.)*/g);
const commitMsg = require('fs').readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf8');

if (!myRegex.test(commitMsg)) {
  console.error('\x1b[31m', '[ERROR] Use o seguinte padrão de commit (número da demanda entre os colchetes): [7768] tipoDaBranch - mensagem');
  process.exit(1);
}
