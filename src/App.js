import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouting from './components/AppRouting';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouting />
    </main>
  );
}
