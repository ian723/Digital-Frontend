import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  CustomerView,
  AccountView,
  TrayView,
  DashboardView,
  OrderView,
  AdminView,
  PreparingView,
  DeliveryView,
  PaymentView,
  AnalysisView,
  RatesView,
  DashView,
  LoginView, 
  FoodOrderView, 
  HistoryView,
  ReviewsView,
  RegisterView
} from "../views";






const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/dashboard", name: "dashboard", component: DashboardView },
  { path: "/orders", name: "order", component: OrderView },
  { path: "/customer", name: "customer", component: CustomerView },
  { path: "/account", name: "account", component: AccountView },
  { path: "/tray", name: "tray", component: TrayView },
  { path: "/admin", name: "admin", component: AdminView },
  { path: "/preparing", name: "prepare", component: PreparingView },
  { path: "/delivery", name: "deliver", component: DeliveryView },
  { path: "/payment", name: "payment", component: PaymentView },
  { path: "/analysis", name: "analysis", component: AnalysisView },
  { path: "/rates", name: "r&r", component: RatesView },
  { path: "/dash", name: "dash", component: DashView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/register", name: "register", component: RegisterView },
  { path: "/order", name: "food", component: FoodOrderView },
  { path: "/history", name: "history", component: HistoryView },
  { path: "/review", name: "rates", component: ReviewsView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
