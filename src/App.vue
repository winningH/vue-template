<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-size: 20px;
    font-weight: bold;
    color: #000;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
