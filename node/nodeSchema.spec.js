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
const questionNodeSchema = require('./nodeSchema').questionNodeSchema;
const getBlockNodeSchema = require('./nodeSchema').getBlockNodeSchema;
const getLoopNodeSchema = require('./nodeSchema').getLoopNodeSchema;
const executionNodeSchema = require('./nodeSchema').executionNodeSchema;
const markNodeSchema = require('./nodeSchema').markNodeSchema;
const quotaNodeSchema = require('./nodeSchema').quotaNodeSchema;
const displayNodeSchema = require('./nodeSchema').displayNodeSchema;
const exitNodeSchema = require('./nodeSchema').exitNodeSchema;

test('QuestionNode 正确测试1', () => {
  expect(v.validate(instance1, questionNodeSchema).errors.length).toBe(0);
});

test('BlockNode 正确测试1', () => {
  expect(v.validate(instance2, getBlockNodeSchema('block')).errors.length).toBe(
    0
  );
});

test('LoopNode 正确测试1', () => {
  expect(v.validate(instance3, getLoopNodeSchema('loop')).errors.length).toBe(
    0
  );
});

test('ExecutionNode 正确测试1', () => {
  expect(v.validate(instance4, executionNodeSchema).errors.length).toBe(0);
});

test('MarkNode 正确测试1', () => {
  expect(v.validate(instance5, markNodeSchema).errors.length).toBe(0);
});

test('QuotaNode 正确测试1', () => {
  expect(v.validate(instance6, quotaNodeSchema).errors.length).toBe(0);
});

test('DisplayNode 正确测试1', () => {
  expect(v.validate(instance7, displayNodeSchema).errors.length).toBe(0);
});

test('ExitNode 正确测试1', () => {
  expect(v.validate(instance8, exitNodeSchema).errors.length).toBe(0);
});
// console.log(
//   'blockNodeSchema',
//   blockNodeSchema.properties.structure.properties.content.$defs
// );
// console.log(v.validate(instance2, blockNodeSchema));
