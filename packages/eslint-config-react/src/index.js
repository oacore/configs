module.exports = {
    extends: [
        '@oacore/eslint-config-base',
        'eslint-config-airbnb',
        'eslint-config-prettier/react'
    ],
    rules: {
        "jsx-a11y/label-has-for": "off",
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
    },
};
