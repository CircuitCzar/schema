const Validator = require('jsonschema').Validator;
const v = new Validator();
const instance1 = require('./config/c_1.json');
const schema = require('./itemSchema').optionItemSchema;

test('OptionItem 正确测试1', () => {
  expect(v.validate(instance1, schema).errors.length).toBe(0);
});
