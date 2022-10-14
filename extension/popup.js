"use strict";
import browser from "webextension-polyfill";

console.log("Popup script loaded");

async function cats() {
  const [currentTab] = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  console.log("Hello Popup");
  if (!currentTab.id) {
    throw new Error("Failed to get current tab id");
  }
  browser.tabs.sendMessage(currentTab.id, { command: "cats" });
}

document.querySelector("button")?.addEventListener("click", () => {
  cats();
});
