<template>
<div :style="{'background-image': setBgImage, animation: animationBg}" class="bg">

  <b-container>
      <b-row>
          <b-col md="1"></b-col>
          <b-col md="12" class="work_place">
            
            <div>
              <b-form >

                  <div v-if="loading"   class="mt-3">
                     <div class="txt_cen">
                       <b-spinner  class="spinner" variant="primary" label="Spinning"></b-spinner>
                    </div>
                  </div>
                  
                  <b-form-group class="mt-3">
                      <h2 class="txt_cen">{{date.firstDay}}</h2>     
                  <div>
                    <b-dropdown id="dropdown-1" :text="selectedHeaderItem_1" class="m-md-2 mt-2 mb-2">
                      <b-dropdown-item :disabled="flagItem1_1" ref="slotDropDown1_1" @click="selectHeaderItem_1('00:00:00')">00:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem1_2" ref="slotDropDown1_2" @click="selectHeaderItem_1('03:00:00')">03:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem1_3" ref="slotDropDown1_3" @click="selectHeaderItem_1('06:00:00')">06:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem1_4" ref="slotDropDown1_4" @click="selectHeaderItem_1('09:00:00')">09:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem1_5" ref="slotDropDown1_5" @click="selectHeaderItem_1('12:00:00')">12:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem1_6" ref="slotDropDown1_6" @click="selectHeaderItem_1('15:00:00')">15:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem1_7" ref="slotDropDown1_7" @click="selectHeaderItem_1('18:00:00')">18:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem1_8" ref="slotDropDown1_8" @click="selectHeaderItem_1('21:00:00')">21:00:00</b-dropdown-item>
                    </b-dropdown>
                  </div>    
                  
                  
                  <b-row>
                   <b-col></b-col>
                   <b-col mt="2" class="txt_cen mt-3" cols="6" md="4">
                    <img style=" width: 50%"  :src="srcWeatherIcon_1[0].src" alt="">
                   </b-col>
                   <b-col></b-col>
                  </b-row>     

                  <b-table class="table" v-if="flag" striped hover :items="items_1_1"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_1_2"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_1_3"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_1_4"></b-table>
                  </b-form-group>
                  

                  
                
                  

                  <b-form-group class="mt-3">
                     <h2 class="txt_cen">{{date.secondDay}}</h2>

                  <div>
                    <b-dropdown id="dropdown-1" :text="selectedHeaderItem_2" class="m-md-2 mt-2 mb-2">
                      <b-dropdown-item ref="slotDropDown1_1" @click="selectHeaderItem_2('00:00:00')">00:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_2" @click="selectHeaderItem_2('03:00:00')">03:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_3" @click="selectHeaderItem_2('06:00:00')">06:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_4" @click="selectHeaderItem_2('09:00:00')">09:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_5" @click="selectHeaderItem_2('12:00:00')">12:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_6" @click="selectHeaderItem_2('15:00:00')">15:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_7" @click="selectHeaderItem_2('18:00:00')">18:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_8" @click="selectHeaderItem_2('21:00:00')">21:00:00</b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <b-row>
                   <b-col></b-col>
                   <b-col mt="2" class="txt_cen mt-3" cols="6" md="4">
                    <img style=" width: 50%"  :src="srcWeatherIcon_2[0].src" alt="">
                   </b-col>
                   <b-col></b-col>
                  </b-row>

                  <b-table class="table" v-if="flag" striped hover :items="items_2_1"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_2_2"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_2_3"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_2_4"></b-table>
                  </b-form-group>
                  

                  <b-form-group class="mt-3">
                     <h2 class="txt_cen">{{date.thirdDay}}</h2>

                  <div>
                    <b-dropdown id="dropdown-1" :text="selectedHeaderItem_3" class="m-md-2 mt-2 mb-2">
                      <b-dropdown-item ref="slotDropDown1_1" @click="selectHeaderItem_3('00:00:00')">00:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_2" @click="selectHeaderItem_3('03:00:00')">03:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_3" @click="selectHeaderItem_3('06:00:00')">06:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_4" @click="selectHeaderItem_3('09:00:00')">09:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_5" @click="selectHeaderItem_3('12:00:00')">12:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_6" @click="selectHeaderItem_3('15:00:00')">15:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_7" @click="selectHeaderItem_3('18:00:00')">18:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_8" @click="selectHeaderItem_3('21:00:00')">21:00:00</b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <b-row>
                   <b-col></b-col>
                   <b-col mt="2" class="txt_cen mt-3" cols="6" md="4">
                    <img style=" width: 50%"  :src="srcWeatherIcon_3[0].src" alt="">
                   </b-col>
                   <b-col></b-col>
                  </b-row>

                  <b-table class="table" v-if="flag" striped hover :items="items_3_1"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_3_2"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_3_3"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_3_4"></b-table>
                  </b-form-group>
                  


                  <b-form-group class="mt-3">
                     <h2 class="txt_cen">{{date.fourthDay}}</h2>

                  <div>
                    <b-dropdown id="dropdown-1" :text="selectedHeaderItem_4" class="m-md-2 mt-2 mb-2">
                      <b-dropdown-item ref="slotDropDown1_1" @click="selectHeaderItem_4('00:00:00')">00:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_2" @click="selectHeaderItem_4('03:00:00')">03:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_3" @click="selectHeaderItem_4('06:00:00')">06:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_4" @click="selectHeaderItem_4('09:00:00')">09:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_5" @click="selectHeaderItem_4('12:00:00')">12:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_6" @click="selectHeaderItem_4('15:00:00')">15:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_7" @click="selectHeaderItem_4('18:00:00')">18:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_8" @click="selectHeaderItem_4('21:00:00')">21:00:00</b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <b-row>
                   <b-col></b-col>
                   <b-col mt="2" class="txt_cen mt-3" cols="6" md="4">
                    <img style=" width: 50%"  :src="srcWeatherIcon_4[0].src" alt="">
                   </b-col>
                   <b-col></b-col>
                  </b-row>

                  <b-table class="table" v-if="flag" striped hover :items="items_4_1"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_4_2"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_4_3"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_4_4"></b-table>
                  </b-form-group>
                  

                  <b-form-group class="mt-3">
                     <h2 class="txt_cen">{{date.fifthDay}}</h2>

                  <div>
                    <b-dropdown id="dropdown-1" :text="selectedHeaderItem_5" class="m-md-2 mt-2 mb-2">
                      <b-dropdown-item ref="slotDropDown1_1" @click="selectHeaderItem_5('00:00:00')">00:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_2" @click="selectHeaderItem_5('03:00:00')">03:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_3" @click="selectHeaderItem_5('06:00:00')">06:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_4" @click="selectHeaderItem_5('09:00:00')">09:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_5" @click="selectHeaderItem_5('12:00:00')">12:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_6" @click="selectHeaderItem_5('15:00:00')">15:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_7" @click="selectHeaderItem_5('18:00:00')">18:00:00</b-dropdown-item>
                      <b-dropdown-item ref="slotDropDown1_8" @click="selectHeaderItem_5('21:00:00')">21:00:00</b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <b-row>
                   <b-col></b-col>
                   <b-col mt="2" class="txt_cen mt-3" cols="6" md="4">
                    <img style=" width: 50%"  :src="srcWeatherIcon_5[0].src" alt="">
                   </b-col>
                   <b-col></b-col>
                  </b-row>

                  <b-table class="table" v-if="flag" striped hover :items="items_5_1"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_5_2"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_5_3"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_5_4"></b-table>
                  </b-form-group>
                  

                  <b-form-group v-if="showSixthDay" class="mt-3">
                     <h2 class="txt_cen">{{date.sixthDay}}</h2>

                  <div>
                    <b-dropdown id="dropdown-1" :text="selectedHeaderItem_6" class="m-md-2 mt-2 mb-2">
                      <b-dropdown-item :disabled="flagItem6_1"  @click="selectHeaderItem_6('00:00:00')">00:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem6_2"  @click="selectHeaderItem_6('03:00:00')">03:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem6_3"  @click="selectHeaderItem_6('06:00:00')">06:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem6_4"  @click="selectHeaderItem_6('09:00:00')">09:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem6_5"  @click="selectHeaderItem_6('12:00:00')">12:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem6_6"  @click="selectHeaderItem_6('15:00:00')">15:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem6_7"  @click="selectHeaderItem_6('18:00:00')">18:00:00</b-dropdown-item>
                      <b-dropdown-item :disabled="flagItem6_8"  @click="selectHeaderItem_6('21:00:00')">21:00:00</b-dropdown-item>
                    </b-dropdown>
                  </div>

                  <b-row>
                   <b-col></b-col>
                   <b-col mt="2" class="txt_cen mt-3" cols="6" md="4">
                    <img style=" width: 50%"  :src="srcWeatherIcon_6[0].src" alt="">
                   </b-col>
                   <b-col></b-col>
                  </b-row>

                  <b-table class="table" v-if="flag" striped hover :items="items_6_1"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_6_2"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_6_3"></b-table>
                  <b-table class="table" v-if="flag" striped hover :items="items_6_4"></b-table>
                  </b-form-group>
                  


              </b-form>
            </div>
          </b-col>
          <b-col md="1"></b-col>
      </b-row>
  </b-container>
  </div>
