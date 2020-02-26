<template>
  <div>
    <h3 style="font-family:verdana">WATCHES</h3>
    <br />
    <div class="box" v-for="watch in watches" :key="watch.id">
      <center>
        <h5>{{watch.name}}</h5>
      </center>
      <img :src="watch.url" />
      <center>
        <h5>Rs.{{watch.price}}</h5>
        <button class="btn btn-info" @click="addToCart(watch)">+</button>
      </center>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/titan.jpg";
import img2 from "@/assets/fastrack.jpg";
import img3 from "@/assets/adidas.jpg";
export default {
  data() {
    return {
      watches: [
        { id: 1, name: "Titan", quantity: 0, url: img1, price: "2100" },
        {
          id: 2,
          name: "Fastrack",
          quantity: 0,
          url: img2,
          price: "2000"
        },
        { id: 3, name: "Adidas", quantity: 0, url: img3, price: "1800" }
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
  border-radius: 30%;
}
.box {
  width: 200px;
  height: 300px;
  float: left;
}
</style>