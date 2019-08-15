<template>
  <div class="section">
    <div class="content">
      <form @submit.prevent="bookAdate">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title has-text-centered">Confirm you Booking</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Please provide an email to Book an hour.">
              <b-input type="email" icon="email" v-model="email" placeholder="Your email" required></b-input>
            </b-field>

            <b-field :label-position="'on-border'" label="Booking Date">
              <b-input
                type="text"
                icon="calendar"
                :value="localeDate"
                placeholder="Your password"
                disabled
              ></b-input>
            </b-field>

            <b-field :label-position="'on-border'" label="Booking Hour">
              <b-input type="text" icon="clock" :value="formatedHoursRange" disabled></b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Confirm</button>
            <button class="button" type="button" @click="$parent.close()">Cancel</button>
          </footer>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { fullFormatToNumberHour } from "../utils/dateFormater"
export default {
  props: {
    //["start_time", "ending_time", "localeDate"],
    start_time: {
      type: String,
      required: true
    },
    ending_time: {
      type: String,
      required: true
    },
    localeDate: {
      type: String,
      required: true
    },
    dbdate: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      email: ""
    }
  },
  computed: {
    formatedHoursRange: function() {
      return `From ${this.start_time} to ${this.ending_time}`
    }
  },
  methods: {
    bookAdate(e) {
      const bookingBody = {
        email: this.email,
        hour: fullFormatToNumberHour(this.start_time),
        date: this.dbdate
      }
      fetch(`${process.env.VUE_APP_ROOT_API}bookings`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingBody)
      })
        .then(response => {
          response
            .json()
            .then(created => {
              console.log(created)
            })
            .catch(er => {
              console.log("error1", er)
            })
        })
        .catch(err => {
          console.log("error2", err)
        })
    }
  }
}
</script>
<style scopep>
.modal-card-foot {
  justify-content: center !important;
}
</style>