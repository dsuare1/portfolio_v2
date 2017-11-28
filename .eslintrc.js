module.exports = {
  "plugins": [
    "react",
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true,
  },
  "extends": [
    "airbnb",
    "plugin:react/recommended",
  ],
  "rules": {
    "comma-dangle": ["error", "only-multiline"],
    "no-console": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
