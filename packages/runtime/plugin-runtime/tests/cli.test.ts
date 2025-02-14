import { CliPlugin, manager } from '@modern-js/core';
import { runtimePlugin } from '../src/cli';

describe('plugin runtime cli', () => {
  const main = manager.clone().usePlugin(runtimePlugin as CliPlugin);
  let runner: any;

  beforeAll(async () => {
    runner = await main.init();
  });

  it('plugin is defined', () => {
    expect(runtimePlugin).toBeDefined();
  });

  it('plugin-runtime cli config is defined', async () => {
    const config = await runner.config();
    expect(config.find((item: any) => item.runtime)).toBeTruthy();
    expect(config.find((item: any) => item.runtimeByEntries)).toBeTruthy();
  });

  it('plugin-runtime cli schema is defined', async () => {
    const result = await runner.validateSchema();
    expect(
      result.find((item: any) =>
        item.find(({ target }: any) => target === 'runtime'),
      ),
    ).toBeTruthy();
  });
});
