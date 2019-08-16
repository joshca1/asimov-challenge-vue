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
            <b-button
              type="button is-success"
              native-type="submit"
              :loading="loading"
              :disabled="loading"
            >Confirm</b-button>
            <b-button type="is-danger" @click="$parent.close()">Cancel</b-button>
          </footer>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { fullFormatToNumberHour } from "../utils/dateFormater"
import { fetchPostData } from "../utils/fetchData"
import { succesMessage, errorMessage } from "../utils/messages"
export default {
  props: {
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
    },
    reloadHours: {
      type: Function,
      required: false
    }
  },
  data() {
    return {
      email: "",
      loading: false
    }
  },
  computed: {
    formatedHoursRange: function() {
      return `From ${this.start_time} to ${this.ending_time}`
    }
  },
  methods: {
    bookAdate(e) {
      this.loading = true
      const bookingBody = {
        email: this.email,
        hour: fullFormatToNumberHour(this.start_time),
        date: this.dbdate
      }

      const data = fetchPostData(`bookings`, bookingBody)
      data
        .then(res => {
          if (res.error) {
            errorMessage(
              "Hour Already Booked, or you try to book two hours in a row."
            )
          } else {
            succesMessage("Booking Created!")
            this.reloadHours()
          }
          this.loading = false
          this.$parent.close()
        })
        .catch(error => {
          this.loading = false
          errorMessage("Error on Booking")
          this.$parent.close()
          this.reloadHours()
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