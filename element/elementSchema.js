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
    },
    data: {
      type: 'object',
      properties: {
        html: { type: 'string' },
      },
    },
  },
};

module.exports = { htmlElementSchema };
