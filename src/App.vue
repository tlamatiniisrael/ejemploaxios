<template>
  <div id="app">
    <!--<router-view/>-->
    <h1>Bitcoin Price Index</h1>

      <div v-for="currency in info" class="currency" v-bind:key="currency.code">
        {{ currency.description}}:
        <span class="ligthen">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>
      <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"></fusioncharts>
  </div>
</template>

<script>

import axios from 'axios'

const dataSource = {
  'chart': {
    'caption': 'Muestra',
    'subCaption': 'subtitulo',
    'showValues': '1',
    'theme': 'fusion',
    'numberPrefix': '$'
  },
  'data': [{
    'label': 'Equity',
    'value': '3000'
  },
  {
    'label': 'Equity2',
    'value': '6000'
  },
  {
    'label': 'Equity3',
    'value': '90500'
  }
  ]
}

export default {
  name: 'App',
  data () {
    return {
      info: null,
      loading: true,
      errored: false,
      width: '80%',
      height: '400',
      type: 'pie2d',
      dataformat: 'json',
      dataSource: dataSource
    }
  },
  filters: {
    currencydecimal (value) {
      return value
    }

  },
  mounted () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => {
      this.info = response.data.bpi
    }).catch(error => {
      console.log(error)
      this.errored = true
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