</template>

<script>

import axios from 'axios'
var moment = require( 'moment' );
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      form: {
          city: '',
          lat: '',
          lon: '',
        },

      flag: true,
      loading: false,

      flagItem1_1: false,
      flagItem1_2: false,
      flagItem1_3: false,
      flagItem1_4: false,
      flagItem1_5: false,
      flagItem1_6: false,
      flagItem1_7: false,
      flagItem1_8: false,

      flagItem6_1: true,
      flagItem6_2: true,
      flagItem6_3: true,
      flagItem6_4: true,
      flagItem6_5: true,
      flagItem6_6: true,
      flagItem6_7: true,
      flagItem6_8: true,


      items_1_1: [{ city_name: '', latitude: '', longitude: ''}],
      items_1_2: [{current_temp: '', min_temp: '', max_temp: ''}],          
      items_1_3: [{ pressure: '', humidity: '', wind: ''}],
      items_1_4: [{ overcast: '', sea_level: '', ground_level: ''}], 

      items_2_1: [{ city_name: '', latitude: '', longitude: ''}],
      items_2_2: [{current_temp: '', min_temp: '', max_temp: ''}],          
      items_2_3: [{ pressure: '', humidity: '', wind: ''}],
      items_2_4: [{ overcast: '', sea_level: '', ground_level: ''}], 

      items_3_1: [{ city_name: '', latitude: '', longitude: ''}],
      items_3_2: [{current_temp: '', min_temp: '', max_temp: ''}],          
      items_3_3: [{ pressure: '', humidity: '', wind: ''}],
      items_3_4: [{ overcast: '', sea_level: '', ground_level: ''}], 

      items_4_1: [{ city_name: '', latitude: '', longitude: ''}],
      items_4_2: [{current_temp: '', min_temp: '', max_temp: ''}],          
      items_4_3: [{ pressure: '', humidity: '', wind: ''}],
      items_4_4: [{ overcast: '', sea_level: '', ground_level: ''}], 

      items_5_1: [{ city_name: '', latitude: '', longitude: ''}],
      items_5_2: [{current_temp: '', min_temp: '', max_temp: ''}],          
      items_5_3: [{ pressure: '', humidity: '', wind: ''}],
      items_5_4: [{ overcast: '', sea_level: '', ground_level: ''}], 

      items_6_1: [{ city_name: '', latitude: '', longitude: ''}],
      items_6_2: [{current_temp: '', min_temp: '', max_temp: ''}],          
      items_6_3: [{ pressure: '', humidity: '', wind: ''}],
      items_6_4: [{ overcast: '', sea_level: '', ground_level: ''}], 

      date: {
          firstDay:'',
          secondDay:'',
          thirdDay:'',
          fourthDay:'',
          fifthDay:'',
          sixthDay:''
      },

      showSixthDay: true,
            
      dropDownText:'DropDown',
      selectedHeaderItem_1: '',
      selectedHeaderItem_2: '',
      selectedHeaderItem_3: '',
      selectedHeaderItem_4: '',
      selectedHeaderItem_5: '',
      selectedHeaderItem_6: '',

      responceData:{},

      arrSearchString:'',

      iterationBeginNewDay:'',

      srcWeatherIcon_1:[{src:'', name: 'Icon_1'}],
      srcWeatherIcon_2:[{src:'', name: 'Icon_2'}],
      srcWeatherIcon_3:[{src:'', name: 'Icon_3'}],
      srcWeatherIcon_4:[{src:'', name: 'Icon_4'}],
      srcWeatherIcon_5:[{src:'', name: 'Icon_5'}],
      srcWeatherIcon_6:[{src:'', name: 'Icon_6'}],
    };
  },

  created() {
    // alert(window.location.search);
    var str = window.location.search;
    var arr = str.split('=');
    // this.arrSearchString = arr;
    // alert(arr);
    
    if(arr[0] == '?city'){
       this.form.city = arr[1];
       this.queryToCity();
    }
    else {
       var arrParseAmpersand = arr[1].split('&');
       alert(arrParseAmpersand[0]);
       alert(arr[2]);
       this.form.lat = arrParseAmpersand[0];
       this.form.lon = arr[2];
       this.queryToLatLon();
    }
  },


  methods: {
   queryToCity(){
     this.queryToCityOrLatLon(1);
   },
   queryToLatLon(){
     this.queryToCityOrLatLon(0);
   },

   queryToCityOrLatLon (queryType) {
     var arr_FullDate = [];
     var arr_Date = [];
     var arr_Time = [];
     var arr_days = [];

      this.loading = true;
    //    queryToCity();
    // alert(this.form.city);
    var url;
    if(queryType == 0)
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.form.lat}&lon=${this.form.lon}&units=metric&mode=json&appid=8b5e397427406dc2abb6a8ed861df776&lang=ru`
    if(queryType == 1)
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.form.city}&units=metric&mode=json&appid=795d37a150b3a96592e99cc48a6a139a&lang=ru`
    axios.get(url)
       .then(responce =>{

           this.responceData = responce.data;
           console.log(this.responceData);

           this.loading = false;
    
           
           for(var i = 0; i < 40; i++){
               var date = responce.data.list[i].dt_txt;
               arr_FullDate[i] = date.split(' ');
               arr_Time[i] = arr_FullDate[i][1];
               arr_Date[i] = arr_FullDate[i][0].split('-');


            //    var iterationBeginNewDay;
               if(i == 0){
                this.date.firstDay = moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' );
                this.date.firstDay = this.date.firstDay + ", " + `${arr_Date[i][2]}.${arr_Date[i][1]}.${arr_Date[i][0]}`;
                // console.log(firstDay);
                console.log(arr_Time[i]);
                var hours = arr_Time[i].split(":");
                this.iterationBeginNewDay = (24 - hours[0]) / 3;
                console.log('ITERATION -' + this.iterationBeginNewDay);
                this.selectedHeaderItem_1 = arr_Time[i];

                this.writeToTable(responce.data, i, this.srcWeatherIcon_1, this.items_1_1, this.items_1_2, this.items_1_3, this.items_1_4);

                

                var hoursMinSec = arr_Time[0].split(':');
                console.log(hoursMinSec[0]);
                  
                    if(parseInt(hoursMinSec[0]) > 0){
                      this.flagItem1_1 = true;
                    }
                    if(parseInt(hoursMinSec[0]) > 3){
                      this.flagItem1_2 = true;
                    }
                    if(parseInt(hoursMinSec[0]) > 6){
                      this.flagItem1_3 = true;
                    }
                    if(parseInt(hoursMinSec[0]) > 9){
                      this.flagItem1_4 = true;
                    }
                    if(parseInt(hoursMinSec[0]) > 12){
                      this.flagItem1_5 = true;
                    }
                    if(parseInt(hoursMinSec[0]) > 15){
                      this.flagItem1_6 = true;
                    }
                    if(parseInt(hoursMinSec[0]) > 18){
                      this.flagItem1_7 = true;
                    }
                    if(parseInt(hoursMinSec[0]) > 21){
                      this.flagItem1_8 = true;
                    }

                
               }
               if(i == this.iterationBeginNewDay){
                this.date.secondDay = moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' );
                this.date.secondDay = this.date.secondDay + ", " + `${arr_Date[i][2]}.${arr_Date[i][1]}.${arr_Date[i][0]}`
                this.selectedHeaderItem_2 = arr_Time[i];

                this.writeToTable(responce.data, i,  this.srcWeatherIcon_2, this.items_2_1, this.items_2_2, this.items_2_3, this.items_2_4);
               }
               if(i == this.iterationBeginNewDay + 8){
                this.date.thirdDay = moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' );
                this.date.thirdDay = this.date.thirdDay + ", " + `${arr_Date[i][2]}.${arr_Date[i][1]}.${arr_Date[i][0]}`
                this.selectedHeaderItem_3 = arr_Time[i];
                
                this.writeToTable(responce.data, i,  this.srcWeatherIcon_3, this.items_3_1, this.items_3_2, this.items_3_3, this.items_3_4);
               }
                if(i == this.iterationBeginNewDay + 16){
                this.date.fourthDay = moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' );
                this.date.fourthDay = this.date.fourthDay + ", " + `${arr_Date[i][2]}.${arr_Date[i][1]}.${arr_Date[i][0]}`
                this.selectedHeaderItem_4 = arr_Time[i];
               
                this.writeToTable(responce.data, i, this.srcWeatherIcon_4, this.items_4_1, this.items_4_2, this.items_4_3, this.items_4_4);
               }
               if(i == this.iterationBeginNewDay + 24){
                this.date.fifthDay = moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' );
                this.date.fifthDay = this.date.fifthDay + ", " + `${arr_Date[i][2]}.${arr_Date[i][1]}.${arr_Date[i][0]}`
                this.selectedHeaderItem_5 = arr_Time[i];
               
                this.writeToTable(responce.data, i, this.srcWeatherIcon_5, this.items_5_1, this.items_5_2, this.items_5_3, this.items_5_4);
               }
               if(i == this.iterationBeginNewDay + 32){
                this.date.sixthDay = moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' );
                this.date.sixthDay = this.date.sixthDay + ", " + `${arr_Date[i][2]}.${arr_Date[i][1]}.${arr_Date[i][0]}`
                this.selectedHeaderItem_6 = arr_Time[i];
                
                this.writeToTable(responce.data, i, this.srcWeatherIcon_6, this.items_6_1, this.items_6_2, this.items_6_3, this.items_6_4);
               }
               if(i == 39){
                  console.log(i);
                  console.log(arr_Time[i]);
                  var hoursMinSec = arr_Time[i].split(':');
                  console.log("Time for last day" + hoursMinSec[0]);
                  
                    if(parseInt(hoursMinSec[0]) >= 0){
                      this.flagItem6_1 = false;
                    }
                    if(parseInt(hoursMinSec[0]) >= 3){
                      this.flagItem6_2 = false;
                    }
                    if(parseInt(hoursMinSec[0]) >= 6){
                      this.flagItem6_3 = false;
                    }
                    if(parseInt(hoursMinSec[0]) >= 9){
                      this.flagItem6_4 = false;
                    }
                    if(parseInt(hoursMinSec[0]) >= 12){
                      this.flagItem6_5 = false;
                    }
                    if(parseInt(hoursMinSec[0]) >= 15){
                      this.flagItem6_6 = false;
                    }
                    if(parseInt(hoursMinSec[0]) >= 18){
                      this.flagItem6_7 = false;
                    }
                    if(parseInt(hoursMinSec[0]) >= 21){
                      this.flagItem6_8 = false;
                    }
               }

               if(this.iterationBeginNewDay == 8) {
                   this.showSixthDay = false;
               }
                 
           }

           console.log(arr_Date[0][0]);
           console.log(arr_Date[0][1]);
           console.log(arr_Date[0][2]);
        })
        .catch(error => {
           this.loading = false;
           alert('Problem with connecting');
        })
   },
     

    writeToTable(data, iteration, weatherType, i1, i2, i3, i4){
       i1[0].city_name = data.city.name;
            
       i1[0].latitude = data.city.coord.lat;
                
       i1[0].longitude = data.city.coord.lon;

       i2[0].current_temp = data.list[iteration].main.temp;
            
       i2[0].min_temp = data.list[iteration].main.temp_min;
                
       i2[0].max_temp = data.list[iteration].main.temp_max;
                
       i3[0].pressure = data.list[iteration].main.pressure;
                
       i3[0].humidity = data.list[iteration].main.humidity + '%';
              
       i3[0].wind = data.list[iteration].wind.speed + 'm/s';
                
       i4[0].overcast = data.list[iteration].weather[0].description;
                
       i4[0].sea_level = data.list[iteration].main.sea_level;

       i4[0].ground_level = data.list[iteration].main.grnd_level;


        if(weatherType[0].name == 'Icon_1'){
            switch(i4[0].overcast) {  
              case 'ясно':  // if (x === 'value1')
                this.srcWeatherIcon_1[0].src = require('@/assets/clear-day.gif');
                break
              case 'слегка облачно':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/partly-cloudy-day.gif');
                break
              case 'пасмурно':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/cloudy.gif');
                break
              case 'облачно':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/cloudy.gif');
                break
              case 'легкий дождь':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/rain.gif');
                break
              case 'дождь':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/rain.gif');
                break
              case 'туманно':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/cloudy.gif');
                break
              case 'гроза':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/storm.gif');
                break  
              case 'гроза c мелким дождём':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'гроза дождём':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'снег':  // if (x === 'value2')
                this.srcWeatherIcon_1[0].src = require('@/assets/snow.gif');
                break  
             
           }
        }
        if(weatherType[0].name == 'Icon_2'){
            switch(i4[0].overcast) {  
              case 'ясно':  // if (x === 'value1')
                this.srcWeatherIcon_2[0].src = require('@/assets/clear-day.gif');
                break
              case 'слегка облачно':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/partly-cloudy-day.gif');
                break
              case 'пасмурно':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/cloudy.gif');
                break
              case 'облачно':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/cloudy.gif');
                break
              case 'легкий дождь':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/rain.gif');
                break
              case 'дождь':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/rain.gif');
                break
              case 'туманно':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/cloudy.gif');
                break
              case 'гроза':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/storm.gif');
                break  
              case 'гроза c мелким дождём':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'гроза дождём':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'снег':  // if (x === 'value2')
                this.srcWeatherIcon_2[0].src = require('@/assets/snow.gif');
                break
           }
        }
        if(weatherType[0].name == 'Icon_3'){
            switch(i4[0].overcast) {  
              case 'ясно':  // if (x === 'value1')
                this.srcWeatherIcon_3[0].src = require('@/assets/clear-day.gif');
                break
              case 'слегка облачно':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/partly-cloudy-day.gif');
                break
              case 'пасмурно':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/cloudy.gif');
                break
              case 'облачно':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/cloudy.gif');
                break
              case 'легкий дождь':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/rain.gif');
                break
              case 'дождь':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/rain.gif');
                break
              case 'туманно':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/cloudy.gif');
                break
              case 'гроза':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/storm.gif');
                break  
              case 'гроза c мелким дождём':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'гроза дождём':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'снег':  // if (x === 'value2')
                this.srcWeatherIcon_3[0].src = require('@/assets/snow.gif');
                break
           }
        }
        if(weatherType[0].name == 'Icon_4'){
            switch(i4[0].overcast) {  
              case 'ясно':  // if (x === 'value1')
                this.srcWeatherIcon_4[0].src = require('@/assets/clear-day.gif');
                break
              case 'слегка облачно':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/partly-cloudy-day.gif');
                break
              case 'пасмурно':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/cloudy.gif');
                break
              case 'облачно':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/cloudy.gif');
                break
              case 'легкий дождь':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/rain.gif');
                break
              case 'дождь':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/rain.gif');
                break
              case 'туманно':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/cloudy.gif');
                break
              case 'гроза':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/storm.gif');
                break  
              case 'гроза c мелким дождём':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'гроза дождём':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'снег':  // if (x === 'value2')
                this.srcWeatherIcon_4[0].src = require('@/assets/snow.gif');
                break
           }
        }
        if(weatherType[0].name == 'Icon_5'){
            switch(i4[0].overcast) {  
              case 'ясно':  // if (x === 'value1')
                this.srcWeatherIcon_5[0].src = require('@/assets/clear-day.gif');
                break
              case 'слегка облачно':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/partly-cloudy-day.gif');
                break
              case 'пасмурно':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/cloudy.gif');
                break
              case 'облачно':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/cloudy.gif');
                break
              case 'легкий дождь':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/rain.gif');
                break
              case 'дождь':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/rain.gif');
                break
              case 'туманно':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/cloudy.gif');
                break
              case 'гроза':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/storm.gif');
                break  
              case 'гроза c мелким дождём':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'гроза дождём':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'снег':  // if (x === 'value2')
                this.srcWeatherIcon_5[0].src = require('@/assets/snow.gif');
                break
           }
        }
        if(weatherType[0].name == 'Icon_6'){
            switch(i4[0].overcast) {  
              case 'ясно':  // if (x === 'value1')
                this.srcWeatherIcon_6[0].src = require('@/assets/clear-day.gif');
                break
              case 'слегка облачно':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/partly-cloudy-day.gif');
                break
              case 'пасмурно':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/cloudy.gif');
                break
              case 'облачно':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/cloudy.gif');
                break
              case 'легкий дождь':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/rain.gif');
                break
              case 'дождь':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/rain.gif');
                break
              case 'туманно':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/cloudy.gif');
                break
              case 'гроза':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/storm.gif');
                break  
              case 'гроза c мелким дождём':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'гроза дождём':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/stormwithrain.gif');
                break
              case 'снег':  // if (x === 'value2')
                this.srcWeatherIcon_6[0].src = require('@/assets/snow.gif');
                break
           }
        }
        

   },

    selectHeaderItem_1(e){
    //    alert(e);
       this.selectedHeaderItem_1 = e;

       var arr_FullDate = [];
       var arr_Date = [];
       var arr_Time = [];
       var arr_days = [];

        for(var i = 0; i < 40; i++){
               var date = this.responceData.list[i].dt_txt;
               arr_FullDate[i] = date.split(' ');
               arr_Time[i] = arr_FullDate[i][1];
               arr_Date[i] = arr_FullDate[i][0].split('-');


            //    var iterationBeginNewDay;
               if(moment(`${arr_Date[0][0]}.${arr_Date[0][1]}.${arr_Date[0][2]}`, 'YYYY.MM.DD').format( 'dddd' )
                == moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' )){

                    console.log(i);
                    // this.iterationBeginNewDay = i;

                    if(arr_Time[i] == e){
                      this.writeToTable(this.responceData, i, this.srcWeatherIcon_1, this.items_1_1, this.items_1_2, this.items_1_3, this.items_1_4);
                    }    
               }
               if(moment(`${arr_Date[0][0]}.${arr_Date[0][1]}.${arr_Date[0][2]}`, 'YYYY.MM.DD').format( 'dddd' )
                == moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' )){

                }
        }

   },

   selectHeaderItem_2(e){
    //    alert(e);
       this.selectedHeaderItem_2 = e;

       var arr_FullDate = [];
       var arr_Date = [];
       var arr_Time = [];
       var arr_days = [];

        for(var i = this.iterationBeginNewDay; i < 40; i++){
               var date = this.responceData.list[i].dt_txt;
               arr_FullDate[i] = date.split(' ');
               arr_Time[i] = arr_FullDate[i][1];
               arr_Date[i] = arr_FullDate[i][0].split('-');

               console.log(this.iterationBeginNewDay);
               var from_i = this.iterationBeginNewDay;
               if(moment(`${arr_Date[from_i][0]}.${arr_Date[from_i][1]}.${arr_Date[from_i][2]}`, 'YYYY.MM.DD').format( 'dddd' )
                == moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' )){

                     console.log(i);
                    // iterationBeginNewDay = i;

                    if(arr_Time[i] == e){
                      this.writeToTable(this.responceData, i, this.srcWeatherIcon_2, this.items_2_1, this.items_2_2, this.items_2_3, this.items_2_4);
                    }    
               }
        }
   },

   selectHeaderItem_3(e){
    //    alert(e);
       this.selectedHeaderItem_3 = e;

       var arr_FullDate = [];
       var arr_Date = [];
       var arr_Time = [];
       var arr_days = [];

        for(var i = this.iterationBeginNewDay + 8; i < 40; i++){
               var date = this.responceData.list[i].dt_txt;
               arr_FullDate[i] = date.split(' ');
               arr_Time[i] = arr_FullDate[i][1];
               arr_Date[i] = arr_FullDate[i][0].split('-');

               console.log(this.iterationBeginNewDay);
               var from_i = this.iterationBeginNewDay + 8;
               if(moment(`${arr_Date[from_i][0]}.${arr_Date[from_i][1]}.${arr_Date[from_i][2]}`, 'YYYY.MM.DD').format( 'dddd' )
                == moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' )){

                     console.log(i);
                    // iterationBeginNewDay = i;

                    if(arr_Time[i] == e){
                      this.writeToTable(this.responceData, i, this.srcWeatherIcon_3, this.items_3_1, this.items_3_2, this.items_3_3, this.items_3_4);
                    }    
               }
        }
   },

   selectHeaderItem_4(e){
    //    alert(e);
       this.selectedHeaderItem_4 = e;

       var arr_FullDate = [];
       var arr_Date = [];
       var arr_Time = [];
       var arr_days = [];

        for(var i = this.iterationBeginNewDay + 16; i < 40; i++){
               var date = this.responceData.list[i].dt_txt;
               arr_FullDate[i] = date.split(' ');
               arr_Time[i] = arr_FullDate[i][1];
               arr_Date[i] = arr_FullDate[i][0].split('-');

               console.log(this.iterationBeginNewDay);
               var from_i = this.iterationBeginNewDay + 16;
               if(moment(`${arr_Date[from_i][0]}.${arr_Date[from_i][1]}.${arr_Date[from_i][2]}`, 'YYYY.MM.DD').format( 'dddd' )
                == moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' )){

                     console.log(i);
                    // iterationBeginNewDay = i;

                    if(arr_Time[i] == e){
                      this.writeToTable(this.responceData, i, this.srcWeatherIcon_4, this.items_4_1, this.items_4_2, this.items_4_3, this.items_4_4);
                    }    
               }
        }
   },

   selectHeaderItem_5(e){
    //    alert(e);
       this.selectedHeaderItem_5 = e;

       var arr_FullDate = [];
       var arr_Date = [];
       var arr_Time = [];
       var arr_days = [];

        for(var i = this.iterationBeginNewDay + 24; i < 40; i++){
               var date = this.responceData.list[i].dt_txt;
               arr_FullDate[i] = date.split(' ');
               arr_Time[i] = arr_FullDate[i][1];
               arr_Date[i] = arr_FullDate[i][0].split('-');

               console.log(this.iterationBeginNewDay);
               var from_i = this.iterationBeginNewDay + 24;
               if(moment(`${arr_Date[from_i][0]}.${arr_Date[from_i][1]}.${arr_Date[from_i][2]}`, 'YYYY.MM.DD').format( 'dddd' )
                == moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' )){

                     console.log(i);
                    // iterationBeginNewDay = i;

                    if(arr_Time[i] == e){
                      this.writeToTable(this.responceData, i, this.srcWeatherIcon_5, this.items_5_1, this.items_5_2, this.items_5_3, this.items_5_4);
                    }    
               }
        }
   },

   selectHeaderItem_6(e){
    //    alert(e);
       this.selectedHeaderItem_6 = e;

       var arr_FullDate = [];
       var arr_Date = [];
       var arr_Time = [];
       var arr_days = [];

        for(var i = this.iterationBeginNewDay + 32; i < 40; i++){
               var date = this.responceData.list[i].dt_txt;
               arr_FullDate[i] = date.split(' ');
               arr_Time[i] = arr_FullDate[i][1];
               arr_Date[i] = arr_FullDate[i][0].split('-');

               console.log(this.iterationBeginNewDay);
               var from_i = this.iterationBeginNewDay + 32;
               if(moment(`${arr_Date[from_i][0]}.${arr_Date[from_i][1]}.${arr_Date[from_i][2]}`, 'YYYY.MM.DD').format( 'dddd' )
                == moment(`${arr_Date[i][0]}.${arr_Date[i][1]}.${arr_Date[i][2]}`, 'YYYY.MM.DD').format( 'dddd' )){

                     console.log(i);
                    // iterationBeginNewDay = i;

                    if(arr_Time[i] == e){
                      this.writeToTable(this.responceData, i, this.srcWeatherIcon_6, this.items_6_1, this.items_6_2, this.items_6_3, this.items_6_4);
                    }    
               }
        }
   }
  }

};
</script>


<style scoped>
  .txt_cen {
    text-align: center;
  }
  /* .container {
    max-width: 1300px;
  } */
  .work_place {
    background: white;
  }
   .table {
    text-align: center;
  }
  .loading_hidden {
      visibility: hidden;
  }
</style>