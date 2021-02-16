<template>
  <draggable
    :disabled="mobile"
    v-model="charts"
    :move="handleMove"
    @end="handleDragEnd"
  >
    <transition-group tag="div" class="grid" name="grid">
      <!-- The Card -->
      <the-card v-for="item in charts" :key="item.id" :span="item.span">
        <!-- Chart with custom datepicker -->
        <line-chart :chart="item" v-model="pickerdata">
          <!-- My Datepicker -->
          <!-- <my-datepicker v-model="pickerdata"></my-datepicker> -->
          <the-date-pick v-model="pickerdata"></the-date-pick>
        </line-chart>
      </the-card>
    </transition-group>
  </draggable>
</template>

<script>
import { dataset1, dataset2 } from "../utilities/mock/MockData.js";

// import json from "../utilities/json/interestRates.json"

import * as dashboards from "../dashboards/dashboards.js";

import { v4 as uuidv4 } from "uuid";
import draggable from "vuedraggable";
import TheCard from "../components/TheCard.vue";

// Datepicker added here:
// import MyDatepicker from "../components/MyDatepicker.vue";
import LineChart from "../charts/LineChart.vue";

// Second Datepicker:

import TheDatePick from "../components/TheDatePick.vue";

// Firebase
import { database } from "../config/firebaseConfig.js";

export default {
  name: "Home",
  components: {
    draggable,
    TheCard,
    // MyDatepicker,
    LineChart,
    TheDatePick,
  },
  props: {
    mobile: {
      type: Boolean,
    },
  },
  data() {
    let mycharts;
    if (this.$route.name === "dashboard1") {
      mycharts = dashboards.dashboard1;
    }
    if (this.$route.name === "dashboard2") {
      mycharts = dashboards.dashboard2;
    }

    return {
      // myJson: json,
      pickerdata: {
        breakpoint: 800,
        start: "2013-08-01",
        end: "2013-09-01",
      },
      dataset1,
      dataset2,
      charts: mycharts,
      database,
    };
  },
  methods: {
    handleMove(e) {
      const { index, futureIndex } = e.draggedContext;
      this.movingIndex = index;
      this.futureIndex = futureIndex;
      return false; // disable sort
    },
    handleDragEnd() {
      this.futureItem = this.charts[this.futureIndex];
      this.movingItem = this.charts[this.movingIndex];
      const _charts = Object.assign([], this.charts);

      _charts[this.futureIndex] = this.movingItem;
      _charts[this.movingIndex] = this.futureItem;

      this.charts = _charts;
    },

    // newComponent(newChart) {
    //   let newChartObject = {};
    //   newChartObject.id = uuidv4();
    //   newChartObject.color = newChart.color;
    //   newChartObject.chartType = newChart.chartType;
    //   newChartObject.datasetName = newChart.datasetName;
    //   if (newChart.datasetName === "data1") {
    //     newChartObject.dataset = this.dataset1;
    //   } else if (newChart.datasetName === "data2") {
    //     newChartObject.dataset = this.dataset2;
    //   }

    //   this.charts.push(newChartObject);
    // },

    newChartFromJson(json) {
      // console.log(json);
      let newChartObject = {};
      newChartObject.id = uuidv4();
      newChartObject.color = "#58f723";
      newChartObject.chartType = "bar";
      newChartObject.dataset = json;

      this.charts.push(newChartObject);
    },
    readDatabase() {
      console.log("Reading...");
      
      let japan = database.ref('japan').get().then(function(snapshot) {
        console.log("Im inside promise !!");
        console.log(snapshot.val());
      });

      console.log(japan);
    },
  },
  mounted() {
    this.readDatabase();
  },
};
</script>

<style scoped>
.grid {
  padding: 0px 15px;
  background-color: var(--main-background);
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr;
  grid-auto-flow: dense;
}

.grid-move {
  transition: all 0.3s;
}

.grid .span {
  grid-column: auto;
}

@media (min-width: 800px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid .span {
    grid-column: auto / span 2;
  }
}

@media (min-width: 1320px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
