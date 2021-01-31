<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
:root {
  /* Navbar */
  --navbar-background: #33637a;
  --navbar-color: #fff;

  /* Sidebar */
  --sidebar-background: #2d7293;
  --sidebar-hover: #33637a;
  --sidebar-dropdown-active: #42809d;

  /* Main */
  --main-background: #e7e9ee;

  /* Overlay */
  --overlay-background: rgba(0, 0, 0, 0.4);

  /* Card */
  --card-background: #33637a;

  /* #221f1f   dark theme background */

  /* Grid */
  /* --cork-background: #e7e9ee; */

  /* --darkblue: #33637a;  
  --steelblue: #2d7293; */

}

html {
  background-color: var(--main-background);
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
