webpackJsonp([1],{"+LAI":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{ref:"input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value}})},a=[]},"/yRs":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("OKsc"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);var i=n("PgS5"),r=n("XyMi");function u(e){n("h/28")}var l=!1,c=u,d=null,p=null,m=Object(r["a"])(a.a,i["a"],i["b"],l,c,d,p);t["default"]=m.exports},0:function(e,t,n){e.exports=n("NHnr")},"0P3x":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-map-container"},[n("div",{ref:"vue-map",staticClass:"vue-map"}),e._v(" "),n("div",{staticClass:"vue-map-hidden"},[e._t("default")],2),e._v(" "),e._t("visible")],2)},a=[]},"5ZbH":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("QUze"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);var i=n("0P3x"),r=n("XyMi");function u(e){n("XAJt")}var l=!1,c=u,d=null,p=null,m=Object(r["a"])(a.a,i["a"],i["b"],l,c,d,p);t["default"]=m.exports},"5cLx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("8AJf"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);var i=n("PH4c"),r=n("XyMi"),u=!1,l=null,c=null,d=null,p=Object(r["a"])(a.a,i["a"],i["b"],u,l,c,d);t["default"]=p.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("/5sW"),a=(n("uDYd"),n("sA6N")),s=n("PlbA"),i=n.n(s),r=n("rn45"),u=n.n(r),l=function(e,t){var n={north:e.lat,south:e.lat,west:e.lng,east:e.lng};return t.forEach(function(e){e.lat>n.north&&(n.north=e.lat),e.lat<n.south&&(n.south=e.lat),e.lng<n.west&&(n.west=e.lng),e.lng>n.east&&(n.east=e.lng)}),new window.google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east))};o["a"].use(i.a),o["a"].use(a,{load:{key:"AIzaSyAlfIPueH1ILDGeT2z_neVtoDe6NW4_g2I",libraries:"places"}});var c={name:"MapComponent",props:{msg:String,bikeData:Object,givenAddress:Object,numStations:Number},data:function(){return{shownStations:[],recentOrigin:this.givenAddress}},asyncComputed:{stations:{get:function(){var e=this;return fetch("https://www.rideindego.com/stations/json/").then(function(e){return e.json()}).then(function(e){return e.features}).then(function(t){return t.forEach(function(t){t.geometry.position={lng:t.geometry.coordinates[0],longitude:t.geometry.coordinates[0],latitude:t.geometry.coordinates[1],lat:t.geometry.coordinates[1]},t.geometry.distance=u()(e.givenAddress,t.geometry.position,{unit:"mile"})}),t.sort(function(e,t){return e.geometry.distance<t.geometry.distance?-1:e.geometry.distance===t.geometry.distance?0:1}),e.shownStations=t.slice(0,e.numStations),e.shownColors(),t})},default:[]}},methods:{shownColors:function(){var e=13;this.shownStations.forEach(function(t){var n=t.properties.totalDocks;t.classes={bikes:"bikesAvailable level-".concat(Math.max((t.properties.bikesAvailable/n*e).toFixed(0),1)),docks:"docksAvailable level-".concat(Math.max((t.properties.docksAvailable/n*e).toFixed(0),1))}})},isEquivalent:function(e,t){var n=Object.getOwnPropertyNames(e),o=Object.getOwnPropertyNames(t);if(n.length!=o.length)return!1;for(var a=0;a<n.length;a++){var s=n[a];if(e[s]!==t[s])return!1}return!0},getBounds:function(){var e=[];return this.shownStations.forEach(function(t){e.push(t.geometry.position)}),l(this.givenAddress,e)},updateShownStations:function(){var e=this.givenAddress;this.recentOrigin!==this.givenAddress&&(this.recentOrigin=this.givenAddress,this.stations.forEach(function(t){t.geometry.distance=u()(e,t.geometry.position,{unit:"mile"})}),this.stations.sort(function(e,t){return e.geometry.distance<t.geometry.distance?-1:e.geometry.distance===t.geometry.distance?0:1})),this.shownStations=this.stations.slice(0,this.numStations),this.shownColors()}},watch:{numStations:function(){this.updateShownStations()}},updated:function(){var e=this,t=this.$children[0];t.$mapCreated.then(function(){e.$emit("mapsLoaded"),e.isEquivalent(e.givenAddress,e.recentOrigin)||e.updateShownStations(),t.fitBounds(e.getBounds())})}},d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.stations.length>0?n("gmap-map",{staticStyle:{width:"100%",height:"100%"},attrs:{center:e.givenAddress,zoom:17}},[n("gmap-marker",{attrs:{position:e.givenAddress,clickable:!0,draggable:!1},on:{"update:position":function(t){e.givenAddress=t},"g-click":function(t){e.center=e.givenAddress}}}),e._v(" "),e._l(e.shownStations,function(t,o){return n("gmap-info-window",{attrs:{position:t.geometry.position,opened:!0}},[n("div",{staticClass:"infowindow"},[n("div",{class:t.classes.bikes},[n("div",[e._v("\n          "+e._s(t.properties.bikesAvailable)+"\n        ")]),e._v("\n        bikes\n      ")]),e._v(" "),n("div",{class:t.classes.docks},[n("div",[e._v("\n          "+e._s(t.properties.docksAvailable)+"\n        ")]),e._v("\n        docks\n      ")]),e._v(" "),n("div",{staticClass:"iw-distance"},[e._v("\n        "+e._s(t.geometry.distance.toFixed(3))+" miles away\n      ")]),e._v(" "),n("div",{staticClass:"iw-address"},[e._v("\n        "+e._s(t.properties.addressStreet)+"\n      ")])])])})],2):e._e()},p=[],m=n("XyMi"),f=!1,h=null,g=null,v=null,w=Object(m["a"])(c,d,p,f,h,g,v),_=w.exports,y={name:"VueGoogleAutocomplete",props:{id:{type:String,required:!0},classname:String,placeholder:{type:String,default:"Start typing"},types:{type:String,default:"address"},country:{type:[String,Array],default:null},enableGeolocation:{type:Boolean,default:!1}},data:function(){return{autocomplete:null,autocompleteText:""}},watch:{autocompleteText:function(e,t){this.$emit("inputChange",{newVal:e,oldVal:t},this.id)},country:function(e,t){this.autocomplete.setComponentRestrictions({country:null===this.country?[]:this.country})}},mounted:function(){var e=this,t={};this.types&&(t.types=[this.types]),this.country&&(t.componentRestrictions={country:this.country}),this.autocomplete=new google.maps.places.Autocomplete(document.getElementById(this.id),t),this.autocomplete.addListener("place_changed",function(){var t=e.autocomplete.getPlace();if(t.geometry){var n={street_number:"short_name",route:"long_name",locality:"long_name",administrative_area_level_1:"short_name",country:"long_name",postal_code:"short_name"},o={};if(void 0!==t.address_components){for(var a=0;a<t.address_components.length;a++){var s=t.address_components[a].types[0];if(n[s]){var i=t.address_components[a][n[s]];o[s]=i}}o["latitude"]=t.geometry.location.lat(),o["longitude"]=t.geometry.location.lng(),e.$emit("placechanged",o,t,e.id),e.autocompleteText=document.getElementById(e.id).value,e.onChange()}}else e.$emit("no-results-found",t,e.id)})},methods:{onFocus:function(){this.geolocate(),this.$emit("focus")},onBlur:function(){this.$emit("blur")},onChange:function(){this.$emit("change",this.autocompleteText)},onKeyPress:function(e){this.$emit("keypress",e)},onKeyUp:function(e){this.$emit("keyup",e)},clear:function(){this.autocompleteText=""},focus:function(){this.$refs.autocomplete.focus()},blur:function(){this.$refs.autocomplete.blur()},update:function(e){this.autocompleteText=e},geolocate:function(){var e=this;this.enableGeolocation&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var n={lat:t.coords.latitude,lng:t.coords.longitude},o=new google.maps.Circle({center:n,radius:t.coords.accuracy});e.autocomplete.setBounds(o.getBounds())})}}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{directives:[{name:"model",rawName:"v-model",value:e.autocompleteText,expression:"autocompleteText"}],ref:"autocomplete",class:e.classname,attrs:{type:"text",id:e.id,placeholder:e.placeholder},domProps:{value:e.autocompleteText},on:{focus:function(t){e.onFocus()},blur:function(t){e.onBlur()},change:e.onChange,keypress:e.onKeyPress,keyup:e.onKeyUp,input:function(t){t.target.composing||(e.autocompleteText=t.target.value)}}})},S=[],x=!1,O=null,A=null,C=null,L=Object(m["a"])(y,b,S,x,O,A,C),I=L.exports,P=(n("y9m4"),function(){var e,t=window.localStorage,n=6e5;return t.getItem("weatherResponse")&&Date.now()-t.getItem("responseTimestamp")<n?(e=Promise.resolve(JSON.parse(t.getItem("weatherResponse"))),console.log("Last logged at "+new Date(parseInt(t.getItem("responseTimestamp"),10)))):(e=fetch("http://api.openweathermap.org/data/2.5/weather?id=4560349&appid=5790ba0426703e515167d3125b32a431").then(function(e){var t=e.json();return t}).then(function(e){return t.setItem("weatherResponse",JSON.stringify(e)),t.setItem("responseTimestamp",Date.now()),e}).catch(function(e){console.log(e)}),t.setItem("responseTimestamp",Date.now()),console.log("Logged at "+new Date(parseInt(t.getItem("responseTimestamp"),10)).toString())),e}),T={getTempInF:function(e){return 9*e/5-459.67},getSpeedInMPH:function(e){return 2.2369*e}},$={temps:{yellow:{low:49,high:86},red:{low:20,high:98}},wind:{yellow:20,red:30},codes:{yellow:[200,201,210,221,230,231,232,520,521,531,602,616,621],red:[202,211,212,503,504,511,522,611,612,622,762,771,781,900,901,902,903,904,905,906,957,958,959,960,961,962]}},k=function(e){var t=0;return t=T.getTempInF(e.main.temp_min)<$.temps.red.low||T.getTempInF(e.main.temp_max)>$.temps.red.high?3:e.main.temp_min<$.temps.yellow.low||e.main.temp_max>$.temps.yellow.high?2:1,t=e.wind.speed>$.wind.red?3:e.wind.speed>$.wind.yellow&&t<=2?2:1,t<3?$.codes.red.forEach(function(n){e.weather[0].id===n&&(t=3)}):t<2?$.codes.yellow.forEach(function(n){e.weather[0].id===n&&(t=2)}):t=1,t},j={name:"WeatherPanel",props:{},data:function(){return{iconURL:"",temp:0,speed:0,threatLevel:0,warningClass:"",warningText:"",weather:void 0,description:""}},methods:{setupWeather:function(e){this.iconURL="https://openweathermap.org/img/w/"+e.weather[0].icon+".png",this.temp=T.getTempInF(e.main.temp).toFixed(1),this.speed=T.getSpeedInMPH(e.wind.speed).toFixed(1),this.threatLevel=k(e),this.weather=e,this.description=this.weather.weather[0].description,this.setWarning()},setWarning:function(){3===this.threatLevel?(this.warningClass="warning-red",this.warningText="Do not go out there"):2===this.threatLevel?(this.warningClass="warning-yellow",this.warningText="Dress appropriately"):1===this.threatLevel?(this.warningClass="warning-green",this.warningText="Good to go!"):(this.warningClass="warning-blue",this.warningText="Whoops! Something went wrong!",console.log(this.threatLevel))}},mounted:function(){var e=this;P().then(function(t){e.setupWeather(t)})}},E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weather-panel"},[n("img",{attrs:{src:e.iconURL}}),e._v(" "),n("div",{staticClass:"temp"},[e._v("\n    "+e._s(e.temp+"°F")+"\n  ")]),e._v(" "),n("div",[n("div",{staticClass:"wind"},[e._v("\n      "+e._s(e.speed)+" mph winds\n    ")]),e._v(" "),n("div",{staticClass:"description"},[e._v("\n      "+e._s(e.description)+"\n    ")])]),e._v(" "),n("div",{class:e.warningClass},[e._v("\n    "+e._s(e.warningText)+"\n  ")])])},D=[],M=!1,N=null,F=null,B=null,H=Object(m["a"])(j,E,D,M,N,F,B),W=H.exports;o["a"].use(a,{load:{key:"AIzaSyAlfIPueH1ILDGeT2z_neVtoDe6NW4_g2I",libraries:"places"}});var R={name:"DataPanel",props:{mapsLoaded:Boolean},data:function(){return{address:{}}},components:{VueGoogleAutocomplete:I,WeatherPanel:W},updated:function(){this.mapsLoaded&&this.$refs["address-bar"].focus()},methods:{getAddressData:function(e,t,n){this.address={lat:e.latitude,latitude:e.latitude,lng:e.longitude,longitude:e.longitude},this.$emit("addressSubmit",this.address)},updateNumberOfStations:function(e){this.$emit("updateNumberOfStations",parseInt(e.srcElement.value))}}},X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"data-panel"},[e.mapsLoaded?n("vue-google-autocomplete",{ref:"address-bar",attrs:{id:"address-bar",classname:"form-control",placeholder:"Enter an address"},on:{placechanged:e.getAddressData}}):e._e(),e._v(" "),n("br"),e._v(" "),n("label",{attrs:{for:"number-of-stations"}},[e._v("\n    Number of Stations Shown:\n  ")]),e._v(" "),n("input",{ref:"number-of-stations",attrs:{id:"number-of-stations",type:"number",value:"3"},on:{change:e.updateNumberOfStations}}),e._v(" "),n("weather-panel")],1)},G=[],z=!1,J=null,K=null,U=null,V=Object(m["a"])(R,X,G,z,J,K,U),q=V.exports,Y={name:"app",components:{MapComponent:_,DataPanel:q},data:function(){return{center:{lat:39.9524,latitude:39.9524,lng:-75.1636,longitude:-75.1636},numberOfStations:3,mapsIsLoaded:!1}},methods:{mapsLoaded:function(){this.mapsIsLoaded=!0},updateAddress:function(e){this.center=e},updateNumberOfStations:function(e){this.numberOfStations=e}}},Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("DataPanel",{attrs:{mapsLoaded:e.mapsIsLoaded},on:{addressSubmit:e.updateAddress,updateNumberOfStations:e.updateNumberOfStations}}),e._v(" "),n("MapComponent",{attrs:{msg:"This is City Hall","given-address":e.center,"num-stations":e.numberOfStations},on:{mapsLoaded:e.mapsLoaded}})],1)},Z=[],ee=!1,te=null,ne=null,oe=null,ae=Object(m["a"])(Y,Q,Z,ee,te,ne,oe),se=ae.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(se)}}).$mount("#app")},PH4c:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"flyaway"},[e._t("default")],2)])},a=[]},PgS5:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-street-view-pano-container"},[n("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),e._v(" "),e._t("default")],2)},a=[]},XAJt:function(e,t){},YI6p:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("bK0f"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);var i=n("khFq"),r=n("XyMi"),u=!1,l=null,c=null,d=null,p=Object(r["a"])(a.a,i["a"],i["b"],u,l,c,d);t["default"]=p.exports},"h/28":function(e,t){},khFq:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("span",{domProps:{textContent:e._s(e.label)}}),e._v(" "),n("input",{ref:"input",class:e.className,attrs:{type:"text",placeholder:e.placeholder}})])},a=[]},preG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("6Xnz"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);var i=n("+LAI"),r=n("XyMi"),u=!1,l=null,c=null,d=null,p=Object(r["a"])(a.a,i["a"],i["b"],u,l,c,d);t["default"]=p.exports}},[0]);
//# sourceMappingURL=app.bdd41e70.js.map