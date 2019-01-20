module.exports = (appPackage, useTypescript) => {
  // Setup the prettier config
  appPackage.prettier = {
    trailingComma: 'all',
    singleQuote: true,
    overrides: [
      {
        files: ["*.css", "*.scss"],
        options: {
          singleQuote: false,
        },
      },
    ],
  };

  // Setup the husky config
  appPackage.husky = {
    hooks: {
      "pre-commit": "lint-staged",
    },
  };

  // Setup the lint-staged config
  appPackage["lint-staged"] = {
    "*.{js,jsx,json,css,scss}": [
      "prettier --write",
      "git add"
    ],
    ...(useTypescript ? {
      "*.{ts,tsx}": [
        "tslint -c ./tslint.json -p ./tsconfig.json --fix",
        "git add"
      ],
    } : {})
  }
};
