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
        instruction: {
          type: 'object',
        },
      },
    },
    structure: {
      type: 'object',
      properties: {
        type: { const: 'required' },
        code: { type: 'string' },
        content: { type: 'object' },
        text: { type: 'object' },
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
        instruction: {
          type: 'object',
        },
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        content: { type: 'object' },
        condition: { type: 'object' },
      },
    },
  },
};

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
        instruction: {
          type: 'object',
        },
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        content: { type: 'object' },
        condition: { type: 'object' },
      },
    },
  },
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
        instruction: { type: 'object' },
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        content: { type: 'object' },
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
        instruction: { type: 'object' },
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        content: { type: 'object' },
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
        instruction: { type: 'object' },
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        content: { type: 'object' },
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
        instruction: { type: 'object' },
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        text: { type: 'object' },
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
        instruction: { type: 'object' },
      },
    },
    structure: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        text: { type: 'object' },
        condition: { type: 'object' },
        setStatus: {
          enum: ['Complete', 'Quota Full', 'Screened Out'],
        },
      },
    },
  },
};