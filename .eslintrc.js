module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'linebreak-style': ['error', 'windows'],
	'extends': [
		'eslint:recommended',
		// 'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2020
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
	}
}
