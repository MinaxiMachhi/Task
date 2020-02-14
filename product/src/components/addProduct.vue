<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>Add Product</h1>Product Name
        <br />
        <input type="text" v-model="item.productName" />
        <br />
        <br />Price
        <br />
        <input type="text" v-model="item.productPrice" />
        <br />
        <br />
        <p>
          <button class="btn btn-primary btn-lg" @click="addProduct()">Add &raquo;</button>
        </p>
        <div>
          <displayProduct :items="data" />
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
      item: {
        productName: "",
        productPrice: ""
      },
      data: {
        Name: "",
        Price: ""
      }
    };
  },
  methods: {
    addProduct() {
      this.data.Name = this.item.productName;
      this.data.Price = this.item.productPrice;
    }
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