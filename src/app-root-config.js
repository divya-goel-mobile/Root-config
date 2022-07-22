import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@app/AppHeader",
  app: () => System.import("@app/AppHeader"),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@app/AppFooter",
  app: () => System.import("@app/AppFooter"),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@app/Home",
  app: () => System.import("@app/Home"),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@app/Products",
  app: () => System.import("@app/Products"),
  activeWhen: ["/products"],
});
// registerApplication({
//   name: "@app/navbar",
//   app: () => System.import("@app/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
