import React from "react";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Profile from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <div>
      <h1>App</h1>
      {isAuthenticated ? <Logout /> : <Login />}
      <Profile />
    </div>
  );
}

export default App;
