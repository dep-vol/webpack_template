import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';

import commonConfig from './config.common';

const plugins = [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }), new ReactRefreshWebpackPlugin()];

const devServer = {
  historyApiFallback: true,
  open: true,
  compress: true,
  allowedHosts: 'all',
  hot: true,
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
    progress: true,
  },
  port: 3000,
};

const config = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins,
  devServer,
});

export default config;
