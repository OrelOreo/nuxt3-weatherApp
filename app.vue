<script setup lang="ts">

  const {data : city, error} = useFetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=a1c5211db4be6f424be33b83f3f61e46")

</script>

<template>
  <div class="h-screen relative overflow-hidden">
   <img />
    <div class="absolute w-full h-full top-0 overlay"/>
    <div class="absolute w-full h-full top-0 p-48">
      <div class="flex justify-between">
        <div>
            <h1 class="text-7xl text-white">{{ city.name }}</h1>
            <p class="font-extralight text-2xl mt-2 text-white">Sunday Dec 9th</p>
            <img 
            :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`" 
             class="w-56 icon" />
        </div>
      <div>
        <p class="text-9xl text-white font-extralight">{{ city.main.temp }} °</p>
      </div>
      </div>
      <div class="mt-20">
        <input type="text" class="w-1/2 h-10" placeholder="Search a city...">
        <button class="bg-sky-400 w-20 text-white h-10">Search</button>
      </div>
    </div>
  </div>
</template>


<style scoped>

  .overlay {
    background-color: rgb(0, 0, 0,0.5);
  }
  .icon {
    margin-left: -2.75rem;
    margin-top: -2.75rem;
  }

</style>