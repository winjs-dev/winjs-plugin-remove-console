import type { IApi } from '@winner-fed/winjs';
import viteRemove from 'unplugin-remove/vite';
import webpackRemove from 'unplugin-remove/webpack';

export default (api: IApi) => {
  api.describe({
    key: 'removeConsole',
    config: {
      schema(Joi) {
        return Joi.object();
      },
    },
    enableBy: api.EnableBy.config,
  });

  const { userConfig } = api;
  const { removeConsole = {} } = userConfig;

  // only build running
  if (!['build'].includes(api.name)) return;

  api.modifyViteConfig((config) => {
    config.plugins?.push(viteRemove(removeConsole));

    return config;
  });

  api.modifyWebpackConfig((memo) => {
    memo.plugins?.push(
      webpackRemove(removeConsole) as Parameters<
        NonNullable<typeof memo.plugins>['push']
      >[0],
    );

    return memo;
  });
};
