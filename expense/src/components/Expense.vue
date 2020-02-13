<template >
  <div>
    <div>
      <label style="padding-left:50px;" class="label-class">Balance</label>
      <label class="label-class">Jan</label>
      <label class="label-class">Feb</label>
      <label class="label-class">Mar</label>
      <label class="label-class">Apr</label>
      <label class="label-class">May</label>
      <label class="label-class">Jun</label>
      <label class="label-class">Jul</label>
      <label class="label-class">Aug</label>
      <label class="label-class">Sep</label>
      <label class="label-class">Oct</label>
      <label class="label-class">Nov</label>
      <label class="label-class">Dec</label>
    </div>
    <div>
      <label>Minaxi</label>
      <label style="padding:20px;">{{calBalance}}</label>
      <span v-for="(inx, mon) in months" :key="mon">
        <input type="text" v-model="months[mon]" />
      </span>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      total: 100,
      months: {
        jan: "",
        feb: "",
        mar: "",
        apr: "",
        may: "",
        jun: "",
        july: "",
        aug: "",
        sep: "",
        oct: "",
        nov: "",
        dec: ""
      }
    };
  },
  computed: {
    calBalance() {
      let sum = Object.values(this.months).reduce((a, b) => +a + +b);
      console.log("here", sum);
      return this.total - sum;
    }
  }
};
</script>

<style>
.label-class {
  padding: 20px;
  color: white;
  background-color: darkgreen;
}
input {
  width: 40px;
  margin: 15px;
}
</style>