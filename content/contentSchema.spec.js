const Validator = require('jsonschema').Validator;
const v = new Validator();
const instance1 = require('./config/c_1.json');
const instance2 = require('./config/c_2.json');
const textContentSchema = require('./contentSchema').textContentSchema;

test('TextContent 正确测试1', () => {
  expect(v.validate(instance1, textContentSchema).errors.length).toBe(0);
});

test('TextContent 正确测试2', () => {
  expect(v.validate(instance2, textContentSchema).errors.length).toBe(0);
});
