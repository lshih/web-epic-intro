import { DefinePlugin } from 'webpack';
import { argv } from 'yargs';
import * as path from 'path';
import * as CircularDependencyPlugin from 'circular-dependency-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as ModernizrWebpackPlugin from 'modernizr-webpack-plugin';

function getBuildEnv() {
  switch (argv.env as Environment) {
    case 'TEST':
    case 'ETEST':
    case 'ACCEPTANCE':
    case 'PRODUCTION':
      return argv.env;
    default:
      return 'TEST';
  }
}

console.log(`===== ${getBuildEnv()} build =====`);

// const colors: IColors = {
//   primaryColor: '#2BB3FF',
//   accentColor: '#197FFF',
// };

// const assets: IAssets = {
//   logo: '/assets/images/logo.svg',
//   backArrow: '/assets/images/back-arrow.svg',
//   rightArrow: '/assets/images/right-arrow.svg',
//   dropDown: '/assets/images/drop-down.svg',
//   dropLeft: '/assets/images/drop-left.svg',
//   dropRight: '/assets/images/drop-right.svg',
//   locationPin: '/assets/images/location-pin.svg',
//   placeholderUser: '/assets/images/placeholder-user.svg',
//   placeholderLocation: '/assets/images/placeholder-location.svg',
//   passwordShowLight: '/assets/images/password-show-light.svg',
//   passwordShowDark: '/assets/images/password-show-dark.svg',
//   checkmark: '/assets/images/checkmark.svg',
//   profileIcon: '/assets/images/profile-icon.svg',
//   addIcon: '/assets/images/add-icon.svg',
//   closeIconWhite: '/assets/images/close-icon-white.svg',
//   closeIconGrey: '/assets/images/close-icon-grey.svg',
//   searchIcon: '/assets/images/search-icon.svg',
//   errorIcon: '/assets/images/error-icon.svg',
//   loginBackground: '/assets/images/login-background.jpeg',
// };

export default {
  entry: {
    main: path.join(__dirname, 'src', 'main', 'index.tsx'),
  },
  output: {
    path: path.join(__dirname, 'public', 'build'),
    publicPath: '/build/',
    filename: 'bundle.js',
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'source-map-loader',
        exclude: [/node_modules/, /build/, /__test__/],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.s?css$/,
        loader: ['webpack-extract-css-hot-reload'].concat(ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader',
          }, {
            loader: 'sass-loader',
          },
        ]) as any),
      },
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]',
        query: {
          outputPath: 'fonts/',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
    new DefinePlugin({
      // APP_COLORS: JSON.stringify(colors),
      // APP_ASSETS: JSON.stringify(assets),
      ENV: JSON.stringify(getBuildEnv()),
    }),
    new ModernizrWebpackPlugin({
      'feature-detects': [
        'touchevents',
      ],
    }),
    new CircularDependencyPlugin({
      // Exclude detection of files based on a RegExp
      exclude: /a\.js|node_modules/,
      // Add errors to webpack instead of warnings
      failOnError: false,
    }),
  ],
};
