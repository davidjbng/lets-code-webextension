import pkg from "../package.json";

const sharedManifest = {
  content_scripts: [
    {
      js: ["src/contentScript/primary/main.ts"],
      matches: ["*://*/*"],
    },
  ],
  icons: {
    16: "icons/16.png",
    19: "icons/19.png",
    32: "icons/32.png",
    38: "icons/38.png",
    48: "icons/48.png",
    64: "icons/64.png",
    96: "icons/96.png",
    128: "icons/128.png",
    256: "icons/256.png",
    512: "icons/512.png",
  },
  options_ui: {
    page: "src/options/index.html",
    open_in_tab: true,
  },
  permissions: [],
};

const browserAction = {
  default_icon: {
    16: "icons/16.png",
    19: "icons/19.png",
    32: "icons/32.png",
    38: "icons/38.png",
  },
  default_popup: "src/popup/index.html",
};

const ManifestV2 = {
  ...sharedManifest,
  background: {
    scripts: ["src/background/script.ts"],
    persistent: false,
  },
  browser_action: browserAction,
  options_ui: {
    ...sharedManifest.options_ui,
    chrome_style: false,
  },
  permissions: [...sharedManifest.permissions, "*://*/*"],
};

const ManifestV3 = {
  ...sharedManifest,
  action: browserAction,
  background: {
    service_worker: "src/background/serviceWorker.ts",
  },
  host_permissions: ["*://*/*"],
};

export function getManifest(
  manifestVersion: number
): chrome.runtime.ManifestV2 | chrome.runtime.ManifestV3 {
  const manifest = {
    author: pkg.author,
    description: pkg.description,
    name: pkg.displayName ?? pkg.name,
    version: pkg.version,
  };

  if (manifestVersion === 2) {
    return {
      ...manifest,
      ...ManifestV2,
      manifest_version: manifestVersion,
    };
  }

  if (manifestVersion === 3) {
    return {
      ...manifest,
      ...ManifestV3,
      manifest_version: manifestVersion,
    };
  }

  throw new Error(
    `Missing manifest definition for manifestVersion ${manifestVersion}`
  );
}