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
      <div>
    <select v-model="type">
      <option value="column2d">Columnas</option>
      <option value="pie2d">Pie</option>
    </select>

    <!--  PARTE DE LOS ITEMS -->
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Stats</th>
          <th>Descripcion</th>
        </tr>
        <tr v-for="it in items" v-bind:key="it.name">
          <td>{{it.name}}</td>
          <td>{{it.stats}}</td>
          <td>{{it.description}}</td>
        </tr>
      </thead>
    </table>

  </div>
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
    'value': '9000'
  }
  ]
}

const dataItems = {
  'data': {
    '1001': {
      'name': 'Botas de Velocidad',
      'description': '<groupLimit>Limitado a 1 par de botas.</groupLimit><br><br><unique>Pasiva ÚNICA, Movimiento Mejorado:</unique> +25 de Velocidad de Movimiento.',
      'colloq': ';Boots of Speed',
      'plaintext': 'Aumenta ligeramente la Velocidad de Movimiento.',
      'into': ['3006', '3047', '3020', '3158', '3111', '3117', '3009', '4001'],
      'image': {
        'full': '1001.png',
        'sprite': 'item0.png',
        'group': 'item',
        'x': 0,
        'y': 0,
        'w': 48,
        'h': 48
      },
      'gold': {
        'base': 300,
        'purchasable': true,
        'total': 300,
        'sell': 210
      },
      'tags': ['Boots'],
      'maps': {
        '10': true,
        '11': true,
        '12': true,
        '21': true
      },
      'stats': {
        'FlatMovementSpeedMod': 25
      }
    },
    '1002': {
      'name': 'Botas de Velocidad 2',
      'description': '<groupLimit>Limitado a 1 par de botas.</groupLimit><br><br><unique>Pasiva ÚNICA, Movimiento Mejorado:</unique> +25 de Velocidad de Movimiento.',
      'colloq': ';Boots of Speed',
      'plaintext': 'Aumenta ligeramente la Velocidad de Movimiento.',
      'into': ['3006', '3047', '3020', '3158', '3111', '3117', '3009', '4001'],
      'image': {
        'full': '1001.png',
        'sprite': 'item0.png',
        'group': 'item',
        'x': 0,
        'y': 0,
        'w': 48,
        'h': 48
      },
      'gold': {
        'base': 300,
        'purchasable': true,
        'total': 300,
        'sell': 210
      },
      'tags': ['Boots'],
      'maps': {
        '10': true,
        '11': true,
        '12': true,
        '21': true
      },
      'stats': {
        'FlatMovementSpeedMod': 25
      }
    }

  }
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
      dataFormat: 'json',
      dataSource: dataSource,
      items: dataItems.data
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
    /*
    axios.get('https://ddragon.leagueoflegends.com/cdn/8.17.1/data/es_MX/item.json').then(response1 => {
      this.items = response1.data.data
    }).catch(error1 => {
      console.log(error1)
      this.errored = true
    })
    */
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
