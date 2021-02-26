import { createWebHistory, createRouter } from "vue-router";
import DCHeroes from "./pages/DCHeroes";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import ReusableModal from "./pages/ReusableModal";
import RealTimeChat from "./pages/RealTimeChat";
import UserCrud from "./pages/UserCrud";
import store from "./store/index";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heroes", component: DCHeroes },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/reusable-modal", component: ReusableModal },
  {
    path: "/real-time-chat",
    component: RealTimeChat,
    meta: { middleware: "auth" },
  },
  { path: "/user-crud", component: UserCrud },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
