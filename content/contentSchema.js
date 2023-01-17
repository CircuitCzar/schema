const textListSchema = require('../list/listSchema').textListSchema;

// question content
const questionContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: {
      const: 'QuestionContent',
    },
    meta: {
      type: 'object',
      properties: {
        randomized: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              active: { type: 'boolean' },
              type: {
                const: 'auto',
              },
              order: {
                type: 'object',
                properties: {
                  recordedFormat: { type: 'string' },
                  script: { type: 'string' },
                  predefined: { type: 'array', items: { type: 'string' } },
                },
              },
              fixedPositionFor: {
                type: 'object',
              },
              options: {
                type: 'object',
              },
            },
          },
        },
        grouped: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              active: { type: 'boolean' },
              randomized: {
                type: 'object',
                properties: {
                  active: { type: 'boolean' },
                  type: { const: 'auto' },
                  fixedPositionFor: {
                    type: 'object',
                  },
                  options: {
                    type: 'object',
                  },
                  order: {
                    type: 'object',
                    properties: {
                      recordedFormat: { type: 'string' },
                      script: { type: 'string' },
                      predefined: {
                        type: 'array',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// block content
const blockContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'BlockContent' },
    meta: { type: 'null' },
    editor: { type: 'null' },
    content: {
      type: 'object',
      properties: {
        type: {
          const: 'Block',
        },
        list: {
          type: 'array',
        },
      },
    },
  },
};

// execution content
const executionContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'ExecutionContent' },
    meta: { type: 'null' },
    editor: { type: 'null' },
    content: {
      type: 'object',
      properties: {
        type: { const: 'Execution' },
        executions: { type: 'array' },
      },
    },
  },
};

// loop content
const loopContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'LoopContent' },
    meta: { type: 'null' },
    editor: { type: 'null' },
    content: {
      type: 'object',
      properties: {
        type: { const: 'Loop' },
        options: 'TODO',
        logics: { type: 'array' },
        list: { type: 'array' },
        loopItemDisplay: {
          type: 'object',
        },
      },
    },
  },
};

// mark content
const markContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'LoopContent' },
    meta: { type: 'null' },
    editor: { type: 'null' },
    content: {
      type: 'object',
      properties: {
        type: { const: 'Mark' },
        markers: { type: 'array' },
        logics: { type: 'array' },
      },
    },
  },
};

// quota content
const quotaContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'QuotaContent' },
    meta: { type: 'null' },
    editor: { type: 'null' },
    content: {
      type: 'object',
      properties: {
        type: { const: 'Quota' },
        markers: { type: 'array' },
        logics: { type: 'array' },
        quotas: { type: 'array' },
      },
    },
  },
};

// text content
const textContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'TextContent' },
    meta: {
      oneOf: [{ type: 'null' }, { type: 'object' }],
    },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
      },
    },
    content: {
      type: 'object',
      properties: {
        type: { const: 'String' },
        lan: { type: 'string' },
        list: { type: 'object', item: textListSchema },
      },
    },
  },
};

module.exports = { textContentSchema };
