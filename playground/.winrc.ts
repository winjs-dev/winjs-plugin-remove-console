import { defineConfig } from 'win';

export default defineConfig({
  plugins: ['../src'],
  removeConsole: {
    consoleType: ['log']
  }
});
