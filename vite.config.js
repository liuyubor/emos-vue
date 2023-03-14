const path = require('path')
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons';

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/emos-vue/'
    : '/',
	base: '/',
	server: {
		port: 3000,
		//是否弹出浏览器
		open: false,
		//允许跨域
		cors: true
	},
	plugins: [
		vue(),
		//引入SVG图标素材文件
		viteSvgIcons({
			iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
			symbolId: '[name]',
		})
	],
	build: {
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				}
			}
		}
	}
}
