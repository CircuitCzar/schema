const htmlElementSchema = require('../element/elementSchema').htmlElementSchema;
const textContentSchema = require('../content/contentSchema').textContentSchema;
// option item
const optionItemSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'OptionItem' },
    meta: { oneOf: [{ type: 'null' }, { type: 'object' }] },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: htmlElementSchema,
      },
      required: ['comment', 'task', 'instruction'],
      additionalProperties: false,
    },
    data: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        text: {
          type: 'object',
          properties: {
            'EN-US': textContentSchema,
            'ZH-CN': textContentSchema,
          },
        },
      },
      required: ['code', 'text'],
      additionalProperties: false,
    },
  },
  required: ['id', 'kind', 'meta', 'editor', 'data'],
  additionalProperties: false,
};

module.exports = { optionItemSchema };
