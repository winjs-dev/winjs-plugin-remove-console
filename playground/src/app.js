/**
 * app.js
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2023-11-21 17:43
 * @LastEditTime: 2023-11-21 17:43
 * @Description: app.js
 */

export function onRouterCreated ({ router }) {
  console.log('onRouterCreated', router);
}

export function onAppCreated ({ app }) {
  console.log('onAppCreated', app);
}

export function onMounted ({ app, router }) {
  console.warn('onMounted', app, router);
}

export const router = {
  // @ts-ignore
  scrollBehavior (to, from) {
    console.error('scrollBehavior', to, from);
  }
};

console.info('log info');
console.debug('log debug');
