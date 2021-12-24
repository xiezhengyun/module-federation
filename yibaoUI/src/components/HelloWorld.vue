<template>
  <div class="hello">
    <div v-for="(table, tableName) in tableGrid" :key="tableName">
      <table-grid
        :cell-class-func="cellClassFunc"
        :is-store="true"
        :row-class-func="rowClassFunc"
        :selections="table.multipleSelection"
        :table-data="table.tableData"
        :table-header="table.tableHeader"
        :table-name="table.name"
        :sort-name="table.sortName"
        @selection-change="selectionChangeTable"
      />
    </div>
  </div>
</template>

<script>
import { renderTaxationTable } from './tableHeader'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    tableGrid: () => import('./table/index')
  },
  data () {
    const tableGrid = renderTaxationTable.call(this)
    return {
      tableGrid,
      activeTab: 'gridAll'
    }
  },
  created () {
    this.getData()
  },
  computed: {
    currentTable () {
      const { activeTab, tableGrid } = this
      return tableGrid[activeTab]
    },
    multipleSelection () {
      const { activeTab, tableGrid } = this
      return tableGrid[activeTab].multipleSelection
    }
  },
  methods: {
    getData () {
      const res = {
        code: '0',
        message: '成功',
        data: {
          records: [
            {
              id: '1473113761043820545',
              bizNo: 'IA2112171535507788',
              ledgerNo: null,
              entryId: '',
              billNo: '23124fsfsdf_',
              supvModeCode: '0258',
              supvModeName: '来料余料结转',
              cutMode: '423',
              cutModeName: '新型显示器件',
              estimatedTariff: 76.68,
              actualTariff: null,
              estimatedVat: 134.57,
              actualVat: null,
              estimatedExciseTax: null,
              actualExciseTax: null,
              estimateAntiIpin: null,
              estimateCountervailing: null,
              estimateTaxesTotal: 211.25,
              actualTaxesTotal: null,
              paymentFlag: 0,
              treatyBenefitsFlag: 0,
              specialTariffsUsa: null,
              paymentDeadline: null,
              actualPaymentDate: null,
              dDate: '',
              treatyBenefitsJson: '[]',
              specialTariffsUsaJson: '[]'
            },
            {
              id: '1470696260200665089',
              bizNo: 'IA2112141800377742',
              ledgerNo: null,
              entryId: '',
              billNo: '',
              supvModeCode: '0615',
              supvModeName: '进料对口',
              cutMode: '503',
              cutModeName: '进料加工',
              estimatedTariff: 490.52,
              actualTariff: null,
              estimatedVat: 860.86,
              actualVat: null,
              estimatedExciseTax: null,
              actualExciseTax: null,
              estimateAntiIpin: null,
              estimateCountervailing: null,
              estimateTaxesTotal: 1351.38,
              actualTaxesTotal: null,
              paymentFlag: 0,
              treatyBenefitsFlag: 0,
              specialTariffsUsa: null,
              paymentDeadline: null,
              actualPaymentDate: null,
              dDate: '',
              treatyBenefitsJson: '[]',
              specialTariffsUsaJson: '[]'
            },
            {
              id: '1469193975904149506',
              bizNo: 'IA2112091425433331',
              ledgerNo: null,
              entryId: '',
              billNo: '',
              supvModeCode: '0420',
              supvModeName: '加工贸易设备',
              cutMode: '503',
              cutModeName: '进料加工',
              estimatedTariff: 5823.52,
              actualTariff: null,
              estimatedVat: 1840.38,
              actualVat: null,
              estimatedExciseTax: null,
              actualExciseTax: null,
              estimateAntiIpin: null,
              estimateCountervailing: null,
              estimateTaxesTotal: 7663.9,
              actualTaxesTotal: null,
              paymentFlag: 0,
              treatyBenefitsFlag: 0,
              specialTariffsUsa: 4367.64,
              paymentDeadline: null,
              actualPaymentDate: null,
              dDate: '',
              treatyBenefitsJson: '[{"gno":1,"warning":false},{"gno":2,"warning":false}]',
              specialTariffsUsaJson: '[{"gno":2,"warning":true}]'
            },
            {
              id: '1468509498866929665',
              bizNo: 'IA2112080922358769',
              ledgerNo: null,
              entryId: '',
              billNo: 'FD2343242',
              supvModeCode: '0420',
              supvModeName: '加工贸易设备',
              cutMode: '503',
              cutModeName: '进料加工',
              estimatedTariff: 37138.13,
              actualTariff: null,
              estimatedVat: 11727.04,
              actualVat: null,
              estimatedExciseTax: null,
              actualExciseTax: null,
              estimateAntiIpin: null,
              estimateCountervailing: null,
              estimateTaxesTotal: 48865.17,
              actualTaxesTotal: null,
              paymentFlag: 0,
              treatyBenefitsFlag: 1,
              specialTariffsUsa: 27821.89,
              paymentDeadline: null,
              actualPaymentDate: null,
              dDate: '',
              treatyBenefitsJson: '[{"gno":2,"warning":true},{"gno":1,"warning":false}]',
              specialTariffsUsaJson: '[{"gno":2,"warning":true}]'
            },
            {
              id: '1468126446438649858',
              bizNo: 'IA2112071134367193',
              ledgerNo: 'TZ7725002456',
              entryId: '676765756765',
              billNo: 'AG665',
              supvModeCode: '0110',
              supvModeName: '一般贸易',
              cutMode: '101',
              cutModeName: '一般征税',
              estimatedTariff: 0.0,
              actualTariff: 1.0,
              estimatedVat: 9334.330511,
              actualVat: 9334.33,
              estimatedExciseTax: null,
              actualExciseTax: 3.0,
              estimateAntiIpin: null,
              estimateCountervailing: null,
              estimateTaxesTotal: 18183.56867,
              actualTaxesTotal: null,
              paymentFlag: 1,
              treatyBenefitsFlag: 0,
              specialTariffsUsa: null,
              paymentDeadline: '2021-12-31',
              actualPaymentDate: '2021-12-30',
              dDate: '2021-12-17',
              treatyBenefitsJson: '[{"gno":1,"warning":"false"},{"gno":2,"warning":"false"}]',
              specialTariffsUsaJson: '[]'
            },
            {
              id: '1468512189387132929',
              bizNo: 'IA2112062042551409',
              ledgerNo: null,
              entryId: '',
              billNo: '',
              supvModeCode: '0815',
              supvModeName: '低值辅料',
              cutMode: '',
              cutModeName: '',
              estimatedTariff: 0.09,
              actualTariff: null,
              estimatedVat: 0.1,
              actualVat: null,
              estimatedExciseTax: null,
              actualExciseTax: null,
              estimateAntiIpin: null,
              estimateCountervailing: null,
              estimateTaxesTotal: 0.19,
              actualTaxesTotal: null,
              paymentFlag: 0,
              treatyBenefitsFlag: 1,
              specialTariffsUsa: null,
              paymentDeadline: null,
              actualPaymentDate: null,
              dDate: '',
              treatyBenefitsJson: '[{"gno":1,"warning":"false"}]',
              specialTariffsUsaJson: '[]'
            },
            {
              id: '1468175950290444290',
              bizNo: 'IA2112031740331556',
              ledgerNo: 'TZ7725002456',
              entryId: '',
              billNo: 'AG665',
              supvModeCode: '0110',
              supvModeName: '一般贸易',
              cutMode: '101',
              cutModeName: '一般征税',
              estimatedTariff: 67456.19,
              actualTariff: 67455.21,
              estimatedVat: 22907.26,
              actualVat: 54534.66,
              estimatedExciseTax: null,
              actualExciseTax: 2.0,
              estimateAntiIpin: 44081.43,
              estimateCountervailing: 1624.05,
              estimateTaxesTotal: 90363.45,
              actualTaxesTotal: null,
              paymentFlag: 1,
              treatyBenefitsFlag: 1,
              specialTariffsUsa: 17400.56,
              paymentDeadline: '2021-12-13',
              actualPaymentDate: '2021-12-13',
              dDate: '',
              treatyBenefitsJson: '[{"gno":1,"warning":"false"},{"gno":2,"warning":"true"}]',
              specialTariffsUsaJson: '[{"gno":1,"warning":true}]'
            },
            {
              id: '1468127852323213314',
              bizNo: 'IA2112031546546180',
              ledgerNo: 'TZ7725002456',
              entryId: '',
              billNo: 'AG665',
              supvModeCode: '0110',
              supvModeName: '一般贸易',
              cutMode: '101',
              cutModeName: '一般征税',
              estimatedTariff: 0.0,
              actualTariff: 123.23,
              estimatedVat: 9334.330511,
              actualVat: 124.24,
              estimatedExciseTax: null,
              actualExciseTax: 100.23,
              estimateAntiIpin: null,
              estimateCountervailing: null,
              estimateTaxesTotal: 18183.56867,
              actualTaxesTotal: null,
              paymentFlag: 0,
              treatyBenefitsFlag: 0,
              specialTariffsUsa: null,
              paymentDeadline: '2001-01-01',
              actualPaymentDate: '2001-01-01',
              dDate: '',
              treatyBenefitsJson: '[{"gno":1,"warning":"false"},{"gno":2,"warning":"false"}]',
              specialTariffsUsaJson: '[]'
            }
          ],
          total: 8,
          size: 10,
          current: 1,
          orders: [],
          optimizeCountSql: true,
          hitCount: false,
          countId: null,
          maxLimit: null,
          searchCount: true,
          pages: 1
        }
      }
      this.currentTable.tableData = res.data.records || []
      this.currentTable.total = Number(res.data.total) || 0
    },
    sayHi () {
      // satHiFn()
    },
    renderTableVal (h, scope, redFlag = false) {
      const { value } = scope
      const fn = (val) => val === null ? '-' : val
      return (<span class={ redFlag && 'redFont' }>{ fn(value) }</span>)
    },
    // 表格选中
    selectionChangeTable (rows) {
      const { currentTable } = this

      currentTable.multipleSelection = [...rows]
    },

    // 表格点击行
    rowClickTable (row) {
      const { currentRow } = this
      if (row === currentRow) return
      this.currentRow = row
    },

    cellClassFunc (params) {
      const { row, column } = params
      const { isStayClose } = row

      if (column.type !== 'selection' && isStayClose) {
        return row.isStayClose === '1' ? 'redRow' : row.isStayClose === '2' ? 'orangeRow' : ''
      }
    },

    rowClassFunc (params) {
      const { row } = params
      const selected = this.multipleSelection.some(item => item.bizNo && item.bizNo === row.bizNo)

      return selected ? 'selectedRow' : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body {
  background-color: red;
}
</style>
