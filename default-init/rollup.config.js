// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
export default [
        {
                input: 'src/index.ts',
                output: {
                        format: 'esm',
                        file: 'es/out.js'
                },
                plugins: [
                        typescript({ resolveJsonModule: true }),
                        babel({ babelHelpers: 'bundled' })

                ]
        },
        {
                input: 'src/index.ts',
                output: {
                        format: 'cjs',
                        file: 'lib/out.js',
                        sourcemap: true,
                        sourcemapFile: 'lib/out.min.js.map',
                },
                plugins: [
                        typescript({ resolveJsonModule: true }),
                        babel({ babelHelpers: 'bundled' })
                ]
        }
]