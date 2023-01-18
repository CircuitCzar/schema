const {
  questionNodeSchema,
  getBlockNodeSchema,
  getLoopNodeSchema,
  executionNodeSchema,
  markNodeSchema,
  quotaNodeSchema,
  displayNodeSchema,
  exitNodeSchema,
} = require('../node/nodeSchema');

const {
  scriptSchema,
  lanSchema,
  builtinScriptSchema,
  pluginInfoSchema,
  reusableListSchema,
} = require('../meta/metaSchema');
const { optionListSchema } = require('../list/listSchema');

const questionnaireSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  $defs: {
    questionNodeSchema,
    blockNodeSchema: getBlockNodeSchema('main'),
    loopNodeSchema: getLoopNodeSchema('main'),
    executionNodeSchema,
    markNodeSchema,
    quotaNodeSchema,
    displayNodeSchema,
    exitNodeSchema,
  },
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'Questionnaire' },
    survey_name: { type: 'string' },
    survey_note: {
      type: 'null',
    },
    list: {
      type: 'array',
      items: {
        anyOf: [
          questionNodeSchema,
          getBlockNodeSchema('main'),
          getLoopNodeSchema('main'),
          executionNodeSchema,
          markNodeSchema,
          quotaNodeSchema,
          displayNodeSchema,
          exitNodeSchema,
        ],
      },
    },
    meta: {
      type: 'object',
      properties: {
        lan: lanSchema,
        scripts: scriptSchema,
        defaultLan: {
          enum: ['ZH-CN', 'EN-US'],
        },
        pluginInfo: pluginInfoSchema,
        optionLists: optionListSchema,
        builtin_scripts: builtinScriptSchema,
      },
    },
    editor: {
      type: 'object',
      properties: {
        task: { type: 'string', format: 'uuid' },
        comment: { type: 'string', format: 'uuid' },
      },
    },
  },
};

module.exports = {
  questionnaireSchema,
};
