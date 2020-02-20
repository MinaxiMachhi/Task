<template>
  <div id="app">
    <gallary />
    <!-- <lazy-load /> -->
  </div>
</template>
<script>
import gallary from "@/components/gallary.vue";
import lazyLoad from "@/components/lazyLoad.vue";
export default {
  components: {
    gallary,
    lazyLoad
  }
};
</script>