import eslintPluginNode from 'eslint-plugin-node';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintJs from '@eslint/js';

export default [
  eslintJs.configs.recommended,
  eslintPluginNode.configs.recommended,
  eslintConfigPrettier,
];
