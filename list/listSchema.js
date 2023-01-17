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
    },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: htmlElementSchema,
      },
    },
    list: { type: 'array', item: optionItemSchema },
  },
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
    },
    list: { type: 'array', item: htmlElementSchema },
  },
};

module.exports = { optionListSchema, textListSchema };
