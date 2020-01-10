module.exports = {
  stories: ['../src/elements/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-jest',
    {
    name: "@storybook/addon-docs/preset",
      options: {
        configureJSX: true
      }
    }
  ],
};