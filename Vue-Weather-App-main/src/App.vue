<template>
	<div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
		<main>
			<div class="search-box">
				<input
					type="text"
					class="search-bar"
					placeholder="Search Your Location..."
					v-model="query"
					@keypress="fetchWeather"
				/>
			</div>
			<div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
				<div class="location-box">
					<div class="location">{{ weather.name}}, {{ weather.sys.country}}</div>
					<div class="date">{{ dateBuilder() }}</div>
				</div>

				<div class="weather-box">
					<div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
					<div class="weather">{{ weather.weather[0].main }}</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			api_key: 'de092c41abe49a731aed775c3601ccce',
			url_base: "https://api.openweathermap.org/data/2.5/",
			query: '',
			weather: {},
		}
	},
	methods: {
		fetchWeather(e) {
			if(e.key == 'Enter'){
				fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
				.then(res => {
					return res.json();
				}).then(this.setResults);
			}
		},
		setResults(results){
			this.weather = results;
		},
		dateBuilder () {
			return new Date().toUTCString();
		}
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	width: 500px;
	margin: 0 auto;
}
#app{
	background-image: url('./assets/cold-bg.webp');
	background-size: cover;
	background-position: bottom;
	transition: 0.4s;
}
#app.warm {
	background-image: url('./assets/warm-bg.webp');
}
main{
	min-height: 100vh;
	padding: 25px;
	background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
.search-box {
	width: 100%;
	margin-bottom: 30px;
}
.search-box .search-bar{
	display: block;
	width: 100%;
	padding: 15px;
	color: #313131;
	font-size: 20px;

	appearance: none;
	border: none;
	outline: none;
	background: none;
	
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
	background-color: rgba(255, 255, 255, 0.45);
	border-radius: 0px 16px 0px 16px;
	transition: 0.4s;
}
.search-box .search-bar:focus{
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
	background-color: rgba(255, 255, 255, 0.75);
	border-radius: 16px 0px 16px 0px;
}
.location-box .location{
	color: #fff;
	font-size: 45px;
	font-weight: 700;
	text-align: center;
	text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date{
	color: #fff;
	font-size: 30px;
	font-weight: 500;
	text-align: center;
	margin-top: 10px;
}
.weather-box{
	text-align: center;
}
.weather-box .temp{
	display: inline-block;
	padding: 10px 25px;
	color: white;
	font-size: 120px;
	font-weight: 1000;

	text-shadow: 3px 4px rgba(0, 0, 0, 0.25);
	background-color: rgba(255, 255, 255, 0.25);
	border-radius: 16px;
	margin: 30px 0px;

	box-shadow: 3px 4px rgba(0, 0, 0, 0.25);
}
.weather-box .weather{
	color: white;
	font-size: 45px;
	font-weight: 700;
	font-style: italic;
	text-shadow: 3px 4px rgba(0, 0, 0, 0.25);
}
</style>
