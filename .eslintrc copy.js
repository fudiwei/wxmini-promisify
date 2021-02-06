module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
        commonjs: true,
        amd: true,
    },
    extends: ['eslint:recommended'],
    globals: {
        wx: true,
        my: true,
        swan: true,
        tt: true,
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                mocha: true,
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 6,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'indent': ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['warn', 'windows'],
        'no-console': 'off',
        'no-extra-boolean-cast': 'off',
        'prettier/prettier': ['warn', { trailingComma: 'none' }],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/indent': ['error', 4, { VariableDeclarator: 4, SwitchCase: 1 }],
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
};
