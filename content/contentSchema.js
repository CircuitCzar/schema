const textListSchema = require('../list/listSchema').textListSchema;
const optionListSchema = require('../list/listSchema').optionListSchema;

/**
 * blockNodeSchema,
  loopNodeSchema,
  executionNodeSchema,
  markNodeSchema,
  quotaNodeSchema,
  displayNodeSchema,
  exitNodeSchema,
 */
const questionNodeSchema = require('../node/nodeSchema').questionNodeSchema;
const blockNodeSchema = require('../node/nodeSchema').blockNodeSchema;
const loopNodeSchema = require('../node/nodeSchema').loopNodeSchema;
const executionNodeSchema = require('../node/nodeSchema').executionNodeSchema;
const markNodeSchema = require('../node/nodeSchema').markNodeSchema;
const quotaNodeSchema = require('../node/nodeSchema').quotaNodeSchema;
const displayNodeSchema = require('../node/nodeSchema').displayNodeSchema;
const exitNodeSchema = require('../node/nodeSchema').exitNodeSchema;

const randomizedSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      active: { type: 'boolean' },
      type: { const: 'auto' },
      order: {
        type: 'object',
        properties: {
          recordedFormat: { type: 'string' },
          script: { type: 'string' },
          predefined: { type: 'array', items: { type: 'string' } },
        },
      },
      fixedPositionFor: { type: 'object' },
      options: { type: 'object' },
    },
  },
};

const groupedSchema = {
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
          fixedPositionFor: { type: 'object' },
          options: { type: 'object' },
          order: {
            type: 'object',
            properties: {
              recordedFormat: { type: 'string' },
              script: { type: 'string' },
              predefined: { type: 'array' },
            },
          },
        },
      },
    },
  },
};

// question content
const questionContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'QuestionContent' },
    meta: {
      type: 'object',
      properties: {
        randomized: randomizedSchema,
        grouped: groupedSchema,
        extraData: {
          type: 'object',
          properties: {
            oe: { type: 'object' },
          },
        },
      },
    },
    editor: { type: 'null' },
    content: {
      type: 'object',
      properties: {
        type: {
          enum: ['Single', 'Multi', 'OpenEnd', 'Numeric'],
        },
        options: {
          type: 'array',
          item: { type: 'array' },
        },
      },
    },
  },
};

// block content
const blockContentSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  $defs: {
    questionNodeSchema,
    blockNodeSchema,
    loopNodeSchema,
    executionNodeSchema,
    markNodeSchema,
    quotaNodeSchema,
    displayNodeSchema,
    exitNodeSchema,
  },
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'BlockContent' },
    meta: { type: 'null' },
    editor: { type: 'null' },
    content: {
      type: 'object',
      properties: {
        type: { const: 'Block' },
        list: {
          type: 'array',
          item: {
            anyOf: [
              { $ref: '#/$defs/questionNodeSchema' },
              { $ref: '#/$defs/blockNodeSchema' },
              { $ref: '#/$defs/loopNodeSchema' },
              { $ref: '#/$defs/executionNodeSchema' },
              { $ref: '#/$defs/markNodeSchema' },
              { $ref: '#/$defs/quotaNodeSchema' },
              { $ref: '#/$defs/displayNodeSchema' },
              { $ref: '#/$defs/exitNodeSchema' },
            ],
          },
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
        executions: {
          type: 'array',
          item: {
            type: 'object',
            properties: {
              id: { type: 'string', format: 'uuid' },
              arguments: { type: 'array' },
            },
          },
        },
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
        options: optionListSchema,
        logics: { type: 'array' },
        list: { type: 'array' },
        loopItemDisplay: { type: 'object' },
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
        quotas: { type: 'object' },
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

module.exports = {
  textContentSchema,
  questionContentSchema,
  blockContentSchema,
  executionContentSchema,
  loopContentSchema,
  markContentSchema,
  quotaContentSchema,
};
