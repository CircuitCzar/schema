const optionListSchema = require('../list/listSchema').optionListSchema;

// custom script
const scriptSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  patternProperties: {
    '^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$': {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            data: {
              type: 'object',
              properties: {
                return: {
                  oneOf: [
                    { type: 'null' },
                    {
                      type: 'object',
                      properties: {
                        type: { type: 'string' },
                        instruction: { type: 'string' },
                      },
                      required: ['type', 'instruction'],
                      additionalProperties: false,
                    },
                  ],
                },
                status: {
                  enum: ['verified', 'draft'],
                },
                function: {
                  type: 'string',
                },
                arguments: { type: 'array' },
                information: {
                  type: 'string',
                },
              },
              required: [
                'return',
                'status',
                'function',
                'arguments',
                'information',
              ],
              additionalProperties: false,
            },
            kind: {
              const: 'CustomisedScriptItem',
            },
            meta: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
              required: ['name'],
              additionalProperties: false,
            },
            editor: {
              type: 'null',
            },
          },
          required: ['id', 'kind', 'meta', 'editor'],
          additionalProperties: false,
        },
        name: {
          type: 'string',
        },
      },
      required: ['data', 'name'],
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

// lan
const lanSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  items: {
    anyOf: [{ const: 'ZH-CN' }, { const: 'EN-US' }],
  },
  uniqueItems: true,
};

// builtin scripts
const builtinScriptSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  patternProperties: {
    '^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$': {
      type: 'object',
      properties: {
        name: { type: 'string' },
        data: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            kind: { const: 'BuiltinScriptItem' },
            data: {
              type: 'object',
              properties: {
                function: { type: 'string' },
                arguments: { type: 'array' },
                return: {
                  oneOf: [
                    { type: 'null' },
                    {
                      type: 'object',
                      properties: {
                        type: { type: 'string' },
                        instruction: { type: 'string' },
                      },
                    },
                  ],
                },
                information: { type: 'string' },
                link: { type: 'string' },
              },
              required: [
                'function',
                'arguments',
                'return',
                'information',
                'link',
              ],
              additionalProperties: false,
            },
            meta: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
              required: ['name'],
              additionalProperties: false,
            },
            editor: {
              type: 'null',
            },
          },
          required: ['id', 'kind', 'data', 'meta', 'editor'],
          additionalProperties: false,
        },
      },
      required: ['data', 'name'],
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

// plugin info
const pluginInfoSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  patternProperties: {
    '^.+$': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          type: { type: 'string' },
          version: { type: 'string' },
          previewKey: { type: 'string' },
        },
        required: ['type', 'version', 'previewKey'],
        additionalProperties: false,
      },
    },
  },
  additionalProperties: false,
};

// reusable list
const reusableListSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  patternProperties: {
    '^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$': {
      type: 'object',
      properties: {
        name: { type: 'string' },
        data: optionListSchema,
      },
      required: ['name', 'data'],
      additionalProperties: false,
    },
  },
  additionalProperties: false,
};

module.exports = {
  scriptSchema,
  lanSchema,
  builtinScriptSchema,
  pluginInfoSchema,
  reusableListSchema,
};
