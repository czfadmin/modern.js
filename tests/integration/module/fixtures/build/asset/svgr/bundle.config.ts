import { defineConfig } from '@modern-js/module-tools/defineConfig';

export default defineConfig({
  buildConfig: {
    target: 'es2021',
    buildType: 'bundle',
    outDir: './dist/bundle',
    externals: [/^react\/?/],
    format: 'esm',
    asset: {
      svgr: true,
    },
  },
});
