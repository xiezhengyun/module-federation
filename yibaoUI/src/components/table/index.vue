<template>
  <div>
    <u-table
      ref="childrenTable"
      :cell-class-name="cellClassFunc"
      :data="tableData"
      :default-sort="{ prop: 'date', order: 'descending' }"
      :header-cell-style="{
        height: '40px',
        padding: '0',
        background: '#f7f9fa',
        'font-size': '12px',
        color: '#666',
      }"
      :highlight-current-row="highlightCurrentRow"
      :row-class-name="rowClassFunc"
      :row-style="{ 'font-size': '12px', color: '#212121' }"
      @cell-click="handleCellClick"
      @current-change="handleCurrentChange"
      @filter-change="filterHandler"
      @row-click="handleRowClick"
      @selection-change="handleSelectionChange"
      @sort-change="handleSort"
      @header-dragend="headerDragend"
      border
      fit
      stripe
      use-virtual
      big-data-checkbox
      fixed-columns-roll
      inverse-current-row
      header-drag-style
      :dataChangesScrollTop="false"
      height="420px"
      :row-height="30"
      :row-key="getRowKeys"
    >
      <template v-for="(th, key) in tableHeader">
        <u-table-column
          :key="`selection` + key"
          prop="selection"
          type="selection"
          width="55"
          align="center"
          class-name="cannotDrag"
          header-align="center"
          v-if="th.type === 'selection'"
          :fixed="fixedSelection ? 'left' : false"
          :reserve-selection="reserveSelection"
          :selectable="selectableFunc"
        ></u-table-column>
        <template v-if="th.type !== 'selection'">
          <u-table-column
            :key="th.prop"
            :prop="th.prop"
            :type="th.type"
            :width="th.minWidth"
            align="center"
            :label="th.label"
            :class-name="th.className"
            header-align="center"
            v-if="th.type && th.type !== 'selection'"
          ></u-table-column>
          <u-table-column
            :column-key="th.columnKey"
            :filter-multiple="th.filterMultiple"
            :filtered-value="th.filteredValue"
            :filters="th.filters"
            :fixed="th.fixed"
            :key="`col_${key}`"
            :label="th.label"
            :min-width="th.minWidth"
            :width="th.width"
            :prop="th.prop"
            :show-overflow-tooltip="
              typeof th.tooltip === 'undefined' || th.tooltip
            "
            :sortable="true"
            :type="th.type"
            align="center"
            :class-name="th.className || 'canDrag'"
            v-else-if="typeof th.visible === 'undefined' || th.visible"
          >
            <template slot-scope="scope" v-if="!th.type">
              <ex-slot
                :column="th"
                :index="scope.$index"
                :render="th.render"
                :row="scope.row"
                :value="scope.row[th.prop]"
                v-if="th.render"
              />
              <span v-else>
                {{
                  scope.row[th.prop] == undefined || scope.row[th.prop] == null
                    ? ""
                    : scope.row[th.prop]
                }}
              </span>
            </template>
          </u-table-column>
        </template>
      </template>
    </u-table>
  </div>
</template>

<script>
import UTable from './plTable/u-table'
import UTableColumn from './plTable/u-table-column'
// import { isGray } from '@/utils/gray'
// import nbApi from '@/api/nb'

// 自定义内容的组件
const exSlot = {
  functional: true,
  props: {
    value: [String, Number, Array],
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, data) => {
    const props = data.props

    const params = {
      value: props.value,
      row: props.row,
      index: props.index
    }

    if (props.column) params.column = props.column

    return props.render(h, params)
  }
}
export default {
  name: 'comp-table',
  components: {
    exSlot,
    UTable,
    UTableColumn
  },
  props: {
    // 表格数据
    tableData: {
      type: Array,
      default: function () {
        return []
      }
    },
    // 表头数据
    tableHeader: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectionChange: Function,
    cellClassFunc: Function,
    rowClassFunc: Function,
    selections: Array,
    highlightCurrentRow: Boolean,
    rowKey: String,
    sortName: String,
    // 是否保持选中项
    reserveSelection: {
      type: Boolean,
      default: false
    },
    // 是否固定左侧选择框
    fixedSelection: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectableFunc (row) {
      const res = true
      // if (isGray(row.isGrayBill)) {
      //   res = false
      // }
      return res
    },
    getRowKeys (row) {
      return this.rowKey ? row[this.rowKey] : row.billId || row.id
    },
    // 表头宽度拖动调整
    headerDragend (newWidth, oldWidth, { property }) {
      const newTableHeader = this.tableHeader.map((item) => {
        return {
          ...item,
          minWidth: item.prop === property ? newWidth : item.minWidth
        }
      })
      this.saveColumnsData(newTableHeader)
    },
    // 保存列信息到后台
    saveColumnsData (json) {
      // nbApi
      //   .setTabFieldOrder({
      //     tabName: this.sortName,
      //     order: JSON.stringify(json)
      //   })
      //   .then(res => {
      //     if (res.code == '0') {
      //       // this.$message.success('保存成功');
      //       // this.$emit("update:show", false);
      //       this.$emit('reloadTableHeader', json)
      //       console.log(res.msg)
      //     }
      //   })
    },
    // 排序事件
    handleSort (sort) {
      this.$emit('sort-events', sort)
    },
    // 筛选事件
    filterHandler (filters) {
      this.$emit('filter-events', filters)
    },
    // 某一行被点击
    handleRowClick (row) {
      this.$emit('row-click', row)
    },
    handleCellClick (...args) {
      this.$emit('cell-click', ...args)
    },
    // 选中行
    handleSelectionChange (row) {
      this.$emit('selection-change', row)
    },
    handleCurrentChange (row) {
      this.$emit('current-change', row)
    }
  }
}
</script>

<style lang="less" scoped>
.copy-icon {
  color: #409eff;
  cursor: pointer;
  vertical-align: middle;
  margin-left: 3px;
  font-size: 14px;
}

.grren-icon {
  color: #5daf34;
  cursor: pointer;
  font-size: 18px;
  vertical-align: middle;
}

.red-icon {
  color: #f56c6c;
  cursor: pointer;
  font-size: 18px;
  vertical-align: middle;
}
::v-deep .el-table {
  .el-link {
    font-size: 12px;
  }

  .el-table__row .el-link.el-link--success {
    color: #2c9730 !important;
  }

  .el-table__row .el-link.el-link--primary {
    color: #0841e1 !important;
  }

  .el-table__row .grren-icon {
    color: #2c9730 !important;
  }

  tr td.orangeRow {
    background: #fdc36b !important;

    .el-link:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
    }
  }

  tr td.redRow {
    background: #f78484 !important;
    .el-link:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
    }
  }

  tr.selectedRow {
    td {
      background: #74d4de !important;
    }
  }
  .el-table__body .cell {
    height: 23px;
    overflow: hidden;
  }
  th,
  td {
    padding: 3px 0 !important;
  }
  tr.isGrayBill td {
    background: #ddd !important;
    color: #333 !important;
  }
}

::v-deep .plTableBox .el-table--border th .pltableDragIcon i {
  background-color: #ebeef5 !important;
  right: 0;
  top: 0 !important;
  display: block;
  height: 100% !important;
  width: 1px;
  position: absolute;
}

::v-deep .plTableBox .el-table--border th .pltableDragIconHover:hover {
  background-color: initial !important;
}
.cannotDrag {
  height: 47px;
}

::v-deep .plTableBox .el-table--border th .pltableDragIcon i {
  background-color: #e3e3e3 !important;
}
</style>
