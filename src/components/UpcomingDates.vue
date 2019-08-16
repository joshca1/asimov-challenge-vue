<template>
  <section class="section">
    <div class="content">
      <b-tabs @change="changeTab" size="is-medium" position="is-centered" class="block">
        <b-tab-item label="Today" icon="calendar"></b-tab-item>
        <b-tab-item label="Tomorrow" icon="play"></b-tab-item>
      </b-tabs>
      <b-table
        :data="data"
        :loading="tableLoading"
        :columns="columns"
        :row-class="(row, index) => row.statusClass"
      >
        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <b-icon icon="emoticon-sad" size="is-large"></b-icon>
              </p>
              <p>No Apointments found.</p>
            </div>
          </section>
        </template>
      </b-table>
    </div>
  </section>
</template>
<script>
import { fetchGetData } from "../utils/fetchData"
import moment from "moment"
import {
  todayDateToDbFormat,
  numberHourToFullFormat,
  addDayDateToDbFormat
} from "../utils/dateFormater"
export default {
  created: function() {
    this.fetchApointments()
  },
  data() {
    return {
      data: [],
      columns: [
        {
          field: "start_time",
          label: "Starting Time",
          centered: true
        },
        {
          field: "ending_time",
          label: "Ending Time",
          centered: true
        },

        {
          field: "email",
          label: "Email",
          centered: true
        },
        {
          field: "status",
          label: "Status",
          renderHtml: true
        }
      ],
      tableLoading: false,
      tabIndex: 0
    }
  },
  methods: {
    changeTab(index) {
      if (!this.tabIndex == index) {
        if (this.tabIndex == 0) {
          this.fetchApointments(addDayDateToDbFormat(1))
        } else {
          this.fetchApointments(todayDateToDbFormat())
        }
        this.tabIndex = index
      }
    },
    fetchApointments(date = todayDateToDbFormat()) {
      this.data = []
      this.tableLoading = true
      fetchGetData(date).then(({ data }) => {
        this.fillData(data)
        this.tableLoading = false
      })
    },
    fillData(data) {
      let tableData = []
      let currentHour = moment(new Date()).format("H")
      data.forEach((row, index) => {
        const { booking_hour, email, booking_date } = row
        const [status, statusClass] = this.assignClassStatus(
          booking_hour,
          booking_date,
          currentHour
        )
        tableData.push({
          start_time: numberHourToFullFormat(booking_hour),
          ending_time: numberHourToFullFormat(booking_hour + 1),
          email,
          booking_date,
          status,
          statusClass
        })
      })
      this.data = tableData
    },
    assignClassStatus(booking_hour, booking_date, currentHour) {
      let status = ""
      let statusClass = ""
      if (todayDateToDbFormat() == booking_date) {
        if (booking_hour == currentHour) {
          status = "Dancing.."
          statusClass = "is-info"
        }
        if (booking_hour > currentHour) {
          status = "Waiting.."
          statusClass = ""
        }
        if (booking_hour < currentHour) {
          status = "Done.."
          statusClass = "is-danger"
        }
        return [status, statusClass]
      }
    }
  }
}
</script>

<style>
tr.is-info {
  background: #3ed199;
  color: #fff;
}
tr.is-danger {
  background: #ff1381;
  color: #fff;
}
.section {
  min-height: 550px;
}
</style>