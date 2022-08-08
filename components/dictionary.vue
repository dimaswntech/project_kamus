<!-- Please remove this file from your project -->
<template>
  <div class="flex bg-[#F7ECDE] min-h-screen">
    <div class="items-center justify-center lg:w-max lg:h-max m-auto ">
      <div class="grid lg:grid-cols-2 gap-3.5 lg:grid-rows-2">
        <div class="box py-3 px-8 flex flex-col">
          <div class="flex justify-center">
            <div class=" inputSection relative">
              <img @click="load" class="absolute z-20 left-0 top-0 h-[10rem]" src="images/logo_kbbi.png">
              <input v-model="kata" class="translate-y-1/2 inputKata h-[5rem] w-full"/>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-[50px] mt-[4rem] font-josefin">your kata</p>
            <p class="text-[90px] font-pacivico">{{ kata }}</p>
          </div>
        </div>
        <div class="box row-span-2">2</div>
        <div class="boks box py-3 px-8 flex flex-col">
          <p>{{arti}}</p>
        </div>
      </div>
    </div>
    <!--      <div class="mb-6">-->
    <!--        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your kata</label>-->
    <!--        <input v-model="kata" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required="">-->
    <!--      </div>-->

    <!--      <button @click="load" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>-->

    <!--      <p class="font-fraunces">{{arti}}</p>-->
  </div>
</template>

<script lang="ts">
export {default} from './dictionary.controller'
</script>
