import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      builder: 'mkdist',
      input: './src/',
      outDir: 'esm/'
    }
  ],
  declaration: true
})