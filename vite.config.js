import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteImagemin from 'vite-plugin-imagemin';
import imageminWebp from 'imagemin-webp';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
import {resolve} from 'path';

const ROOT_PATH = 'source';
export default defineConfig(() => {
    return {
        root: 'source',     
        base: '/vite-demo/',   
        plugins: [
            ViteImageOptimizer({
                jpg: {
                    quality: 75,
                },
                png: {
                    quality: 75,
                },
            }),
            viteImagemin({
                gifsicle: {
                    optimizationLevel: 7,
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 7,
                },
                mozjpeg: {
                    quality: 20,
                },
                pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                },
                svgo: {
                    plugins: [
                        {
                            name: 'removeViewBox',
                        },
                        {
                            name: 'removeEmptyAttrs',
                            active: false,
                        },
                    ],
                },
                webp: imageminWebp({
                    quality: 75,
                }),
            }),
            createSvgSpritePlugin({
                svgFolder: resolve(`${ROOT_PATH}/assets/images/icons/`),
            }),
        ],
        build: {
            minify: true,
            sourcemap: true,
            rollupOptions: {
                input: {
                    index: resolve(`${ROOT_PATH}/index.html`),
                    catalog: resolve(__dirname, `${ROOT_PATH}/pages/catalog/index.html`),
                    contacts: resolve(__dirname, `${ROOT_PATH}/pages/contacts/index.html`),
                },
            },
        },
    }

})