<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/"  class="navbar-brand nav-link">Navbar</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="#" class="nav-link">Home</router-link>
          </li>
           <li class="nav-item">
            <router-link to="/Posts" class="nav-link" >Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link">Contact</router-link>
          </li>
            <li class="nav-item">
            <router-link to="#" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0"  type="submit">Search</button>
        </form>
      </div>
    </nav>

    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/services">Services</router-link>
    <router-link to="/contact">Contact</router-link>   -->
    <router-view></router-view>

  </div>
</template>

<script>
// import RouterDemo from './components/RouterDemo.vue'
// import Home from "./components/Home.vue";
// import postList from "./components/postList.vue"
export default {
  name: "app",
  components: {
    // postList
    // Home
  },
};
</script>

<style scoped>
</style>