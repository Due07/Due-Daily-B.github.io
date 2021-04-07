<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>
<script>
export default {
  data() {
    this.chartSettings = {
      area: true,
    };
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [

        ],
      },
    };
  },
  created() {
    for (let i = 1; i < 7; i += 1) {
      const obj = {
        日期: `1/${i}`,
        访问用户: Math.ceil(Math.random() * 7000 + 4000),
        下单用户: Math.floor(Math.random() * 4000),
        下单率: Math.floor(Math.random() * 2000),
      };
      this.chartData.rows.push(obj);
    }
    console.log(this.chartData.rows);
  },
};
</script>
