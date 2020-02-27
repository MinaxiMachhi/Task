<template>
  <div>
    <h3 style="font-family:verdana">CUBES</h3>
    <br />
    <div class="box" v-for="cube in cubes" :key="cube.id">
      <b-card
        :title="cube.name"
        :img-src="cube.url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Rs.{{cube.price}}</b-card-text>

        <b-button href="#" variant="primary" @click="addToCart(cube)">Add To Cart</b-button>
        <p v-if="cube.added">SuccessFully Added</p>
      </b-card>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/rubic.jpeg";
import img2 from "@/assets/pyramid.jpg";
import img3 from "@/assets/mirror.jpg";
import img4 from "@/assets/p.jpg";
export default {
  data() {
    return {
      cubes: [
        { id: 1, name: "Rubic 3*3", quantity: 0, url: img1, price: "100",added:false },
        { id: 2, name: "Pyramid", quantity: 0, url: img2, price: "200",added:false },
        { id: 3, name: "Mirror", quantity: 0, url: img3, price: "500" },
        { id: 4, name: "Pentagonal", quantity: 0, url: img4, price: "1000" }
      ]
    };
  },
  methods: {
    addToCart(product) {
      product.added=true
      alert(product.added)
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
  float: left;
}
.box {
  width: 270px;
  height: 390px;
  float: left;
  background-color: lightblue;
  padding: 4%;
}
.box .mb-2 {
  border-radius: 5px 5px;
  padding: 8px;
}
</style>