import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@app/AppHeader",
  app: () => System.import("@app/AppHeader"),
  activeWhen: [
    (location) => {
      return location.pathname.includes("/products") == false;
    },
  ],
});

registerApplication({
  name: "@app/AppFooter",
  app: () => System.import("@app/AppFooter"),
  activeWhen: [(location) => location.pathname.includes("/products") == false],
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

registerApplication({
  name: "@app/ProductDetail",
  app: () => System.import("@app/ProductDetail"),
  activeWhen: ["/productDetail/:numberValue"],
});

start({
  urlRerouteOnly: true,
});
