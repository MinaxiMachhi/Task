<template>
  <div>
    <h3 style="font-family:verdana">FRUITS</h3>
    <br />
    <div class="box" v-for="fruit in fruits" :key="fruit.id">
      <b-card
        :title="fruit.name"
        :img-src="fruit.url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Rs.{{fruit.price}}</b-card-text>
        <b-button href="#" variant="primary" @click="addToCart(fruit)">Add To Cart</b-button>
      </b-card>
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
.box {
  width: 200px;
  height: 300px;
  float: left;
}
</style>