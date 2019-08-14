<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title is-6">Book a dance session with the death.</p>
          <p class="subtitle is-6">Select a day to show avalible hours.</p>
          <div class="content pickercontent">
            <b-datepicker
              inline
              v-model="date"
              @input="dayPicked"
              :events="events"
              :unselectable-days-of-week="[0, 6]"
              :indicators="indicators"
            ></b-datepicker>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child notification skullarticle">
          <div class="content">
            <p class="title is-6">Pick a date</p>
            <p class="subtitle is-6">Book an hour with me</p>
            <div class="content">
              <HoursPicker :date-picked="datePicked" v-if="showHoursTable"></HoursPicker>
              <figure v-else class="image is-4by3">
                <img src="../assets/dance-skeleton.png" />
              </figure>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
const thisMonth = new Date().getMonth()
import HoursPicker from "./HoursPicker"
import moment from "moment"
export default {
  components: {
    HoursPicker
  },
  computed: {
    indicators() {
      return this.bars ? "bars" : "dots"
    }
  },
  data() {
    return {
      date: new Date(2017, thisMonth, 1),
      events: [],
      bars: false,
      showHoursTable: false,
      datePicked: "2019-01-01"
    }
  },
  methods: {
    dayPicked(date) {
      this.datePicked = date
      this.showHoursTable = true
    },
    loadHoursTable() {}
  }
}
</script>

<style scoped>
.pickercontent {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.skullarticle {
  color: white;
  background: url("../assets/background-graveyard.jpg");
  object-fit: cover;
}
.is-parent {
  min-height: 600px;
}
</style>
