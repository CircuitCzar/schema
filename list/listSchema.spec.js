const Validator = require('jsonschema').Validator;
const v = new Validator();
const instance1 = require('./config/c_1.json');
const instance2 = require('./config/c_2.json');
const instance3 = require('./config/c_3.json');
const textListSchema = require('./listSchema').textListSchema;
const optionListSchema = require('./listSchema').optionListSchema;

test('TextList 正确测试1', () => {
  expect(v.validate(instance1, textListSchema).errors.length).toBe(0);
});

test('TextList 正确测试2', () => {
  expect(v.validate(instance2, textListSchema).errors.length).toBe(0);
});

test('OptionList 正确测试1', () => {
  expect(v.validate(instance3, optionListSchema).errors.length).toBe(0);
});

// console.log(v.validate(instance1, textListSchema));
