# Extension

This template should help get you started developing a vanilla web extension in Vite.

## Usage Notes

The extension manifest is defined in `src/manifest.js` and used by `@samrum/vite-plugin-web-extension` in the vite config.

Background, content scripts, options, and popup entry points exist in the `src/entries` directory.

Content scripts are rendered by `src/entries/contentScript/renderContent.js` which renders content within a ShadowRoot
and handles style injection for HMR and build modes.

Otherwise, the project functions just like a regular Vite project.

To switch between Manifest V2 and Manifest V3 builds, use the MANIFEST_VERSION environment variable defined in `.env`

HMR during development is currently not supported in Manifest V3 (see [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension)).
Instead, when working with Manifest V3 builds, you can use watch mode.

Refer to [@samrum/vite-plugin-web-extension](https://github.com/samrum/vite-plugin-web-extension) for more usage notes.
