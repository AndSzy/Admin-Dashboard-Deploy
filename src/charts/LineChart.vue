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
        gui: {
          contextMenu: {
            button: {
              visible: false,
            },
            empty: true,
          },
        },
        legend: {
          backgroundColor: "transparent",
          border: "none",
          layout: "h",
        },
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
        scrollX: {
          bar: {
            backgroundColor: "#adc0c9",
            // height: "15px"
          },
          handle: {
            backgroundColor: "#2d596d",
            height: "15px",
          },
        },
        scaleX: {
          label: { text: this.chart.text },
          zooming: true,
          // number of lables below x-line
          maxItems: 5,
          item: {
            fontSize: 10,
          },
          // transform
          // step: "day",
          // transform: {
          //   type: "date",
          //   all: "%dd/%M/%y",
          // },
        },
        scaleY: {
          // label: { text: "Usage" },
          // zooming: true,
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
        tooltip: {
          callout: true,
          borderColor: "#F4F2F2",
          borderWidth: 2,
          borderRadius: "1px",
          shadow: false,
          text: "%kt: %v",
        },

        series: this.chart.dataset,

        // {
        // ///////////////////////////////////////////////////////dataset
        // values: this.chart.dataset,
        // samplingStep: 2,
        // marker: {
        //   backgroundColor: this.chart.color,
        //   size: 4,
        // },
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