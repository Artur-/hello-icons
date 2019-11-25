import { Router } from "@vaadin/router";
import "./my-view";
const routes = [
  {
    path: "",
    component: "my-view"
  }
];

const router = new Router(document.querySelector("#outlet"));
router.setRoutes(routes);
