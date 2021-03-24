import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Container } from "@material-ui/core";

import { Theme } from "./context/Theme";
import { DataContextProvider } from "./context/DataContext";

import firebase from "firebase/app";
import "./firebaseConfig/config.js";
import "firebase/auth";

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => console.log(user.email));
  });

  return (
    <DataContextProvider>
      <Theme>
        <Navbar />
        <Login />
      </Theme>
    </DataContextProvider>
  );
}

export default App;
