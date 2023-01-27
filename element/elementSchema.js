// html element
const htmlElementSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'HtmlItem' },
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
    data: {
      type: 'object',
      properties: {
        html: { type: 'string' },
      },
      required: ['html'],
      additionalProperties: false,
    },
  },
  required: ['id', 'kind', 'meta', 'editor', 'data'],
  additionalProperties: false,
};

module.exports = { htmlElementSchema };
