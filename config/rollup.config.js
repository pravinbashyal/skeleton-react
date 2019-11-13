import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import pkg from '../package.json'

// rollup.config.js
export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    external(),
    typescript({
      clean: true,
      allowSyntheticDefaultImports: true,
      baseUrl: 'src',
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      isolatedModules: false,
      jsx: 'react',
      lib: ['dom', 'es2015', 'es2016', 'es2017'],
      module: 'esnext',
      moduleResolution: 'node',
      noEmit: true,
      noImplicitAny: true,
      resolveJsonModule: true,
      skipLibCheck: true,
      sourceMap: true,
      strict: true,
      target: 'esnext',
      declaration: true,
    }),
    terser(),
  ],
}
