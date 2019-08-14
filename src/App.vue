<template>
  <div id="app">
    <Navbar></Navbar>
    <HelloWorld />
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld"
import Navbar from "./components/Narbar"
import Footer from "./components/Footer"
export default {
  name: "app",
  components: {
    HelloWorld,
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
