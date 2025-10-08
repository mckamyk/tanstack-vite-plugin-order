import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from "@tanstack/devtools-vite"

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    devtools(), // having the plugin here breaks server functions
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    // devtools(), // having it here works fine with TSS
    viteReact(),
  ],
})

export default config
