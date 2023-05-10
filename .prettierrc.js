module.exports = {
    arrowParens: "avoid",
    bracketSpacing: true,
    endOfLine: "auto",
    printWidth: 120,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    overrides: [
        {
            files: "*.sol",
            options: {
                tabWidth: 4,
            },
        },
        {
            files: "*.{yaml,yml}",
            options: {
                bracketSpacing: false,
            },
        },
    ],
};