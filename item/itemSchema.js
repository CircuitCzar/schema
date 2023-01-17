// option item
const optionItemSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'OptionItem' },
    meta: { type: 'null' },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: {
          type: 'object',
        },
      },
    },
    data: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        text: { type: 'object' },
      },
    },
  },
};
