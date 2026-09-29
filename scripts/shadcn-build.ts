import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import pkg from '../package.json'
import components from '../components.json'
import { generateShadcnRegistry } from 'shadcn-vue-registry'
import { x } from 'tinyexec'
import { mkdir, unlink, writeFile } from 'node:fs/promises'
import { select, input } from '@inquirer/prompts'

;(async () => {
    //终端输入
    const framework = await select({
        message: '请选择您将要部署资源的方式：',
        choices: [
            { name: 'Vercel（通过部署到静态网站，然后下载和使用）', value: 'vercel' },
            { name: 'Github（通过访问Github项目下载和使用）', value: 'github' },
            { name: '同时生成这两种', value: 'both' },
        ],
    })

    const inputDataDir = await input({
        message: '构建资源的目录：（默认："src/registry"）',
    })
    //console.log(framework, inputDataDir);

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const cwd = resolve(__dirname, '../')
    const dataDir = inputDataDir ? inputDataDir.trim() : 'src/registry'
    const registryPath = resolve(cwd, dataDir)
    const outputPath = resolve(cwd, './public/r/')
    const config = {
        root: cwd,
        name: pkg.name,
        homepage: 'https://github.com/GengHH-SIX/',
        registries: components.registries,
        cwd: registryPath,
        output: registryPath,
    }

    const registryJson = await generateShadcnRegistry(config)

    const registryJsonPath = resolve(registryPath, 'registry.json')
    await mkdir(dirname(registryJsonPath), { recursive: true })
    let originalJsonStr = JSON.stringify(registryJson, null, 2)
    await writeFile(registryJsonPath, originalJsonStr)
    console.log(`✓ Registry JSON is saved to: ${registryJsonPath}`)

    await mkdir(outputPath, { recursive: true })
    console.log(`✓ The output directory has been created: ${outputPath}`)

    await x('shadcn-vue', ['build', '-c', registryPath, '-o', outputPath], {
        nodeOptions: {
            cwd,
            shell: true,
        },
    })

    //update json
    if (framework !== 'vercel') {
        const targetWord = `"path": "`
        originalJsonStr = originalJsonStr.replaceAll(targetWord, `${targetWord}${dataDir}/`)

        if (framework === 'github') {
            const resRegistryJsonPath = resolve(outputPath, 'registry.json')
            await writeFile(resRegistryJsonPath, originalJsonStr)
        } else if (framework === 'both') {
            const githubRegistryJsonPath = resolve(outputPath, 'registry-github.json')
            await writeFile(githubRegistryJsonPath, originalJsonStr)
        }
    }

    await unlink(registryJsonPath)

    console.log(`\n\n✓ Shadcn Vue Registry Files Generate Done`)
    console.log(`Your shadcn resource address:\n /r/registry.json \n /r/{name}.json`)
})()
