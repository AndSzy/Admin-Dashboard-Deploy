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
        <line-chart :chart="item"> 
        </line-chart>
      </the-card>
    </transition-group>
  </draggable>
</template>

<script>

// import { v4 as uuidv4 } from "uuid";
import draggable from "vuedraggable";
import TheCard from "../components/TheCard.vue";


import LineChart from "../charts/LineChart.vue";


// Firebase
// import { database } from "../config/firebaseConfig.js";

export default {
  name: "Home",
  components: {
    draggable,
    TheCard,
    LineChart,
  },
  props: {
    mobile: {
      type: Boolean,
    },
    dashboards: {
      type: Array
    }
  },
  data() {
    return {
      charts: this.dashboards,
      localData: {}
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
    }
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
