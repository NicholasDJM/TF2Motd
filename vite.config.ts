import { defineConfig } from "vite"
import babel from "vite-plugin-babel";
import { ViteMinifyPlugin } from "vite-plugin-minify";
export default defineConfig({
	root: "./src",
	build: {
		outDir: "../dist",
		modulePreload: false,
		emptyOutDir: true,
		sourcemap: true
	},
	plugins: [
		babel(),
		ViteMinifyPlugin({
			// See https://github.com/terser/html-minifier-terser#options-quick-reference for options
			caseSensitive: false,
			collapseBooleanAttributes: true,
			collapseTagWhitespace: false,
			collapseWhitespace: true,
			conservativeCollapse: false,
			continueOnParseError: false,
			customAttrAssign: [],
			customAttrCollapse: "",
			customAttrSurround: [],
			customEventAttributes: [],
			decodeEntities: true,
			html5: true,
			ignoreCustomComments: [],
			ignoreCustomFragments: [],
			includeAutoGeneratedTags: true,
			keepClosingSlash: false,
			maxLineLength: undefined,
			minifyCSS: true,
			minifyJS: true,
			minifyURLs: true,
			noNewlinesBeforeTagClose: false,
			preserveLineBreaks: false,
			preventAttributesEscaping: true,
			processConditionalComments: false,
			processScripts: [],
			quoteCharacter: undefined,
			removeAttributeQuotes: true,
			removeComments: true,
			removeEmptyAttributes: false,
			removeEmptyElements: false,
			removeOptionalTags: false,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			removeTagWhitespace: false,
			sortAttributes: true,
			sortClassName: true,
			trimCustomFragments: false,
			useShortDoctype: true
		})
	]
})