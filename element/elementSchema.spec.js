const Validator = require('jsonschema').Validator;
const v = new Validator();
const instance1 = require('./config/c_1.json');
const instance2 = require('./config/c_2.json');
const schema = require('./elementSchema').htmlElementSchema;

test('HtmlItem 正确测试1', () => {
  expect(v.validate(instance1, schema).errors.length).toBe(0);
});

test('HtmlItem 错误测试2:id错误', () => {
  expect(v.validate(instance2, schema).errors.length).toBe(1);
});
