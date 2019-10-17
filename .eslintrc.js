module.exports = {
    'extends': [
        'eslint:recommended',
        'plugin:promise/recommended'
    ],
    'env': {
        'es6': true,
        'browser': true,
        'node': true,
        'commonjs': true,
        'amd': true
    },
    'globals': {
        'wx': true
    },
    'parserOptions': {
        'ecmaVersion': 6
    },
    'rules': {
        'no-console': 'off',
        'promise/avoid-new': 'off'
    },
    'plugins': [
        'promise'
    ]
};