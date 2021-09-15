module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:cypress/recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "cypress"
    ],
    "rules": {
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error"
    }
};
