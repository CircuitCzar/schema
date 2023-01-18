const Validator = require('jsonschema').Validator;
const v = new Validator();
const instance1 = require('./config/c_1.json');
const instance2 = require('./config/c_2.json');
const instance3 = require('./config/c_3.json');
const instance4 = require('./config/c_4.json');
const instance5 = require('./config/c_5.json');
const scriptSchema = require('./metaSchema').scriptSchema;
const lanSchema = require('./metaSchema').lanSchema;
const builtinScriptSchema = require('./metaSchema').builtinScriptSchema;
const pluginInfoSchema = require('./metaSchema').pluginInfoSchema;
const reusableListSchema = require('./metaSchema').reusableListSchema;

test('Custom Script 正确测试1', () => {
  expect(v.validate(instance1, scriptSchema).errors.length).toBe(0);
});

test('lan 正确测试1', () => {
  expect(v.validate(instance2, lanSchema).errors.length).toBe(0);
});

test('builtin Script 正确测试1', () => {
  expect(v.validate(instance3, builtinScriptSchema).errors.length).toBe(0);
});

test('plugin info 正确测试1', () => {
  expect(v.validate(instance4, pluginInfoSchema).errors.length).toBe(0);
});

// reusable list
test('reusable list 正确测试1', () => {
  expect(v.validate(instance5, reusableListSchema).errors.length).toBe(0);
});
