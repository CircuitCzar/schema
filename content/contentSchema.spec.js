const Validator = require('jsonschema').Validator;
const v = new Validator();
const instance1 = require('./config/c_1.json');
const instance2 = require('./config/c_2.json');
const instance3 = require('./config/c_3.json');
const instance4 = require('./config/c_4.json');
const instance5 = require('./config/c_5.json');
const instance6 = require('./config/c_6.json');
const instance7 = require('./config/c_7.json');
const instance8 = require('./config/c_8.json');
const instance9 = require('./config/c_9.json');
const textContentSchema = require('./contentSchema').textContentSchema;
const questionContentSchema = require('./contentSchema').questionContentSchema;
const getBlockContentSchema = require('./contentSchema').getBlockContentSchema;
const executionContentSchema =
  require('./contentSchema').executionContentSchema;
const getLoopContentSchema = require('./contentSchema').getLoopContentSchema;
const markContentSchema = require('./contentSchema').markContentSchema;
const quotaContentSchema = require('./contentSchema').quotaContentSchema;

test('TextContent 正确测试1', () => {
  expect(v.validate(instance1, textContentSchema).errors.length).toBe(0);
});

test('TextContent 正确测试2', () => {
  expect(v.validate(instance2, textContentSchema).errors.length).toBe(0);
});

test('QuestionContent 正确测试1', () => {
  expect(v.validate(instance3, questionContentSchema).errors.length).toBe(0);
});

// test('BlockContent 正确测试1', () => {
//   expect(v.validate(instance4, getBlockContentSchema()).errors.length).toBe(0);
// });

test('ExecutionContent 正确测试1', () => {
  expect(v.validate(instance5, executionContentSchema).errors.length).toBe(0);
});

test('ExecutionContent 正确测试2', () => {
  expect(v.validate(instance6, executionContentSchema).errors.length).toBe(0);
});

test('LoopContent 正确测试1', () => {
  expect(v.validate(instance7, getLoopContentSchema()).errors.length).toBe(0);
});

test('MarkContent 正确测试1', () => {
  expect(v.validate(instance8, markContentSchema).errors.length).toBe(0);
});

test('QuotaContent 正确测试1', () => {
  expect(v.validate(instance9, quotaContentSchema).errors.length).toBe(0);
});
