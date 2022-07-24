"use strict"

var registered = null

async function registerScript(message) {
  if (message.command === "run") {
    registered = await browser.contentScripts.register({
      matches: ["*://*.youtube.com/*"],
      js: [{ file: "./ytproductive.js" }],
    })
    console.info("RUNNING")
  } else if (message.command === "stop") {
    registered.unregister()
    console.info("STOPPED")
  }
}

browser.runtime.onMessage.addListener(registerScript)
