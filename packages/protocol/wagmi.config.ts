import { defineConfig } from '@wagmi/cli'

import { actions, hardhat, react } from '@wagmi/cli/plugins'

export default defineConfig({
    out: '../helpers/src/protocol/hooks.auto.ts',
    contracts: [],
    plugins: [
        actions({
            readContract: true,
        }),
        hardhat({
            commands: {
                clean: 'pnpm clean',
                build: 'pnpm hardhat compile',
                rebuild: 'pnpm hardhat compile',
            },
            project: './'
        }),
        react({
            useContractRead: true,
            useContractFunctionRead: true
        })
    ],
})