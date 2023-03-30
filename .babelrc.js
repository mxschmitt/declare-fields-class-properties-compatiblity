// create babel config which compiles javascript and class properties

module.exports = {
  plugins: [
    [require('@babel/plugin-transform-typescript'), { onlyRemoveTypeImports: false, allowDeclareFields: true, isTSX: true }],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-modules-commonjs',
  ],
  assumptions: {
    // Without this, babel defines a top level function that
    // breaks playwright evaluates.
    setPublicClassFields: true,
  },
};