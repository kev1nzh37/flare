// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
export default [
        {
                input: 'src/index.ts',
                output: {
                        format: 'esm',
                        file: 'es/flare.js'
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
                        file: 'lib/flare.js',
                        sourcemap: true,
                        sourcemapFile: 'lib/flare.min.js.map',
                },
                plugins: [
                        typescript({ resolveJsonModule: true }),
                        babel({ babelHelpers: 'bundled' })
                ]
        }
]