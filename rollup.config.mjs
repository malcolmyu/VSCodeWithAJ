import ts from 'rollup-plugin-ts'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist'
  },
  
  plugins: [
    ts({
      tsconfig: "tsconfig.json"
    }),
    copy({targets: [
      { src: 'runtime/*', dest: 'dist/runtime' },
      { src: 'assets/*', dest: 'dist/assets' },
      { src: 'autojump/*', dest: 'dist/autojump' },
    ]}),
  ]
}