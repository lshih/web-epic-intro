declare module 'modernizr-webpack-plugin' {
  interface ModernizrWebpackPlugin {
    new (config?: any): ModernizrWebpackPlugin;
  }
  const plugin: ModernizrWebpackPlugin;
  export = plugin;
}
