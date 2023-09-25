module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          // root: ['./src'],
          // extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@skolplattformen/api': ['libs/api/lib/index.ts'],
            '@skolplattformen/api-hjarntorget': [
              'libs/api-hjarntorget/lib/index.ts',
            ],
            '@skolplattformen/api-skolplattformen': [
              'libs/api-skolplattformen/lib/index.ts',
            ],
            '@skolplattformen/curriculum': ['libs/curriculum/src/index.ts'],
            '@skolplattformen/hooks': ['libs/hooks/src/index.ts'],
          },
        },
      ],
    ],
  };
};
