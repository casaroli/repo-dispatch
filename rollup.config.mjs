// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/dispatch-phone-home/index.mts',
    output: {
      dir: "dist/dispatch-phone-home",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      typescript(),
      resolve(),
    ]
  },
  {
    input: 'src/phone-home/main.mts',
    output: {
      dir: "dist/phone-home/main",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      typescript(),
      resolve(),
    ]
  },
  {
    input: 'src/phone-home/post.mts',
    output: {
      dir: "dist/phone-home/post",
      format: "es",
      sourcemap: true,
    },
    plugins: [
      typescript(),
      resolve(),
    ]
  }
];
