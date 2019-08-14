<template>
  <section>
    <b-field group-multiline>
      <p>{{new Date(datePicked).toLocaleDateString()}}</p>
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
          <b-button v-else @click="BookAnHour(props.row.start_time)" type="is-success">Avalible</b-button>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </section>
</template>

<script>
import { dbHourToLocaleHour } from "../utils/dateFormater"
export default {
  created: function() {
    console.log(dbHourToLocaleHour("09"))

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => console.log(json))
    console.log(this.datePicked)
  },
  props: {
    datePicked: {
      type: Date,
      required: true
    }
  },
  data() {
    const data = [
      {
        start_time: "09:00 AM",
        ending_time: "10:00 AM",
        booked: false
      },
      {
        start_time: "10:00 AM",
        ending_time: "11:00 AM",
        booked: false
      },
      {
        start_time: "11:00 AM",
        ending_time: "12:00 PM",
        booked: false
      },
      {
        start_time: "12:00 PM",
        ending_time: "01:00 PM",
        booked: false
      },
      {
        start_time: "01:00 PM",
        ending_time: "02:00 PM",
        booked: false
      },
      {
        start_time: "02:00 PM",
        ending_time: "03:00 PM",
        booked: false
      },
      {
        start_time: "04:00 PM",
        ending_time: "05:00 PM",
        booked: false
      },
      {
        start_time: "05:00 PM",
        ending_time: "06:00 PM",
        booked: false
      }
    ]

    return {
      data,
      isEmpty: false,
      isBordered: false,
      isStriped: true,
      isNarrowed: true,
      isHoverable: true,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true
    }
  },
  methods: {
    BookAnHour(hourToBook) {
      console.log(hourToBook)
    }
  }
}
</script>
<style scoped>
button {
  width: 6em;
}
</style>