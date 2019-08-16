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
              @input="dayPicked"
              :first-day-of-week="1"
              :min-date="date"
              :events="events"
              :unselectable-days-of-week="[0, 6]"
            ></b-datepicker>
          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child notification skullarticle">
          <div class="section">
            <img src="../assets/bloodytext.png" />
            <div class="content">
              <transition name="component-fade" mode="out-in">
                <HoursPicker :date-picked="datePicked" :key="componentKey" v-if="showHoursTable"></HoursPicker>
                <div v-else class="content skeleton-image">
                  <figure class="image is-4by3">
                    <img src="../assets/dance-skeleton.png" />
                  </figure>
                </div>
              </transition>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment"
const YEAR = moment().year()
const MONTH = moment().month()
const DAY = moment().date()
import HoursPicker from "./HoursPicker"
import { formatToFullDate } from "../utils/dateFormater"
export default {
  components: {
    HoursPicker
  },
  computed: {},
  data() {
    return {
      date: new Date(YEAR, MONTH, DAY),
      events: [],
      bars: false,
      showHoursTable: false,
      datePicked: "",
      componentKey: 0
    }
  },
  methods: {
    dayPicked(date) {
      this.componentKey = formatToFullDate(date)
      this.datePicked = date
      this.showHoursTable = true
    }
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
  min-height: 300px;
}
article {
  padding-right: 1.5em;
}
.skeleton-image {
  margin-top: 20px;
}
</style>
