<template>
  <section>
    <b-field group-multiline>
      <p class="title is-6">
        <strong>Booking on</strong>
        {{formatedDate}}
      </p>
    </b-field>

    <b-table
      :data="isEmpty ? [] : data"
      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :hoverable="isHoverable"
      :loading="isLoading"
      :focusable="isFocusable"
      :mobile-cards="hasMobileCards"
    >
      <template slot-scope="props">
        <b-table-column field="start_time" label="Starting Time">{{ props.row.start_time }}</b-table-column>

        <b-table-column field="ending_time" label="Ending Time">{{ props.row.ending_time }}</b-table-column>

        <b-table-column field="Booked" label="Booked" centered>
          <b-button v-if="props.row.booked" disabled type="is-danger">Unavalible</b-button>
          <b-button v-else @click="openBookingModalForm(props.row)" type="is-success">Book it Now</b-button>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import {
  numberHourToFullFormat,
  fullFormatToNumberHour,
  dbFormatDate
} from "../utils/dateFormater"
import { fetchGetData } from "../utils/fetchData"
import moment from "moment"
import Modal from "./Modal"
export default {
  created: function() {
    this.getDataFromApi()
  },
  components: {
    Modal
  },
  props: {
    datePicked: {
      type: Date,
      required: true
    }
  },
  computed: {
    formatedDate: function() {
      return moment(this.datePicked).format("DD-MM-YYYY")
    }
  },
  data() {
    return {
      workingHours: [9, 10, 11, 12, 13, 14, 15, 16, 17],
      data: [],
      isEmpty: false,
      isBordered: true,
      isStriped: true,
      isNarrowed: true,
      isHoverable: true,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
      dbdate: ""
    }
  },
  methods: {
    openBookingModalForm(props) {
      const { start_time, ending_time } = props
      const localeDate = this.formatedDate
      this.$buefy.modal.open({
        parent: this,
        component: Modal,
        props: {
          start_time,
          ending_time,
          localeDate,
          dbdate: this.dbdate,
          reloadHours: this.getDataFromApi
        },
        hasModalCard: true,
        customClass: "custom-class"
      })
    },
    fillData({ data }) {
      let bookedDataArray = data
      let booked = false
      this.workingHours.forEach((hour, index) => {
        booked = this.isHourBooked(hour, bookedDataArray)
        this.data.push({
          start_time: numberHourToFullFormat(hour),
          ending_time: numberHourToFullFormat(hour + 1),
          booked
        })
      })
    },
    isHourBooked(hour, BookedArray) {
      if (BookedArray === undefined || BookedArray.length == 0) {
        return false
      }
      if (hour == BookedArray[0].booking_hour) {
        BookedArray.shift()
        return true
      }
      return false
    },
    getDataFromApi() {
      this.fillData([])
      this.isLoading = true
      this.dbdate = dbFormatDate(this.datePicked)
      const data = fetchGetData(`bookings/${this.dbdate}`)
      data
        .then(fetchData => {
          this.data = []
          this.isLoading = false
          this.fillData(fetchData)
        })
        .catch(err => {
          this.isLoading = false
        })
    }
  }
}
</script>
<style scoped>
button {
  width: 6em;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.1s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.table.is-narrow td,
.table.is-narrow th {
  text-align: center;
}
</style>