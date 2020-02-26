<template>
  <div>
    <h3 style="font-family:verdana">FRUITS</h3>
    <br />
    <div class="box" v-for="fruit in fruits" :key="fruit.id">
      <center>
        <h5>{{fruit.name}}</h5>
      </center>
      <img :src="fruit.url" />
      <center>
        <h5>Rs.{{fruit.price}}</h5>
        <button class="btn btn-info" @click="addToCart(fruit)">+</button>
      </center>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/apple.jpg";
import img2 from "@/assets/Mango.jpg";
import img3 from "@/assets/Grapes.jpg";
export default {
  data() {
    return {
      fruits: [
        { id: 1, name: "Apple", quantity: 0, url: img1, price: "100" },
        { id: 2, name: "Mango", quantity: 0, url: img2, price: "80" },
        { id: 3, name: "Grape", quantity: 0, url: img3, price: "90" }
      ]
    };
  },
  methods: {
    addToCart(product) {
      this.$root.$emit("addToCart", product);
    }
  }
};
</script>


<style>
img {
  height: 150px;
  width: 150px;
}
.box {
  width: 200px;
  height: 300px;
  float: left;
}
</style>