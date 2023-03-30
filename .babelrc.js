module.exports = {
  plugins: [
    ['@babel/plugin-transform-typescript', { onlyRemoveTypeImports: true, allowDeclareFields: true }],
    '@babel/plugin-proposal-class-properties',
  ],
};