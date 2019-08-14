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
  name: "HelloWorld",
  components: {
    DatePicker
  },
  props: {
    msg: String
  },
  mounted() {
    console.log(moment().format("YYYY"))
    console.log(moment().format("MM"))
    // fetch("http://192.168.0.107/api/v1/bookings", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    //   }
    // })
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  },
  methods: {
    testMoment() {
      console.log(moment("16", "h").format("hh:mm"))
    }
  }
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
