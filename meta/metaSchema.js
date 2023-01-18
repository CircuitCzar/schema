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
            },
            kind: {
              const: 'CustomisedScriptItem',
            },
            meta: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
            },
            editor: {
              type: 'null',
            },
          },
        },
        name: {
          type: 'string',
        },
      },
    },
  },
  additionalProperties: false,
};

// lan
const lanSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  item: {
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
            },
            meta: {
              type: 'object',
              properties: {
                name: { type: 'string' },
              },
            },
            editor: {
              type: 'null',
            },
          },
        },
      },
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
          version: { type: 'string' },
          previewKey: { type: 'string' },
        },
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
