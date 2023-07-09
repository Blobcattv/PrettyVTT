Hooks.on("init", () => {
  // TODO: register templates
  // CONFIG.debug.hooks = true; // See all available Hooks in console
  console.log(
    "This code runs once the Foundry VTT software begins its initialization workflow."
  );
});

Hooks.on("ready", () => {
  // TODO: inject styles
  console.log(
    "This code runs once core initialization is ready and game data is available."
  );
});
