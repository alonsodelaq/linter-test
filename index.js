module.exports = {
  "plugins": [
    "@typescript-eslint",
    "import",
    "eslint-plugin-tsdoc",
    "jsx-a11y",
    "react"
  ],
  "root": true,
  "parser": "@typescript-eslint/parser",
  "ignorePatterns": [
    "packages/core/libs/gql/*",
    "**/cypress/**/*",
    "**/build/**/*",
    "**/node_modules/**/*",
    "*.generated.*",
    "packages/storybook-config/**/*",
    "*.sass"
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
    "plugin:jsx-a11y/strict",
    "plugin:react/recommended"
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx"
      ]
    },
    "import/resolver": {
      "typescript": true,
      "node": true
    }
  },
  "rules": {
    "tsdoc/syntax": "error",
    "no-restricted-syntax": [
      "error",
      {
        "selector": "Literal[value=/(^GB$|^DE$|^en-GB$|^de-DE$|^GBP$|^EUR$|^male$|^female$)/i]",
        "message": "Avoid using string literal for this value, use enum instead"
      }
    ],
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "next-intl",
            "importNames": [
              "NextIntlClientProvider"
            ],
            "message": "Please import from 'core' instead."
          },
          {
            "name": "next/image",
            "importNames": [
              "default"
            ],
            "message": "Please import the custom Image component from core which works with the asset managment system."
          }
        ]
      }
    ],
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreDOMComponents": true
      }
    ],
    "import/no-unresolved": "error",
    "import/no-restricted-paths": [
      "error",
      {
        "zones": [
          {
            "target": "./packages/**/*",
            "from": "./apps/**/*",
            "message": "Packages may not import from applications"
          },
          {
            "target": "./packages/shared/**/*",
            "from": [
              "./apps/**/*",
              "./packages/!(shared)/**/*"
            ],
            "message": "Shared package may not import from outside of itself"
          },
          {
            "target": "./apps/cats/**/*",
            "from": "./apps/(!cats)/**/*",
            "message": "Cats application may not import from other apps"
          },
          {
            "target": "*/!(shared)/**/*",
            "from": "./packages/shared/tokens/**/palette.*",
            "message": "Palette should only be accessed via the useTheme hook (in a client component) or by importing palette.ts (in a server component)"
          }
        ]
      }
    ],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "function-declaration"
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "packages/core/libs/localisation/i18n.ts"
      ],
      "rules": {
        "no-restricted-imports": "off"
      }
    }
  ]
}