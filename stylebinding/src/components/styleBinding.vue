<template>
  <div>
    <div>
      <select @change="changeColor($event)">
        <option value="color">Color</option>
        <option :value="colors.color" v-for="(inx,color) in colors" :key="color">{{colors[color]}}</option>
      </select>

      <select @change="changeSize($event)">
        <option value="size">Size</option>
        <option :value="sizes.size" v-for="(inx,size) in sizes" :key="size">{{sizes[size]}}</option>
      </select>
      <select @change="changeBg($event)">
        <option value="background">background</option>
        <option
          :value="backgrounds.background"
          v-for="(inx,background) in backgrounds"
          :key="background"
        >{{backgrounds[background]}}</option>
      </select>
      is Bold
      <input type="radio" name="Bold" value="bold" @change="isBold($event)" />Yes
      <input type="radio" name="Bold" value="" @change="isBold($event)" />No
    </div>
    <br />
    <br />
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
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      colors: { color1: "red", color2: "orange", color3: "green" },
      sizes: { size1: "12px", size2: "24px", size3: "26px", size4: "38px" },
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
        console.log(event.target.value)
      this.$refs.content.style.fontWeight = event.target.value;
    }
  }
};
</script>
