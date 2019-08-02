<template>

    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Weather forecast</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>

       
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <!-- <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button> -->
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <!-- <b-nav-item-dropdown right> -->
           
            <!-- <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
          <!-- </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

   
      
        <div id="app">
          <!-- <Home/> -->
       <router-view/>
        </div>
     

   
  <!-- <b-button :to="links[0].url" type="button">Turn</b-button> -->

</div>
<!-- </div> -->

 
</template>
    <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWdGA-ndsHMtR5-cdZrc5SHtfKKBG5Bfg"></script> -->

<script>
// import Home from './components/Home.vue'
import googleMap from './components/Maps.vue'
export default {
  name: 'app',
  // components: {
  //   Home
  // },
  // data () {
  //   return {
  //     links: [
  //       {title: 'Home', url: '/home'},
  //       // {title: 'Map', url: '/map'},
  //     ]
  //   }
  // }
 }


</script>


<style>
  @keyframes animation-bg { 
  0% { 
    opacity: 0.1; 
  } 
  10% {
    opacity: 0.2; 
  }
  20% {
    opacity: 0.3; 
  }
  30% {
    opacity: 0.4; 
  }
  40% {
    opacity: 0.5; 
  }
  50% {
    opacity: 0.6; 
  }
  60% {
    opacity: 0.7; 
  }
  70% {
    opacity: 0.8; 
  }
  80% {
    opacity: 0.9; 
  }
  90% {
    opacity: 0.95; 
  }
  100% {
    opacity: 1; 
  }
}
  .bg {
    animation: animation-bg 2s ease ;
    background-image: url(https://picsum.photos/id/340/2200/1050);
    background-color: white;
    /* background-size: 25%; */
    background-size:cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
    min-height: 100vh;
  }
</style>