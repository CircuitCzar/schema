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
        link: { type: 'null' },
      },
    },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: { type: 'object' },
      },
    },
    list: { type: 'array' },
  },
};

// text list
const textListSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'TextList' },
    meta: { type: 'null' },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
      },
    },
    list: { type: 'array' },
  },
};
