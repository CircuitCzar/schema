const htmlElementSchema = require('../element/elementSchema').htmlElementSchema;
const optionItemSchema = require('../item/itemSchema').optionItemSchema;

// option list
const optionListSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'OptionList' },
    meta: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        link: {
          oneOf: [
            { type: 'null' },
            { type: 'object', properties: { key: { type: 'string' } } },
          ],
        },
      },
      required: ['name', 'link'],
      additionalProperties: false,
    },
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
    list: { type: 'array', items: optionItemSchema },
  },
  required: ['id', 'kind', 'meta', 'editor', 'list'],
  additionalProperties: false,
};

// text list
const textListSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'TextList' },
    meta: {
      oneOf: [{ type: 'null' }, { type: 'object' }],
    },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
      },
      required: ['comment', 'task'],
      additionalProperties: false,
    },
    list: { type: 'array', items: htmlElementSchema },
  },
  required: ['id', 'kind', 'meta', 'editor', 'list'],
  additionalProperties: false,
};

module.exports = { optionListSchema, textListSchema };
