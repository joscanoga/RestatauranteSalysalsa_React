import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Inicio from "../views/Inicio";
import Nosotros from "../views/Nosotros";
import Reservas from "../views/Reservas";
import Servicios from "../views/Servicios";
import Menu from "../views/Platos";
import component_login from "../components/Login_Registro/component_login";
import component_registro from "../components/Login_Registro/component_registro";

const routes = [

  {
    path: "/nosotros",
    component: Nosotros,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/servicios",
    component: Servicios,
  },
  {
    path: "/Reservas",
    component: Reservas,
  },
  {
    path: "/Login",
    component: component_login,
  },
  {
    path: "/Registro",
    component: component_registro,
  },
  {
    path: "/",
    component: Inicio,
  },
  {
    path: "/inicio",
    component: Inicio,
  },
];
const router = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

const RouteWithSubRoutes = (route) => {
  console.log(route);
  return (
    <>
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </>
  );
};

export default router;
