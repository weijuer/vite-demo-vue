import fs from 'fs'

const pluginName = 'vite-plugin-ant-fix'
let fixPath = [
    'calendar/index.js',
    '_util/moment-util.js',
    'locale-provider/index.js',
]

const cache = new Map

const antFix = (options = {}) => {
    if (options.files) fixPath = [...options.files, ...fixPath]
    return {
        name: pluginName,
        configResolved(config) {
            if (!config.optimizeDeps.esbuildOptions) {
                config.optimizeDeps.esbuildOptions = {}
            }
            if (!config.optimizeDeps.esbuildOptions.plugins) {
                config.optimizeDeps.esbuildOptions.plugins = []
            }
            config.optimizeDeps.esbuildOptions.plugins.push({
                name: pluginName,
                setup(build) {
                    build.onLoad(
                        {
                            filter: /\.js$/
                        },
                        args => {
                            const path = args.path.replace(/\\/g, '/')
                            if (fixPath.some(item => path.endsWith(item))) {
                                let contents = ''
                                if (cache.has(path)) {
                                    contents = cache.get(path)
                                } else {
                                    const source = fs.readFileSync(path, 'utf-8')
                                    contents = source.replace(`import * as moment`, 'import moment')
                                    cache.set(path, contents)
                                }
                                return {
                                    contents
                                }
                            }
                        }
                    )
                }
            })

            // 修复打包后require is not defined
            if (process.env.NODE_ENV === 'production') {
                if (!config.build.commonjsOptions) {
                    config.build.commonjsOptions = {}
                }
                config.build.commonjsOptions.transformMixedEsModules = true
            }
        },
        transform(code, id) {
            // console.log('transform', id)
            if (fixPath.some(item => id.endsWith(item))) {
                code = code.replace(`import * as moment`, 'import moment')
            }
            return {
                code,
                map: null
            }
        }
    }
}

export default antFix