const htmlElementSchema = require('../element/elementSchema').htmlElementSchema;
const textContentSchema = require('../content/contentSchema').textContentSchema;
const questionContentSchema =
  require('../content/contentSchema').questionContentSchema;
const getBlockContentSchema =
  require('../content/contentSchema').getBlockContentSchema;
const getLoopContentSchema =
  require('../content/contentSchema').getLoopContentSchema;
const executionContentSchema =
  require('../content/contentSchema').executionContentSchema;
const markContentSchema = require('../content/contentSchema').markContentSchema;
const quotaContentSchema =
  require('../content/contentSchema').quotaContentSchema;
// 问题节点schema
const questionNodeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'QuestionNode' },
    meta: { type: 'object', properties: { node_label: { type: 'string' } } },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: htmlElementSchema,
      },
    },
    structure: {
      type: 'object',
      properties: {
        type: { const: 'required' },
        code: { type: 'string' },
        content: questionContentSchema,
        text: {
          type: 'object',
          properties: {
            'EN-US': textContentSchema,
            'ZH-CN': textContentSchema,
          },
        },
        instruction: { type: 'object' },
        condition: { type: 'object' },
        appearance: {
          type: 'object',
          properties: {
            plugin: { type: 'object' },
          },
        },
      },
    },
  },
};

/**
 * type
 * null,block,loop,main
 */
const getBlockNodeSchema = function (type = 'null') {
  // 块级节点schema
  const blockNodeSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
      id: { type: 'string', format: 'uuid' },
      kind: { const: 'BlockNode' },
      meta: { type: 'object', properties: { node_label: { type: 'string' } } },
      editor: {
        type: 'object',
        properties: {
          comment: { type: 'string' },
          task: { type: 'string' },
          instruction: htmlElementSchema,
        },
      },
      structure: {
        type: 'object',
        properties: {
          code: { type: 'string' },
          content: getBlockContentSchema(type),
          condition: { type: 'object' },
        },
      },
    },
  };

  if (type === 'block') {
    blockNodeSchema.$defs = {
      questionNodeSchema,
      loopNodeSchema: getLoopNodeSchema(type),
      executionNodeSchema,
      markNodeSchema,
      quotaNodeSchema,
      displayNodeSchema,
      exitNodeSchema,
    };
    return blockNodeSchema;
  }
  return blockNodeSchema;
};

/**
 * type
 * null,block,loop,main
 */
const getLoopNodeSchema = function (type = 'null') {
  // 循环节点schema
  const loopNodeSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
      id: { type: 'string', format: 'uuid' },
      kind: { const: 'LoopNode' },
      meta: { type: 'object', properties: { node_label: { type: 'string' } } },
      editor: {
        type: 'object',
        properties: {
          comment: { type: 'string' },
          task: { type: 'string' },
          instruction: htmlElementSchema,
        },
      },
      structure: {
        type: 'object',
        properties: {
          code: { type: 'string' },
          content: getLoopContentSchema(type),
          condition: { type: 'object' },
        },
      },
    },
  };

  if (type === 'loop') {
    loopNodeSchema.$defs = {
      questionNodeSchema,
      blockNodeSchema: getBlockNodeSchema(type),
      executionNodeSchema,
      markNodeSchema,
      quotaNodeSchema,
      displayNodeSchema,
      exitNodeSchema,
    };

    return loopNodeSchema;
  }
  return loopNodeSchema;
};

// 执行节点schema
const executionNodeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'ExecutionNode' },
    meta: { type: 'object', properties: { node_label: { type: 'string' } } },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: htmlElementSchema,
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        content: executionContentSchema,
        condition: { type: 'object' },
      },
    },
  },
};

// 标记节点schema
const markNodeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'MarkNode' },
    meta: { type: 'object', properties: { node_label: { type: 'string' } } },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: htmlElementSchema,
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        content: markContentSchema,
        condition: { type: 'object' },
      },
    },
  },
};

// 配额节点schema
const quotaNodeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'QuotaNode' },
    meta: { type: 'object', properties: { node_label: { type: 'string' } } },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: htmlElementSchema,
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        content: quotaContentSchema,
        condition: { type: 'object' },
      },
    },
  },
};

// 展示节点schema
const displayNodeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'DisplayNode' },
    meta: { type: 'object', properties: { node_label: { type: 'string' } } },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: htmlElementSchema,
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        text: {
          type: 'object',
          properties: {
            default: textContentSchema,
            'EN-US': textContentSchema,
            'ZH-CN': textContentSchema,
          },
        },
        condition: { type: 'object' },
        appearance: {
          type: 'object',
          properties: {
            plugin: { type: 'object' },
          },
        },
      },
    },
  },
};

// 退出节点schema
const exitNodeSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    kind: { const: 'ExitNode' },
    meta: { type: 'object', properties: { node_label: { type: 'string' } } },
    editor: {
      type: 'object',
      properties: {
        comment: { type: 'string' },
        task: { type: 'string' },
        instruction: htmlElementSchema,
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        text: {
          type: 'object',
          properties: {
            default: textContentSchema,
            'EN-US': textContentSchema,
            'ZH-CN': textContentSchema,
          },
        },
        condition: { type: 'object' },
        setStatus: {
          enum: ['Complete', 'Quota Full', 'Screened Out'],
        },
      },
    },
  },
};

module.exports = {
  questionNodeSchema,
  getBlockNodeSchema,
  getLoopNodeSchema,
  executionNodeSchema,
  markNodeSchema,
  quotaNodeSchema,
  displayNodeSchema,
  exitNodeSchema,
};
