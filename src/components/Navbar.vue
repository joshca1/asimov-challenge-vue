<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://asimov.cl/">
        <img src="../assets/asimov.svg" width="112" height="28" />
      </a>

      <a
        role="button"
        :class="{'is-active':isActiveBurger}"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarasimov"
        @click="toggleBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarasimov" :class="{'is-active':isActiveBurger}" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Booking a dance 💀</router-link>
        <router-link to="/coming-dates" class="navbar-item">Upcoming Dates 📅</router-link>

      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isActiveBurger: false
    }
  },
  methods: {
    toggleBurger() {
      this.isActiveBurger = !this.isActiveBurger
    }
  }
}
</script>
<style scoped>
nav {
  background-color: #ed1c24;
}
a {
  color: white;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
}
#navbarasimov {
  background-color: #ed1c24;
}
</style>