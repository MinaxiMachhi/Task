<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>Add Product</h1>Product Name
        <br />
        <input type="text" v-model="product.productName" />
        <br />
        <br />Price
        <br />
        <input type="text" v-model="product.productPrice" />
        <br />
        <br />
        <p>
          <button class="btn btn-primary btn-lg" @click="addProduct()">Add &raquo;</button>
        </p>
        <div>
          <displayProduct ref="child" :product="product" />
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import displayProduct from "@/components/displayProduct.vue";
export default {
  components: {
    displayProduct
  },
  data() {
    return {
      product: {
        productName: "",
        productPrice: ""
      },
    };
  },
  methods: {
    addProduct() {
      this.$refs.child.childMethod();
     /*  let data = {
        Name: this.product.productName,
        Price: this.product.productPrice
      };
      this.item.push(data)
      console.log(data)
    */ }
    // this.$refs.child.adddata();
  }
};
</script>
<style scoped>
.jumbotron {
  width: 900px;
  margin-left: 10%;
  height: 340px;
}
</style>