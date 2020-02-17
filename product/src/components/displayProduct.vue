<template>
  <div>
    
      <div v-for="comp in item" :key="comp" class="container">
        <h2>{{comp.Name}}</h2>
        <h4>{{comp.Price}}</h4>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        <p>
          <a class="btn btn-default" href="#" role="button">View details &raquo;</a>
        </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['product'],
  data(){
    return{
      item:[], 
    }
  },
  methods:{
    childMethod(){
       let data = {
        Name: this.product.productName,
        Price: this.product.productPrice
      };
      this.item.push(data)
      console.log(this.item)
    }
  }
};
</script>
<style scoped>
.container {
  background-color: white;
  width: 290px;
  float: left;
}
</style>