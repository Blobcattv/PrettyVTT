import { overrideSidebar } from "./sidebar.mjs";

Hooks.on("init", () => {
  // TODO: register templates
  // CONFIG.debug.hooks = true; // See all available Hooks in console
});

Hooks.on("ready", () => {
  // TODO: inject styles
  overrideSidebar($);
});
