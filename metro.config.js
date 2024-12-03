const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Adicione o alias ao resolver do Metro
defaultConfig.resolver.alias = {
  '@assets': './src/assets', 
  '@screens': './src/screens', 
};

module.exports = defaultConfig;
