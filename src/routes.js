import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Loader from "./components/utils/loader";
// import GoogleFontLoader from "react-google-font-loader";
import Header from "./components/navigation/header";
import MainLayout from "./hoc/mainLayout";
import BottomNav from "./components/navigation/bottom";

import Home from "./components/home";
import Synch from "./components/synch";

// import AuthGuard from "./hoc/authGuard";

//import { useDispatch, useSelector } from "react-redux";
// import { isAuthUser } from "./store/actions/user_actions";

const Routes = () => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // const users = useSelector((state) => state.users);

  /* useEffect(() => {
    dispatch(isAuthUser());
  }, [dispatch]);
  */

  /*
  useEffect(() => {
    if (users.auth != null) {
      setLoading(false);
    }
  }, [users]);
  */

  //      <Route path="/project/:id" component={Project} />
  //        <Route path="/dashboard/projects" component={AuthGuard(Projects)} />

  return (
    <BrowserRouter>
      <Container>
        <Header />
        {loading ? (
          <Loader />
        ) : (
          <Switch>
            <Route path="/synch" component={Synch} />
            <Route path="/" component={Home} />
          </Switch>
        )}
      </Container>
      <BottomNav />
    </BrowserRouter>
  );
};

export default Routes;
