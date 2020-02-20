<template>
  <div class="container">
    <div v-for="photo in photos" :key="photo.id">
      <img :data-lazy="photo.avatar" height="300px"  width="300px"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      photos: null
    };
  },
  created() {
    this.getAlbum();
  },
  methods: {
    getAlbum() {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then(res => {this.photos = res.data.data
        setTimeout(()=>
        this.scroll())
        });
    },
    scroll() {
      window.scrollTo(0,0)
      const targets = document.querySelectorAll("img");

      console.log("here",targets)
      window.addEventListener("scroll", (event) => {
        targets.forEach(img => {
          const rect = img.getBoundingClientRect().top;
           console.log("rect",rect)
          if (rect <= window.innerHeight) {
            setTimeout(() => {
              const src = img.getAttribute("data-lazy");
              img.setAttribute("src", src);
            }, 500);
          }
        });
      });
    }
  }
};
</script>

<style>
.container{
  margin-top: 20%
}
</style>