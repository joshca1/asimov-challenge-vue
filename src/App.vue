<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <Content /> -->
    <!-- <UpcomingDates></UpcomingDates> -->
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Content from "./components/Content"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import UpcomingDates from "./components/UpcomingDates"
export default {
  name: "app",
  components: {
    Content,
    Navbar,
    Footer,
    UpcomingDates
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
  /* height: 100vh; */
}
</style>
