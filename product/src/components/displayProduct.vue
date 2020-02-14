<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h2>{{this.items.Name}}</h2>
        <h4>{{this.items.Price}}</h4>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        <p>
          <a class="btn btn-default" href="#" role="button">View details &raquo;</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["items"]
};
</script>
<style scoped>
.jumbotron {
  background-color: white;
}
</style>