import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginComponents, {ElementPlusResolver} from "vite-plugin-components";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), VitePluginComponents({
        globalComponentsDeclaration: true,
        customComponentResolvers: [ElementPlusResolver({importStyle: true})]
    })]
})
