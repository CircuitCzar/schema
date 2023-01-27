const textListSchema = require('../list/listSchema').textListSchema;
const optionListSchema = require('../list/listSchema').optionListSchema;

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
          required: ['oe'],
          additionalProperties: false,
        },
      },
      required: ['randomized', 'grouped', 'extraData'],
      additionalProperties: false,
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
        optionsDisplay: { type: 'object' },
      },
      required: ['type', 'options', 'optionsDisplay'],
      additionalProperties: false,
    },
  },
  required: ['id', 'kind', 'meta', 'editor', 'content'],
  additionalProperties: false,
};

// block content
/**
 * type
 * null,block,loop,main
 */
const getBlockContentSchema = function (type = 'null') {
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
          type: { const: 'Block' },
          list: {
            type: 'array',
            items: {
              type: 'object',
            },
          },
        },
        required: ['type', 'list'],
        additionalProperties: false,
      },
    },
    required: ['id', 'kind', 'meta', 'editor', 'content'],
    additionalProperties: false,
  };
  if (type === 'block') {
    blockContentSchema.properties.content.properties.list.items = {
      anyOf: [
        { $ref: '#/$defs/questionNodeSchema' },
        { $ref: '#' },
        { $ref: '#/$defs/loopNodeSchema' },
        { $ref: '#/$defs/executionNodeSchema' },
        { $ref: '#/$defs/markNodeSchema' },
        { $ref: '#/$defs/quotaNodeSchema' },
        { $ref: '#/$defs/displayNodeSchema' },
        { $ref: '#/$defs/exitNodeSchema' },
      ],
    };
    return blockContentSchema;
  }

  if (type === 'loop') {
    blockContentSchema.properties.content.properties.list.items = {
      anyOf: [
        { $ref: '#/$defs/questionNodeSchema' },
        { $ref: '#' },
        { $ref: '#/$defs/blockNodeSchema' },
        { $ref: '#/$defs/executionNodeSchema' },
        { $ref: '#/$defs/markNodeSchema' },
        { $ref: '#/$defs/quotaNodeSchema' },
        { $ref: '#/$defs/displayNodeSchema' },
        { $ref: '#/$defs/exitNodeSchema' },
      ],
    };
    return blockContentSchema;
  }

  if (type === 'main') {
    blockContentSchema.properties.content.properties.list.items = {
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
    };
    return blockContentSchema;
  }
  return blockContentSchema;
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
      required: ['type', 'executions'],
      additionalProperties: false,
    },
  },
  required: ['id', 'kind', 'meta', 'editor', 'content'],
  additionalProperties: false,
};

/**
 * type
 * null,block,loop,main
 */
// loop content
const getLoopContentSchema = function (type = 'null') {
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
        required: ['type', 'options', 'logics', 'list', 'loopItemDisplay'],
        additionalProperties: false,
      },
    },
    required: ['id', 'kind', 'meta', 'editor', 'content'],
    additionalProperties: false,
  };

  if (type === 'block') {
    loopContentSchema.properties.content.properties.list.items = {
      anyOf: [
        { $ref: '#/$defs/questionNodeSchema' },
        { $ref: '#' },
        { $ref: '#/$defs/loopNodeSchema' },
        { $ref: '#/$defs/executionNodeSchema' },
        { $ref: '#/$defs/markNodeSchema' },
        { $ref: '#/$defs/quotaNodeSchema' },
        { $ref: '#/$defs/displayNodeSchema' },
        { $ref: '#/$defs/exitNodeSchema' },
      ],
    };
    return loopContentSchema;
  }

  if (type === 'loop') {
    loopContentSchema.properties.content.properties.list.items = {
      anyOf: [
        { $ref: '#/$defs/questionNodeSchema' },
        { $ref: '#' },
        { $ref: '#/$defs/blockNodeSchema' },
        { $ref: '#/$defs/executionNodeSchema' },
        { $ref: '#/$defs/markNodeSchema' },
        { $ref: '#/$defs/quotaNodeSchema' },
        { $ref: '#/$defs/displayNodeSchema' },
        { $ref: '#/$defs/exitNodeSchema' },
      ],
    };
    return loopContentSchema;
  }
  if (type === 'main') {
    loopContentSchema.properties.content.properties.list.items = {
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
    };
    return loopContentSchema;
  }
  return loopContentSchema;
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
      required: ['type', 'markers', 'logics'],
      additionalProperties: false,
    },
  },
  required: ['id', 'kind', 'meta', 'editor', 'content'],
  additionalProperties: false,
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
      required: ['type', 'markers', 'logics', 'quotas'],
      additionalProperties: false,
    },
  },
  required: ['id', 'kind', 'meta', 'editor', 'content'],
  additionalProperties: false,
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
      required: ['comment'],
      additionalProperties: false,
    },
    content: {
      type: 'object',
      properties: {
        type: { const: 'String' },
        lan: { type: 'string' },
        list: { type: 'object', item: textListSchema },
      },
      required: ['type', 'lan', 'list'],
      additionalProperties: false,
    },
  },
  required: ['id', 'kind', 'meta', 'editor', 'content'],
  additionalProperties: false,
};

module.exports = {
  textContentSchema,
  questionContentSchema,
  getBlockContentSchema,
  executionContentSchema,
  getLoopContentSchema,
  markContentSchema,
  quotaContentSchema,
};
