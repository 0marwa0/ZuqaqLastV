import Chart from "chart.js";
import React from "react"
class LinerChart extends React.Component {
    constructor(props) {
    super(props)
    this.options = {

      legend: {
        display: true
    },

    // tooltips: {
    //     callbacks: {
    //        label: function(tooltipItem) {
    //               return tooltipItem.yLabel;
    //        }
    //     }
    //},
      type: 'line',
      data: {
          // labels: ['', "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: ['1', '2', '3', '4', '5'],

    //     xLabels: ["January", "February", "March", "April", "May"],
    // yLabels: ['Request Added', 'Request Viewed', 'Request Accepted','Request Accepted',],
        datasets: [{

          backgroundColor: 'rgba(52, 152, 219, 0.75)',
          data: [
            55, 100, 155, 320, 50
          ]
        }, {

          backgroundColor: 'rgba(231, 76, 60, 0.75)',
          data: [
            300, 500, 100, 40, 120
          ]
        }]
      },
      options: {
 legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
        title: {
          display: true,

          fontSize: 20
        },
        scales: {
          xAxes: [{
            display: true, gridLines: {
                drawOnChartArea: false
            },

          }],
          yAxes: [{
            type: "linear",
            display: true,
            gridLines: {
                drawOnChartArea: false
            },
            position: "left"
          }]
        },
        responsive: true
      }
    }
    this.toggleChart = this.toggleChart.bind(this)
  }

  toggleChart() {
    this.options.type = this.options.type === 'line' ? 'bar' : 'line'
    this.chart.destroy()
    this.chart = new Chart(this.ctx, this.options)
  }

  componentDidMount() {
    this.canvas = document.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.chart = new Chart(this.ctx, this.options)
  }

  render() {
    return (
      <div>
        <canvas height="80"   />
        <div className="text-center">
          {/* <button className="btn btn-primary" onClick={this.toggleChart}>Toggle</button> */}
        </div>
      </div>
    )
  }

}

export default LinerChart;
