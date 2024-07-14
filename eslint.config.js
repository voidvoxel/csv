const noFloatingPromise = require("eslint-plugin-no-floating-promise");

module.exports = [
  {
    "plugins": {
        "no-floating-promise": noFloatingPromise
    },
    "rules": {
      // "require-await": "error",
      // "no-await-in-loop": "error",
      "no-floating-promise/no-floating-promise": "error",
      "semi": "error",
      "prefer-const": "error"
    }
  }
];
