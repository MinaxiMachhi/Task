<template>
  <div>
    <h3 style="font-family:verdana">CUBES</h3>
    <br />
    <div class="box" v-for="cube in cubes" :key="cube.id">
      <center>
        <h5>{{cube.name}}</h5>
      </center>
      <img :src="cube.url" />
      <center>
        <h5>Rs.{{cube.price}}</h5>
        <button class="btn btn-info" @click="addToCart(cube)">+</button>
      </center>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/rubic.jpeg";
import img2 from "@/assets/pyramid.jpg";
import img3 from "@/assets/mirror.jpg";
export default {
  data() {
    return {
      cubes: [
        { id: 1, name: "Rubic 3*3", quantity: 0, url: img1, price: "100" },
        { id: 2, name: "Pyramid", quantity: 0, url: img2, price: "200" },
        { id: 3, name: "Mirror", quantity: 0, url: img3, price: "500" }
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
.cartcontainer {
  width: 25%;
  float: left;
}
.box {
  width: 200px;
  height: 300px;
  float: left;
  background-color: aqua;
  padding: 4%;
}
</style>