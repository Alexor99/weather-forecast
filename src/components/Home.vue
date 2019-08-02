<template>
<div :style="{'background-image': setBgImage, animation: animationBg}" class="bg">
  <b-container fluid class="bv-example-row">
    
  <b-row>
    <b-col sm="12" md="3"></b-col>
    <b-col sm="12" md="6" class="work_place">
      <div>
        <b-form  v-if="show" class="mt-3 pb-3">
          <b-form-group
            id="input-group-1"
            label="City name"
            label-for="city-search"
          >
            <b-form-input
              id="city-search"
              v-model="form.city"
              @focus="cityFocus()"
              @blur="cityBlur()"
              :disabled="cityDisabled"             
              required
              placeholder="Enter city name"
            ></b-form-input>
          </b-form-group>

          <div class="text-center">
            <h3><b-badge>OR</b-badge></h3>
          </div>

          <b-form-group id="input-group-2" label="Latitude:" label-for="latitude">
            <b-form-input
              id="latitude"
              v-model="form.lat"
              @focus="LatLonFocus()"
              @blur="LatLonBlur()"
              :disabled="LatLonDisabled"
              placeholder="Enter Latitude"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Longitude:" label-for="longitude">
            <b-form-input
              id="longitude"
              v-model="form.lon"
              @focus="LatLonFocus()"
              @blur="LatLonBlur()"
              :disabled="LatLonDisabled"
              placeholder="Enter Longitude"
            ></b-form-input>
          </b-form-group>

          <div v-if="loading">
            <div class="text-center">
              <b-spinner class="spinner" variant="primary" label="Spinning"></b-spinner>
            </div>
          </div>

          <div v-if="!loading">
          
          </div>
         
          <b-row>
            <b-col cols="5" md="3">
              <b-button class="w-100" ml="2" @click="onSubmit"  type="button" variant="primary">Find</b-button>
            </b-col>
            <b-col cols="2" md="6"></b-col>           
            <b-col cols="5" md="3">
              <b-button class="w-100" @click="onReset" type="button" variant="danger">Clear</b-button>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="4"></b-col>
            <b-col md="4">
              <b-button @click="nextFiveDays"  class="w-100 mt-3"   type="button">Open 5-days weather forecast</b-button>
              <!-- <router-link class="txt-cen" to="/maps">Open Google Map</router-link> -->
            </b-col>
            <b-col md="4"></b-col>

          </b-row>


          <b-row  v-if="flag">
            <b-col></b-col>
            <b-col mt="2" class="txt-cen mt-4" cols="6" md="4">
              <img style=" width: 50%"  :src="srcWeatherIcon" alt="">
            </b-col>
            <b-col></b-col>
          </b-row>  
        </b-form>
       
        <b-table class="table" v-if="flag" striped hover :items="items_1"></b-table>
        <b-table class="table" v-if="flag" striped hover :items="items_2"></b-table>
        <b-table class="table" v-if="flag" striped hover :items="items_3"></b-table>
        <b-table class="table" v-if="flag" striped hover :items="items_4"></b-table>
 
      </div>
    </b-col>
    <b-col sm="12" md="3"></b-col>
  </b-row>

  <b-container>
      <b-row>
          <b-col md="1"></b-col>
          <b-col md="10" class="work_place">
            <div>
    <div>
      <h2 class="txt-cen mt-3">Google Map</h2>
    </div>
    <gmap-map
      :center="center"
      :zoom="10"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        
        :clickable="true"
      ></gmap-marker>
    </gmap-map>
  </div>
          </b-col>
          <b-col md="1"></b-col>
      </b-row>
  </b-container>
</b-container>
</div>
</template>

