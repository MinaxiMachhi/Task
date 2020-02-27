<template>
  <div>
    <h3 style="font-family:verdana">WATCHES</h3>
    <br />
    <div class="box" v-for="watch in watches" :key="watch.id">
    
    
     <b-card
        :title="watch.name"
        :img-src="watch.url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Rs.{{watch.price}}</b-card-text>

        <b-button href="#" variant="primary" @click="addToCart(watch)">Add To Cart</b-button>
      </b-card>
    
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