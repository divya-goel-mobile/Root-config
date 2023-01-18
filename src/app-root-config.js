import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@app/AppHeader",
  app: () => System.import("@app/AppHeader"),
  activeWhen: [
    (location) => {
      return (
        location.pathname.includes("/products") == false &&
        location.pathname.includes("/quote") == false
      );
    },
  ],
});

registerApplication({
  name: "@app/AppFooter",
  app: () => System.import("@app/AppFooter"),
  activeWhen: [
    (location) =>
      location.pathname.includes("/products") == false &&
      location.pathname.includes("/Claims") == false &&
      location.pathname.includes("/quote") == false,
  ],
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
  name: "@pru/Claims",
  app: () => System.import("@pru/Claims"),
  activeWhen: ["/claims"],
});
registerApplication({
  name: "@app/Career",
  app: () => System.import("@app/Career"),
  activeWhen: ["/career", "/aboutUs", "/joinWaitList"],
});
registerApplication({
  name: "@app/Quote",
  app: () => System.import("@app/Quote"),
  activeWhen: ["/quote"],
});
start({
  urlRerouteOnly: true,
});
