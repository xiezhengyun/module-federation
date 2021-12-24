export function renderTaxationTable () {
  const gridAll = {
    // numName: 'allNum',
    label: '全部',
    name: 'gridAll',
    // 是否要更新tab页列表 0: 不更新，1:更新，默认更新
    refreshStatus: 1,
    currentPage: 1,
    pageSize: 10,
    total: 0,
    // num: 0,
    ids: [],
    multipleSelection: [],
    tableData: [],
    tableHeader: [
      {
        type: 'selection',
        minWidth: '55',
        prop: 'selection'
      },
      {
        prop: 'bizNo',
        minWidth: '180',
        label: '制单编号'
        // fixed: 'left',
      },
      {
        prop: 'entryId',
        minWidth: '160',
        label: '报关单号'
      },
      {
        prop: 'billNo',
        minWidth: '160',
        label: '提运单号'
      },
      {
        prop: 'supvModeName',
        minWidth: '110',
        label: '贸易方式'
      },
      {
        prop: 'cutModeName',
        minWidth: '160',
        label: '征免性质'
      },
      {
        prop: 'estimatedTariff',
        minWidth: '110',
        label: '预估关税',
        render: (h, scope) => {
          const { value, row } = scope
          const { actualTariff } = row
          return this.renderTableVal(h, scope, (value !== actualTariff) && (value !== null && actualTariff !== null))
        }
      },
      {
        prop: 'actualTariff',
        minWidth: '110',
        label: '实际关税',
        render: (h, scope) => {
          const { value, row } = scope
          const { estimatedTariff } = row
          return this.renderTableVal(h, scope, (value !== estimatedTariff) && (value !== null && estimatedTariff !== null))
        }
      },
      {
        prop: 'estimatedVat',
        minWidth: '180',
        label: '预估增值税',
        render: (h, scope) => {
          const { value, row } = scope
          const { actualVat } = row
          return this.renderTableVal(h, scope, (value !== actualVat) && (value !== null && actualVat !== null))
        }
      },
      {
        prop: 'actualVat',
        minWidth: '110',
        label: '实际增值税',
        render: (h, scope) => {
          const { value, row } = scope
          const { estimatedVat } = row
          return this.renderTableVal(h, scope, (value !== estimatedVat) && (value !== null && estimatedVat !== null))
        }
      },
      {
        prop: 'estimatedExciseTax',
        minWidth: '160',
        label: '预估消费税',
        render: (h, scope) => {
          const { value, row } = scope
          const { actualExciseTax } = row
          return this.renderTableVal(h, scope, (value !== actualExciseTax) && (value !== null && actualExciseTax !== null))
        }
      },
      {
        prop: 'actualExciseTax',
        minWidth: '110',
        label: '实际消费税',
        render: (h, scope) => {
          const { value, row } = scope
          const { estimatedExciseTax } = row
          return this.renderTableVal(h, scope, (value !== estimatedExciseTax) && (value !== null && estimatedExciseTax !== null))
        }
      },
      {
        prop: 'paymentFlag',
        minWidth: '100',
        label: '支付标识',
        render: (h, scope) => {
          const { value } = scope
          return (<span>{ value === 1 ? '已支付' : '未支付' }</span>)
        }
      },
      {
        prop: 'treatyBenefitsFlag',
        minWidth: '140',
        label: '协定享惠',
        render: (h, scope) => {
          const { value } = scope
          return (<span>{ value === 1 ? '包含' : '不包含' }</span>)
        }
      },
      {
        prop: 'specialTariffsUsa',
        minWidth: '110',
        label: '中美加征关税',
        render: this.renderTableVal
      },
      {
        prop: 'paymentDeadline',
        minWidth: '160',
        label: '支付限期'
      },
      {
        prop: 'actualPaymentDate',
        minWidth: '160',
        label: '实际支付日期'
      },
      {
        prop: 'dDate',
        minWidth: '130',
        label: '申报日期'
      }
    ]
  }
  return {
    gridAll
  }
}