<script>
import axios from 'axios'
 export default {
   name: 'Home',
    data() {
       return {
        form: {
          city: '',
          lat: '',
          lon: '',
        },
        show: true,
        result:'London',
        loading: false,
        cityDisabled: false,
        LatLonDisabled: false,
        flag: false,

        bgImage: '',
        animationBg: '',

        items_1: [
          { city_name: '', latitude: '', longitude: ''}
        ],
        items_2: [
            {current_temp: '', min_temp: '', max_temp: ''}
        ],          
        items_3: [
          { pressure: '', humidity: '', wind: ''}
        ],
        items_4: [
          { overcast: '', sunrise: '', sunset: ''}
        ], 

        skyIcon: '',
        showSkyIcon: true,
        weatherType:'',
        srcWeatherIcon:'',

        links: [
        // {title: 'Home', url: '/home'},
        {title: 'New', url: '/new'},
      ],

      center: { lat: '', lng: '' },
      markers: [
          {
              position: { lat: '', lng: ''}
          },
      ],
      }
    },

    methods: {
      nextFiveDays(){
        // bus.$emit('dataFromHome', this.form.city);
         if(this.form.city == '')
            window.location.href="/maps?"
            + 'lat=' + this.form.lat + '&lon=' + this.form.lon;
         else
            window.location.href="/maps?" + 'city=' + this.form.city;            
      },

      cityFocus(){this.LatLonDisabled = true;},
      cityBlur(){
        this.form.city !== '' ?
        this.LatLonDisabled = true : this.LatLonDisabled = false;
      },

      LatLonFocus(){this.cityDisabled = true;},
      LatLonBlur(){
        (this.form.lon !== '' || this.form.lat !== '') ?
         this.cityDisabled = true : this.cityDisabled = false;
      },
      setSkyIcon() {
        alert('hello');
      },

      onSubmit() {
        this.loading = true;

        if(!(this.cityDisabled)){
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.form.city}&units=metric&appid=8b5e397427406dc2abb6a8ed861df776&lang=ru`)
          .then(responce =>{
            this.loading = false;
            var that = this;
            this.flag = true;

            this.items_1[0].city_name = responce.data.name;
            
            this.items_1[0].latitude = responce.data.coord.lat;
                
            this.items_1[0].longitude = responce.data.coord.lon;

            this.items_2[0].current_temp = responce.data.main.temp;
            
            this.items_2[0].min_temp = responce.data.main.temp_min;
                
            this.items_2[0].max_temp = responce.data.main.temp_max;
                
            this.items_3[0].pressure = responce.data.main.pressure;
                
            this.items_3[0].humidity = responce.data.main.humidity + '%';
              
            this.items_3[0].wind = responce.data.wind.speed + 'm/s';
                
            this.items_4[0].overcast = responce.data.weather[0].description;
                
            this.items_4[0].sunrise = new Date(responce.data.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,5);

            this.items_4[0].sunset = new Date(responce.data.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,5);          

            this.center = {
              lat: responce.data.coord.lat,
              lng: responce.data.coord.lon
            };

            this.markers[0].position.lat = responce.data.coord.lat;
            this.markers[0].position.lng = responce.data.coord.lon;

            switch(this.items_4[0].overcast) {  
              case 'ясно':  // if (x === 'value1')
                this.bgImage = 'url'+'('+'https://picsum.photos/id/62/2200/1050'+')';
                this.weatherType = "clear-day";
                this.srcWeatherIcon = require('@/assets/clear-day.gif');
                break
              case 'слегка облачно':  // if (x === 'value2')
                this.bgImage = 'url'+'('+'https://picsum.photos/id/54/2200/1050'+')'
                this.weatherType = "partly-cloudy-day";
                this.srcWeatherIcon = require('@/assets/partly-cloudy-day.gif');
                break
              case 'пасмурно':  // if (x === 'value2')
                this.bgImage = 'url'+'('+'https://picsum.photos/id/51/2200/1050'+')'
                this.weatherType = "cloudy";
                this.srcWeatherIcon = require('@/assets/cloudy.gif');
                break
              case 'облачно':  // if (x === 'value2')
                this.bgImage = 'url'+'('+'https://picsum.photos/id/38/2200/1050'+')'
                this.weatherType = "cloudy";
                this.srcWeatherIcon = require('@/assets/cloudy.gif');
                break
              case 'легкий дождь':  // if (x === 'value2')
                this.bgImage = 'url'+'('+'https://picsum.photos/id/171/2200/1050'+')'
                this.weatherType = "rain";
                this.srcWeatherIcon = require('@/assets/rain.gif');
                break
              case 'дождь':  // if (x === 'value2')
                this.bgImage = 'url'+'('+'https://picsum.photos/id/232/2200/1050'+')'
                this.weatherType = "rain";
                this.srcWeatherIcon = require('@/assets/rain.gif');
                break
              case 'туманно':  // if (x === 'value2')
                this.bgImage = 'url'+'('+'https://picsum.photos/id/228/2200/1050'+')'
                this.weatherType = "fog";
                this.srcWeatherIcon = require('@/assets/cloudy.gif');
                break

              default:
                this.bgImage = 'url'+'('+'https://picsum.photos/id/14/2200/1050'+')'
                break
            }
          })
          .catch(error => {
            this.loading = false;
            alert('Incorrect city name. Please try again.');
          })
        } else {
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.form.lat}&lon=${this.form.lon}&units=metric&appid=8b5e397427406dc2abb6a8ed861df776&lang=ru`)
          .then(responce =>{
            this.loading = false;
            this.flag = true;

            this.items_1[0].city_name = responce.data.name;
            
            this.items_1[0].latitude = responce.data.coord.lat;
                
            this.items_1[0].longitude = responce.data.coord.lon;

            this.items_2[0].current_temp = responce.data.main.temp;
            
            this.items_2[0].min_temp = responce.data.main.temp_min;
                
            this.items_2[0].max_temp = responce.data.main.temp_max;
                
            this.items_3[0].pressure = responce.data.main.pressure;
                
            this.items_3[0].humidity = responce.data.main.humidity + '%';
              
            this.items_3[0].wind = responce.data.wind.speed + 'm/s';
                
            this.items_4[0].overcast = responce.data.weather[0].description;
                
            this.items_4[0].sunrise = new Date(responce.data.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,5);

            this.items_4[0].sunset = new Date(responce.data.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,5);

            this.center = {
              lat: responce.data.coord.lat,
              lng: responce.data.coord.lon
            };

            this.markers[0].position.lat = responce.data.coord.lat;
            this.markers[0].position.lng = responce.data.coord.lon;

          
          switch(this.items_4[0].overcast) {
            case 'ясно':  // if (x === 'value1')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/62/2200/1050'+')';
              this.weatherType = "clear-day";
              this.srcWeatherIcon = require('@/assets/clear-day.gif');
              break
            case 'слегка облачно':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/54/2200/1050'+')'
              this.weatherType = "partly-cloudy-day";
              this.srcWeatherIcon = require('@/assets/partly-cloudy-day.gif');
              break
            case 'пасмурно':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/51/2200/1050'+')'
              this.weatherType = "cloudy";
              this.srcWeatherIcon = require('@/assets/cloudy.gif');
              break
            case 'облачно':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/38/2200/1050'+')'
              this.weatherType = "cloudy";
              this.srcWeatherIcon = require('@/assets/cloudy.gif');
              break
            case 'легкий дождь':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/171/2200/1050'+')'
              this.weatherType = "rain";
              this.srcWeatherIcon = require('@/assets/rain.gif');
              break
            case 'дождь':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/232/2200/1050'+')'
              this.weatherType = "rain";
              this.srcWeatherIcon = require('@/assets/rain.gif');
              break
            case 'туман':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/922/2200/1050'+')'
              this.weatherType = "fog";
              // this.srcWeatherIcon = require('@/assets/315.gif');
              break
            case 'гроза':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/228/2200/1050'+')'
              this.weatherType = "fog";
              this.srcWeatherIcon = require('@/assets/storm.gif');
              break  
            case 'гроза c мелким дождём':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/228/2200/1050'+')'
              this.weatherType = "fog";
              this.srcWeatherIcon = require('@/assets/stormwithrain.gif');
              break
            case 'гроза дождём':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/228/2200/1050'+')'
              this.weatherType = "fog";
              this.srcWeatherIcon = require('@/assets/stormwithrain.gif');
              break
            case 'снег':  // if (x === 'value2')
              this.bgImage = 'url'+'('+'https://picsum.photos/id/964/2200/1050'+')'
              this.weatherType = "fog";
              this.srcWeatherIcon = require('@/assets/snow.gif');
              break

            default:
              this.bgImage = 'url'+'('+'https://picsum.photos/id/14/2200/1050'+')'
              break
          }
          })
          .catch(error => {
            this.loading = false;
            alert('Problem with connecting');
          })
        }
      },

      onReset(){
        this.form.city = '';
        this.cityDisabled = false;

        this.form.lon = '';
        this.form.lat = '';
        this.LatLonDisabled = false;
      }, 

    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
    },

   mounted() {
    this.geolocate();
  },

    computed: {
      setBgImage: function () {
        return this.bgImage;
      },
    }
}
  </script>


<style>
  /* .spinner { */
    /* display: none; */
  /* } */
  .work_place {
    background: white;
  }
  .table {
    text-align: center;
  }
</style>

<style>
  .txt-cen {
    text-align: center;
  }
</style>
