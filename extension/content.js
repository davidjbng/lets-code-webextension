"use strict";
import browser from "webextension-polyfill";

console.log("Content script loaded");

function cats() {
  console.log("Hello from Popup");
}

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "cats") {
    cats();
  } else {
    console.warn(`Received unknown message '${message.command}'`);
  }
});
