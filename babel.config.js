module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // For Mobx Keystoner
    ['@babel/plugin-proposal-decorators', {version: 'legacy'}],
  ],
};
