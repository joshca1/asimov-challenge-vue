<template>
  <div class="container">
    <h1 class="title challenge">Asimov Challenge</h1>
    <DatePicker></DatePicker>
  </div>
</template>

<script>
import DatePicker from "./DatePicker.vue"
import moment from "moment"
export default {
  name: "Content",
  components: {
    DatePicker
  },
  props: {
    msg: String
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  padding-top: 60px;
  background-color: rgba(211, 235, 233, 0.6);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  margin: 0px !important;
  background-color: #3f3e3e;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: rgba(255, 255, 255, 0.5) 0px 3px 3px;
}
</style>
