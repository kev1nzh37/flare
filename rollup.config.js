// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
export default {
        input: 'src/index.ts',
        output: {
                dir: 'lib',
                format: 'esm'
        },
        plugins: [
                babel({ babelHelpers: 'bundled' }),
                typescript()
        ]
};