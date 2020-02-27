<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <!-- <div class="navbar-nav"></div> -->
        <div class="left">
          <img src="@/assets/cart.png" />
          <router-link to="/" style="color:white; padding-left:10px;">SHOPPING CART</router-link>
        </div>
        <div class="right">
          <div class="link">
            <router-link class="nav-link" to="/fruits">Fruit</router-link>
          </div>
          <div class="link">
            <router-link class="nav-link" to="/watch">Watch</router-link>
          </div>
          <div class="link">
            <router-link class="nav-link" to="/cube">Cube</router-link>
          </div>
          <div class="link">
            <button type="button" class="btn btn-primary" v-b-modal.modal-1>
              <b-modal id="modal-1" title="SHOPPING CART">
                <p class="my-4">Hello from Shopping Cart!</p>
                <div>
                  <h3 style="font-family:verdana">CART LIST</h3>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(cart,index) in addToCart" :key="index">
                        <td>{{cart.nameOfProduct}}</td>
                        <td>{{cart.quantityOfProduct}}</td>
                        <td>{{cart.valOfProduct}}</td>
                      </tr>
                    </tbody>
                    <tbody></tbody>
                    <tbody>
                      <tr>
                        <th>total</th>
                        <td>{{totalQuantity}}</td>
                        <td>
                          <b>{{totalPrice}}</b>
                        </td>
                      </tr>
                    </tbody>
                    <tbody></tbody>
                  </table>
                </div>
              </b-modal>Cart
              <span class="badge badge-light">{{totalQuantity}}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <div class="itemcontainer">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import fruits from "@/components/fruits.vue";
import watch from "@/components/watch.vue";
import cube from "@/components/cube.vue";
export default {
  components: {
    fruits,
    watch,
    cube
  },
  data() {
    return {
      addToCart: [],
      totalPrice: "0",
      totalQuantity: "0"
    };
  },
  created() {
    this.$root.$on("addToCart", product => {
      console.log("miiiii", this.addToCart);
      product.quantity++;
      var payload = {
        nameOfProduct: product.name,
        quantityOfProduct: product.quantity,
        valOfProduct: product.quantity * product.price
      };
      let record = this.addToCart.find(x => x.nameOfProduct === product.name);
      console.log("productName", record);

      if (record) {
        record.quantityOfProduct = payload.quantityOfProduct;
        record.valOfProduct = payload.valOfProduct;
      } else {
        this.addToCart.push(payload);
        console.log("payload:", payload);
      }

      let sum = 0;
      this.addToCart.forEach(e => (sum += e.quantityOfProduct));
      this.totalQuantity = sum;

      let sumofPrice = 0;
      this.addToCart.forEach(e => (sumofPrice += e.valOfProduct));
      this.totalPrice = sumofPrice;
    });
  },
  beforeDestroy() {
    // off listner
    this.$root.$off("addToCart");
  }
};
</script>

<style scoped>
.main {
  width: 100%;
}
.itemcontainer {
  width: 100%;
  float: left;
}
.left {
  width: 30%;
  padding: 1%;
}
.right {
  width: 40%;
  margin-left: 40%;
}
.right .link {
  /* float: right; */
  float: left;
  padding-left: 3%;
}
.nav-link {
  color: white;
}
img {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}
</style>
