# lets-code-webextension

Collection of Material for a Web Extension workshop

## Getting Started

```sh
cd extension
npm i
npm run dev
```

## Links

- [Your First Webextension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Firefox Debugging](https://extensionworkshop.com/documentation/develop/debugging/)
- [Chrome Debugging](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/)

## Recommended VSCode Setting

```jsonc
{
  // adds json schema for chrome manifest
  "json.schemas": [
    {
      "fileMatch": ["manifest.json"],
      "url": "https://json.schemastore.org/chrome-manifest"
    }
  ],
  // enables type checking for js files
  "js/ts.implicitProjectConfig.checkJs": true
}
```
