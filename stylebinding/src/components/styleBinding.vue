<template>
  <div>
    <div class="main">
      <div class="left">
        <div>
          <select @change="changeColor($event)">
            <option value="color">Color</option>
            <option
              :value="colors.color"
              v-for="(inx,color) in colors"
              :key="color"
            >{{colors[color]}}</option>
          </select>
        </div>
        <div>
          <select @change="changeSize($event)">
            <option value="size">Size</option>
            <option :value="sizes.size" v-for="(inx,size) in sizes" :key="size">{{sizes[size]}}</option>
          </select>
        </div>
        <div>
          <select @change="changeBg($event)">
            <option value="background">background</option>
            <option
              :value="backgrounds.background"
              v-for="(inx,background) in backgrounds"
              :key="background"
            >{{backgrounds[background]}}</option>
          </select>
        </div>
        <div>
          <b-form-group label="Bold">
            <b-form-radio v-model="bold" value="yes" @change="isBold($event)" />Yes
            <b-form-radio v-model="bold" value="no" @change="isBold($event)" />No
          </b-form-group>
        </div>
      </div>
      <div class="right">
        <center>
          <div ref="content">
            abcd efgh ijkl mnop qrst uvwx yz
            <br />abcd efgh ijkl mnop qrst uvwx yz
            <br />abcd efgh ijkl mnop qrst uvwx yz
            <br />abcd efgh ijkl mnop qrst uvwx yz
            <br />abcd efgh ijkl mnop qrst uvwx yz
          </div>
        </center>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      bold: "no",
      colors: { color1: "red", color2: "orange", color3: "green" },
      sizes: { size1: "12px", size2: "14px", size3: "16px", size4: "18px" },
      backgrounds: { bg1: "yellow", bg2: "pink", bg3: "violet" }
    };
  },
  methods: {
    changeColor(event) {
      this.$refs.content.style.color =
        event.target.options[event.target.options.selectedIndex].text;
    },
    changeSize(event) {
      this.$refs.content.style.fontSize =
        event.target.options[event.target.options.selectedIndex].text;
    },
    changeBg(event) {
      this.$refs.content.style.background =
        event.target.options[event.target.options.selectedIndex].text;
    },
    isBold(event) {
      if (this.bold === "no") {
        this.bold = "yes";
      } else this.bold = "no";

      if (this.bold === "yes") {
        this.$refs.content.style.fontWeight = "bold";
      } else this.$refs.content.style.fontWeight = "";

      /*       console.log(event.target.value);
      if (event.target.value == "yes") {
        this.$refs.content.style.fontWeight = "bold";
      } else this.$refs.content.style.fontWeight = "";
 */

      console.log(this.bold);
    }
  }
};
</script>
<style scoped>
.main {
  height: 350px;
  width: 50%;
  margin-left: 25%;
  border: 1px solid;
}
.left {
  width: 50%;
  height: 350px;
  float: left;
  padding: 8%;
}
.right {
  height: 350px;
  width: 50%;
  float: left;
  padding: 8%;
}
</style>
