module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-prettier',
    ],
    "plugins": [
        'prettier'
    ],
    "rules": {
        "curly": [
            "error",
            "multi-or-nest"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "function-call-argument-newline": [
            "error",
            "consistent"
        ],
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "max-len": [
            "error",
            {
                "code": 80,
                "tabWidth": 2,
                "ignoreComments": false,
                "ignoreTrailingComments": false,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "new-parens": "off",
        "jsx-a11y/label-has-for": "off",
        "prettier/prettier": "error",
        "react/destructuring-assignment": "off",
        "react/prop-types": [
            "error",
            {
                "skipUndeclared": true,
                "ignore": [
                    "class",
                    "className",
                    "id",
                    "children",
                    "tag"
                ]
            }
        ],
        "no-underscore-dangle": "off",
        "no-bitwise": "off",
        "no-plusplus": "off",
        "no-console": [
            "error",
            {
                "allow": [
                    "warn",
                    "error"
                ]
            }
        ]
    },
    "reportUnusedDisableDirectives": true
};
