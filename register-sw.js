"use strict";

// Service workers require an origin; file:// launches still work directly,
// but local HTTP is needed for installability and persistent offline cache.
if ("serviceWorker" in navigator && location.protocol !== "file:")
	navigator.serviceWorker.register("./service-worker.js", { scope: "./" }).catch(() => {});
