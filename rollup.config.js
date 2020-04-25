import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import camelCase from 'lodash/camelCase';
import pkg from './package.json';

const banner = '/*!\n'
          + ` * ${pkg.name} v${pkg.version}\n`
          + ` * (c) 2020-${new Date().getFullYear()} fe-useful-tools\n`
          + ' * Released under the MIT License.\n'
          + ' */';

const extensions = ['.js', '.ts'];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      banner,
    },
    {
      file: pkg.commonjs,
      format: 'cjs',
      sourcemap: true,
      banner,
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: camelCase(pkg.name),
      sourcemap: true,
      banner,
    },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  plugins: [
    babel({ extensions, include: ['src/**/*'], exclude: 'node_modules/**' }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({ extensions }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Resolve source maps to the original source
    sourceMaps(),
    terser(),
  ],
};
