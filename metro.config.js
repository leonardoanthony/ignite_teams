const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Incrementar configurações mantendo as originais
defaultConfig.watchFolders = [
  ...defaultConfig.watchFolders || [], // Preserva quaisquer pastas existentes
  // Adicione pastas que precisam ser observadas, se necessário
];

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  blacklistRE: /.*\/node_modules\/.*\/node_modules\/.*/, // Evitar loops de node_modules
  alias: {
    ...defaultConfig.resolver.alias, // Preserva aliases existentes
    '@assets': './src/assets',
    '@screens': './src/screens',
  },
};

defaultConfig.server = {
  ...defaultConfig.server,
  enableVisualizer: false, // Desabilita visualizador para economizar memória
};

module.exports = defaultConfig;
