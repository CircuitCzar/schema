const questionnaireSchema = require('./questionnaire/questionnaireSchema');
const fs = require('fs');
const prettier = require('prettier');
const parserJson5 = require('prettier/parser-babel');

const beautify = (code, { tab = 2 } = {}) => {
  return prettier.format(code, {
    parser: 'json5',
    plugins: [parserJson5],
    quoteProps: 'preserve',
    trailingComma: 'none',
    tabWidth: tab,
    printWidth: 1,
  });
};
fs.writeFileSync(
  './dist/configSchema.json',
  beautify(JSON.stringify(questionnaireSchema))
);
