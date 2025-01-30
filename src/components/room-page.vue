<template>
<div class="pt-8 pt-sm-16">
    <v-row class="d-flex justify-center pb-2 pb-sm-7 x">
        <v-col cols="11" md="8" class="d-flex flex-column align-center px-8">
            <p class="text-h4 text-sm-h3 text-md-h2 font-weight-bold">{{$store.state.room[0]}}</p>
            <p class="text-body-2 text-sm-h6 text-xl-h5 mt-2 mt-sm-4 text-center font-weight-light">{{$store.state.room[1]}}</p>
        </v-col>
    </v-row>
    <v-row class="x">
        <v-col cols="12" class="pa-0">
            <v-carousel hide-delimiters height="75vw">
                <v-carousel-item v-for="(image,index) in $store.state.images2" :key="index">
                    <v-img :src="image">
                      <div class="d-flex align-center flex-column justify-space-between justify-sm-center px-sm-14 text-center pt-6" :style="{background: 'rgba(0,0,0,0.2)',height: '100%'}">
                        <p class="white--text text-h4 text-sm-h3 text-md-h2 text-xl-h1 mb-6 font-weight-medium mt-16">{{ $store.state.price[index] }} </p>
                        <p class="white--text text-body-2 text-sm-h6 text-xl-h4 font-weight-light ">{{ $store.state.desc[index] }} </p>
                      </div>
                    </v-img>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</div>
</template>
<script>

</script>
<style>

</style>