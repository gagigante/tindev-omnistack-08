module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'lowerCase'],
    'scope-enum': [2, 'always', ['chore', 'feat', 'test', 'docs', 'fix']],
  },
};
