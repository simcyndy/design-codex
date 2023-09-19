import { resolve } from 'path';
import { build, mergeConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import rtlcss from 'rtlcss';
import * as url from 'url';

const __dirname = url.fileURLToPath( /** @type {url.URL} */ ( new URL( '.', import.meta.url ) ) );

/**
 * Build Codex (or a sub-set of it) as a set of bundled library files
 * with additional CSS files to support the following modes:
 * - rtl
 * - legacy (14px base font size)
 * - legacy-rtl
 *
 * This method accepts the standard Vite config options as its argument.
 * One caveat: in order to produce the asset names we want, the "assetFileNames"
 * option from Rollup is used, but this method will append some additional
 * suffixes * to the generated CSS files to indicate the mode (-rtl, -legacy,
 * etc). Input of "codex.[name]" will produce output like "codex.style.css",
 * "codex.style-rtl.css", etc.
 *
 * See * https://rollupjs.org/configuration-options/#output-assetfilenames
 * for more information.
 *
 * @param {import('vite').UserConfig} bundleConfig build-specific config
 */
export default async function generateCodexBundle( bundleConfig = {} ) {
	// The "modes" that our library bundles need to support are defined here.
	/* eslint-disable no-multi-spaces */
	const MODES = [
		'',             // default mode
		'rtl',          // RTL stylesheet
		'legacy',       // Legacy (14px base) stylesheet
		'legacy-rtl'    // RTL 14px base stylesheet
	];
	/* eslint-enable no-multi-spaces */

	// Run the multi-modal library build, overriding the provided config where
	// necessary with mode-specific options
	MODES.forEach( ( mode ) => {
		/** @type {import('vite').UserConfig} */
		let overrides = {};
		const manifestFileName = mode === '' ? 'manifest.json' : `manifest-${mode}.json`;

		/**
		 * @return {string} string
		 */
		function getAssetName() {
			const modeString = mode === '' ? '' : `-${mode}`;
			const outputOpts = bundleConfig.build?.rollupOptions?.output;

			if ( outputOpts && !Array.isArray( outputOpts ) && outputOpts.assetFileNames ) {
				return `${outputOpts.assetFileNames}${modeString}[extname]`;
			} else {
				return `[name]${modeString}[extname]`;
			}

		}

		switch ( mode ) {
			case '':
				overrides = {
					css: {
						postcss: { plugins: [ autoprefixer() ] }
					}
				};
				break;
			case 'legacy':
				overrides = {
					css: {
						postcss: { plugins: [ autoprefixer() ] }
					},
					resolve: {
						alias: [
							{
								find: /^@wikimedia\/codex-design-tokens\/(dist\/)?theme-wikimedia-ui\.less$/,
								replacement: resolve( __dirname, '../../codex-design-tokens/dist/theme-wikimedia-ui-legacy.less' )
							}
						]
					}
				};
				break;
			case 'rtl':
				overrides = {
					css: {
						postcss: {
							plugins: [
								rtlcss( /** @type {rtlcss.ConfigOptions} */ ( { useCalc: true } ) ),
								autoprefixer()
							]
						}
					}
				};
				break;
			case 'legacy-rtl':
				overrides = {
					css: {
						postcss: {
							plugins: [
								rtlcss( /** @type {rtlcss.ConfigOptions} */ ( { useCalc: true } ) ),
								autoprefixer()
							]
						}
					},
					resolve: {
						alias: [
							{
								find: /^@wikimedia\/codex-design-tokens\/(dist\/)?theme-wikimedia-ui\.less$/,
								replacement: resolve( __dirname, '../../codex-design-tokens/dist/theme-wikimedia-ui-legacy.less' )
							}
						]
					}
				};
				break;
		}

		// No matter what other config has been provided, we want to ensure that
		// the emtpyOutDir: false setting is preserved since multiple builds
		// could be running in the same location.
		const buildConfig = mergeConfig( bundleConfig, {
			build: {
				emptyOutDir: false,
				manifest: bundleConfig.build?.manifest ? manifestFileName : false,
				rollupOptions: {
					output: {
						assetFileNames: getAssetName,
						// When it's time to do https://phabricator.wikimedia.org/T345687,
						// we will need to update this option to distinguish between CJS
						// and ESM chunks (or build them in separate folders). Rollup
						// provides a [format] placeholder that can be used for this.
						// See https://rollupjs.org/configuration-options/#output-chunkfilenames
						// for more information.
						chunkFileNames: '[name].js'
					}
				}
			}
		} );

		// Apply any mode-specific overrides (RTL, legacy styles, etc)
		const finalConfig = mergeConfig( buildConfig, overrides );

		// Run the Vite build
		build( {
			configFile: false,
			mode: mode,
			...finalConfig
		} );
	} );
}
