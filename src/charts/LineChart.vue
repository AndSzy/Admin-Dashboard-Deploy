<template>
  <div>
    <b-container class="buttons">
      <b-row>
        <b-button @click="zoomIn" size="sm"
          ><b-icon-zoom-in></b-icon-zoom-in
        ></b-button>
        <b-button @click="zoomOut" size="sm"
          ><b-icon-zoom-out></b-icon-zoom-out
        ></b-button>
        
        <b-button @click="showAll()" size="sm"
        >All</b-button>
      </b-row>

    </b-container>
    <zingchart
      :data="chartData"
      output="canvas"
      :ref="chart.id"
      
    ></zingchart>
  </div>
</template>

<script>
export default {
  props: {
    chart: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        // Hide context menu
        gui: {
          contextMenu: {
            button: {
              visible: false,
            },
            empty: true,
          },
        },
        // series legend
        legend: {
          backgroundColor: "transparent",
          border: "none",
          layout: "h",
        },
        // title on the top
        title: {
          text: this.chart.title,
        },
        theme: "dark",
        backgroundColor: "#33637a",
        // ///////////////////////////////////////////////////////chartType
        type: this.chart.chartType,
        // preview: {},
        zoom: {
          backgroundColor: "#ccccff",
          borderWidth: 5,
          borderColor: "#3399ff",
          alpha: 0.3,
        },
        // Scrollbar styling
        scrollX: {
          bar: {
            backgroundColor: "#adc0c9",
          },
          handle: {
            backgroundColor: "#2d596d",
            height: "15px",
          },
        },
        // Label under the chart
        scaleX: {
          label: { text: this.chart.text },
          zooming: true,
          // number of lables below x-line
          maxItems: 5,
          item: {
            fontSize: 10,
          },
        },
        scaleY: {
          values: "-2:7:1",
          item: {
            "font-size": 10,
          },
          guide: {
            lineColor: "#fff",
            lineStyle: "dashdot",
          },
        },
        plot: {
          // ///////////////////////////////////////////////////////color
          // Line chart
          "line-color": this.chart.color,

          // Bar chart
          "background-color": this.chart.color,
          alpha: 0.8,
        },
        // tooltip styling
        tooltip: {
          callout: true,
          borderColor: "#F4F2F2",
          borderWidth: 2,
          borderRadius: "1px",
          shadow: false,
          text: "%kt: %v",
        },

        //dataset from json
        series: this.chart.dataset,

        // {
        // ///////////////////////////////////////////////////////dataset
        // values: this.chart.dataset,
        // },
      },
    };
  },
  methods: {
    showAll() {
      this.$refs[this.chart.id].zoomtovalues({
        xmin: this.chart.dataset[0].values[0][0],
        xmax: this.chart.dataset[0].values[this.chart.dataset[0].values.length-1][0]
      });
    },
    zoomIn() {
      this.$refs[this.chart.id].zoomin();
    },
    zoomOut() {
      this.$refs[this.chart.id].zoomout();
    },
  },
};
</script>

<style>
.buttons {
  position: absolute;
  z-index: 10;
  top: 10px;
}

.buttons .btn {
  background-color: transparent !important;
  border: none;
}

.buttons .btn:focus {
  box-shadow: none;
}

.buttons .form-inline {
  padding-left: 8px;
}
</style>