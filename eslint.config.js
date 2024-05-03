import eslintPluginNode from 'eslint-plugin-node';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslintJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginNode.configs.recommended,
  eslintConfigPrettier,
);
